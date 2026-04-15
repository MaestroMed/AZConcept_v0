"use client";

import { useEffect, useRef } from "react";

interface MeshGradientProps {
  colors?: string[];
  speed?: number;
  className?: string;
}

const VERTEX_SHADER = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_colors[5];

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Fractal Brownian Motion — layered noise for organic feel
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  for (int i = 0; i < 5; i++) {
    value += amplitude * snoise(p * frequency);
    frequency *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time * 0.08;

  // Warped UV — organic membrane distortion
  vec2 warp = vec2(
    fbm(uv * 2.0 + vec2(t * 0.7, t * 0.3)),
    fbm(uv * 2.0 + vec2(t * 0.4, t * 0.6) + 5.0)
  );
  vec2 warped = uv + warp * 0.15;

  // Color zones — smooth blend across x axis with noise distortion
  float zone = warped.x + fbm(warped * 1.5 + t * 0.3) * 0.2;

  // 5-color smooth interpolation
  vec3 col;
  if (zone < 0.25) {
    col = mix(u_colors[0], u_colors[1], smoothstep(0.0, 0.25, zone));
  } else if (zone < 0.5) {
    col = mix(u_colors[1], u_colors[2], smoothstep(0.25, 0.5, zone));
  } else if (zone < 0.75) {
    col = mix(u_colors[2], u_colors[3], smoothstep(0.5, 0.75, zone));
  } else {
    col = mix(u_colors[3], u_colors[4], smoothstep(0.75, 1.0, zone));
  }

  // Second layer — subtler, different frequency
  float n2 = fbm(warped * 3.0 - t * 0.5) * 0.08;
  col += n2;

  // Vignette
  float vig = 1.0 - 0.15 * length((uv - 0.5) * vec2(1.0, 0.6));
  col *= vig;

  gl_FragColor = vec4(col, 1.0);
}`;

function hexToVec3(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return [r, g, b];
}

export function MeshGradient({
  colors = ["#d8d0c4", "#a0a0b0", "#3a64c0", "#242840", "#181820"],
  speed = 1,
  className,
}: MeshGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false, preserveDrawingBuffer: false });
    if (!gl) return;

    // Compile shaders
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, VERTEX_SHADER);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, FRAGMENT_SHADER);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error("Fragment shader error:", gl.getShaderInfoLog(fs));
      return;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Full-screen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const colorsLoc = gl.getUniformLocation(program, "u_colors");

    // Set colors
    const colorData: number[] = [];
    colors.forEach((c) => colorData.push(...hexToVec3(c)));
    gl.uniform3fv(colorsLoc, new Float32Array(colorData));

    // Resize
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    // Render loop
    const start = performance.now();
    const render = () => {
      const elapsed = (performance.now() - start) / 1000;
      gl.uniform1f(timeLoc, elapsed * speed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [colors, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

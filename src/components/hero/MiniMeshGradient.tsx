"use client";

import { useEffect, useRef } from "react";

interface Props {
  /** Primary color hex — tints the entire gradient */
  color?: string;
  /** Opacity 0-1 */
  opacity?: number;
  className?: string;
}

const VERTEX = `attribute vec2 position; void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const FRAGMENT = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_color;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
  vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0,i1.y,1.0)) + i.x + vec3(0.0,i1.x,1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0*fract(p*C.www)-1.0;
  vec3 h = abs(x)-0.5;
  vec3 ox = floor(x+0.5);
  vec3 a0 = x-ox;
  m *= 1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g; g.x=a0.x*x0.x+h.x*x0.y; g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m, g);
}
float fbm(vec2 p) {
  float v=0.0, a=0.5;
  for(int i=0;i<4;i++) { v+=a*snoise(p); p*=2.0; a*=0.5; }
  return v;
}
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time * 0.06;
  vec2 warp = vec2(fbm(uv*1.8+t*0.5), fbm(uv*1.8+t*0.3+5.0));
  vec2 w = uv + warp*0.12;
  float n = fbm(w*2.0+t*0.2)*0.5+0.5;
  // Mix between dark base and tinted color
  vec3 dark = vec3(0.06,0.06,0.08);
  vec3 col = mix(dark, u_color, n*0.35);
  // Vignette
  col *= 1.0-0.2*length((uv-0.5)*vec2(1.4,0.8));
  gl_FragColor = vec4(col, 1.0);
}`;

function hexToVec3(hex: string): [number, number, number] {
  return [parseInt(hex.slice(1,3),16)/255, parseInt(hex.slice(3,5),16)/255, parseInt(hex.slice(5,7),16)/255];
}

export function MiniMeshGradient({ color = "#3a64c0", opacity = 0.5, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;

    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, VERTEX); gl.compileShader(vs);
    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, FRAGMENT); gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs); gl.attachShader(prog, fs);
    gl.linkProgram(prog); gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const tLoc = gl.getUniformLocation(prog, "u_time");
    const rLoc = gl.getUniformLocation(prog, "u_resolution");
    const cLoc = gl.getUniformLocation(prog, "u_color");

    gl.uniform3fv(cLoc, new Float32Array(hexToVec3(color)));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(rLoc, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const start = performance.now();
    const render = () => {
      gl.uniform1f(tLoc, (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", opacity }}
    />
  );
}

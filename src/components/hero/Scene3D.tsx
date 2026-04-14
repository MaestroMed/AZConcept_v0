"use client";

import { Suspense, ReactNode, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  AccumulativeShadows,
  RandomizedLight,
  Float,
  PerformanceMonitor,
  Preload,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  N8AO,
} from "@react-three/postprocessing";
import { ACESFilmicToneMapping } from "three";
import * as THREE from "three";

interface Scene3DProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  cameraFov?: number;
  shadowY?: number;
  floatSpeed?: number;
  floatIntensity?: number;
  isHovered?: boolean;
}

/**
 * Sweeping light that glides across objects — slow-mo progressive glow.
 * A point light that orbits slowly, creating moving reflections on metals.
 */
function SweepingLight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!lightRef.current) return;
    const t = state.clock.elapsedTime;
    // Slow orbit — 25 second cycle
    lightRef.current.position.x = Math.sin(t * 0.25) * 5;
    lightRef.current.position.z = Math.cos(t * 0.25) * 4;
    lightRef.current.position.y = 3 + Math.sin(t * 0.15) * 1.5;
    // Intensity breathes
    lightRef.current.intensity = 0.6 + Math.sin(t * 0.3) * 0.25;
  });

  return <pointLight ref={lightRef} color="#f0e8e0" distance={12} decay={2} />;
}

export function Scene3D({
  children,
  className,
  cameraPosition = [0, 2, 5],
  cameraFov = 30,
  shadowY = -0.65,
  floatSpeed = 1.5,
  floatIntensity = 0.15,
  isHovered = false,
}: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov: cameraFov }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <PerformanceMonitor>
            {/* Stronger ambient for visibility */}
            <ambientLight intensity={0.4} color="#f0ece4" />

            {/* Sweeping light — creates moving reflections */}
            <SweepingLight />

            {/* Custom studio Lightformers — brighter than before */}
            <Environment resolution={256}>
              {/* Key light — très large, très douce */}
              <Lightformer
                intensity={3}
                position={[-5, 5, -2]}
                scale={[12, 5, 1]}
                color="#fff8f0"
              />
              {/* Fill — warm tone */}
              <Lightformer
                intensity={1}
                position={[5, -1, 3]}
                scale={[8, 4, 1]}
                color="#e8dcd0"
              />
              {/* Rim — contour brillant */}
              <Lightformer
                intensity={2}
                position={[0, 4, 5]}
                scale={[10, 3, 1]}
                color="#e8f0ff"
              />
              {/* Bottom — bounce chaud */}
              <Lightformer
                intensity={0.6}
                position={[0, -3, 0]}
                scale={[14, 2, 10]}
                color="#e0d8cc"
              />
              {/* Back — mid-tone pour reflets visibles (pas trop sombre) */}
              <Lightformer
                intensity={0.3}
                position={[0, 0, -8]}
                scale={[20, 20, 1]}
                color="#8888a0"
              />
            </Environment>

            {/* Accumulative shadows */}
            <AccumulativeShadows
              temporal
              frames={60}
              scale={8}
              position={[0, shadowY, 0]}
              opacity={0.3}
              color="#000000"
            >
              <RandomizedLight
                amount={8}
                radius={5}
                position={[-4, 5, -3]}
                bias={0.001}
              />
            </AccumulativeShadows>

            {/* Float */}
            <Float
              speed={floatSpeed}
              rotationIntensity={isHovered ? 0.12 : 0.04}
              floatIntensity={isHovered ? 0.25 : floatIntensity}
              floatingRange={[-0.04, 0.04]}
            >
              {children}
            </Float>

            {/* Post-processing */}
            <EffectComposer multisampling={4}>
              <N8AO intensity={0.35} aoRadius={0.6} distanceFalloff={0.5} />
              <Bloom luminanceThreshold={0.7} luminanceSmoothing={0.4} intensity={0.2} />
              <Vignette offset={0.3} darkness={0.25} />
            </EffectComposer>
          </PerformanceMonitor>

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

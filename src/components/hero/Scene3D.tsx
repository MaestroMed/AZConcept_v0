"use client";

import { Suspense, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
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
 * Scene3D — The premium wrapper.
 *
 * Custom studio lighting via Lightformers (not presets),
 * AccumulativeShadows for physically-correct soft shadows,
 * N8AO + Bloom + Vignette post-processing pipeline,
 * PerformanceMonitor for auto GPU scaling.
 */
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
          toneMappingExposure: 1.1,
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <PerformanceMonitor>
            {/* === CUSTOM STUDIO LIGHTING via Lightformers === */}
            <Environment resolution={256}>
              {/* Key light — grande softbox haut-gauche */}
              <Lightformer
                intensity={2.2}
                position={[-5, 5, -3]}
                scale={[10, 4, 1]}
                color="#ffffff"
              />
              {/* Fill light — douce, côté opposé */}
              <Lightformer
                intensity={0.6}
                position={[5, -2, 3]}
                scale={[6, 3, 1]}
                color="#b0c0e0"
              />
              {/* Rim light — arrière, contour premium */}
              <Lightformer
                intensity={1.4}
                position={[0, 4, 5]}
                scale={[8, 2, 1]}
                color="#e0e8ff"
              />
              {/* Bottom bounce — réflexion sol subtile */}
              <Lightformer
                intensity={0.3}
                position={[0, -4, 0]}
                scale={[12, 1, 8]}
                color="#d0d0d8"
              />
              {/* Background — sombre pour reflets réalistes */}
              <Lightformer
                intensity={0.08}
                position={[0, 0, -10]}
                scale={[20, 20, 1]}
                color="#1a1a24"
              />
            </Environment>

            {/* === ACCUMULATIVE SHADOWS — ultra-soft === */}
            <AccumulativeShadows
              temporal
              frames={80}
              scale={8}
              position={[0, shadowY, 0]}
              opacity={0.45}
              color="#000000"
            >
              <RandomizedLight
                amount={8}
                radius={5}
                position={[-4, 5, -3]}
                bias={0.001}
              />
            </AccumulativeShadows>

            {/* === 3D OBJECTS with Float === */}
            <Float
              speed={floatSpeed}
              rotationIntensity={isHovered ? 0.12 : 0.04}
              floatIntensity={isHovered ? 0.25 : floatIntensity}
              floatingRange={[-0.04, 0.04]}
            >
              {children}
            </Float>

            {/* === POST-PROCESSING PIPELINE === */}
            <EffectComposer multisampling={4}>
              {/* N8AO — ambient occlusion contact shadows */}
              <N8AO
                intensity={0.5}
                aoRadius={0.8}
                distanceFalloff={0.5}
              />
              {/* Bloom — subtil sur spéculaires uniquement */}
              <Bloom
                luminanceThreshold={0.85}
                luminanceSmoothing={0.3}
                intensity={0.12}
              />
              {/* Vignette — bords cinéma */}
              <Vignette offset={0.25} darkness={0.35} />
            </EffectComposer>
          </PerformanceMonitor>

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

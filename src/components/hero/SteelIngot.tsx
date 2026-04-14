"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Scene3D } from "./Scene3D";

interface Props { isHovered: boolean; isClicked: boolean; }

function Ingots() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = -0.35 + Math.sin(t * 0.2) * 0.015;
  });

  return (
    <group ref={groupRef} rotation={[-0.2, -0.35, 0]}>
      {/* Bottom-left ingot — dark matte fonte, on the ground */}
      <RoundedBox args={[2, 0.5, 1]} radius={0.03} smoothness={4}
        position={[-0.55, -0.25, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#6a6872"
          metalness={0.8}
          roughness={0.55}
          envMapIntensity={1.0}
        />
      </RoundedBox>

      {/* Bottom-right ingot — collé à côté, même niveau, slightly different tone */}
      <RoundedBox args={[1.1, 0.5, 1]} radius={0.03} smoothness={4}
        position={[1.0, -0.25, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#7a7880"
          metalness={0.8}
          roughness={0.5}
          envMapIntensity={1.1}
        />
      </RoundedBox>

      {/* Top ingot — empilé sur le lingot gauche, bright brushed aluminum */}
      <RoundedBox args={[2, 0.45, 1]} radius={0.03} smoothness={4}
        position={[-0.55, 0.25, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#d8d4ce"
          metalness={0.95}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.03}
          envMapIntensity={2}
        />
      </RoundedBox>
    </group>
  );
}

export function SteelIngot({ isHovered, isClicked }: Props) {
  return (
    <Scene3D
      className="w-[200px] h-[160px] sm:w-[260px] sm:h-[200px] lg:w-[320px] lg:h-[240px]"
      cameraPosition={[0, 2, 5]}
      cameraFov={28}
      shadowY={-0.65}
      isHovered={isHovered}
    >
      <Ingots />
    </Scene3D>
  );
}

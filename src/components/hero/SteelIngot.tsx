"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Scene3D } from "./Scene3D";

interface Props { isHovered: boolean; isClicked: boolean; }

function Ingots({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = -0.6 + Math.sin(t * 0.2) * 0.02;
  });

  return (
    <group ref={groupRef} rotation={[-0.25, -0.6, 0]}>
      {/* Bottom ingot — matte iron/fonte — LIGHTER than before */}
      <RoundedBox args={[2.4, 0.5, 1.2]} radius={0.04} smoothness={4}
        position={[0, -0.15, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#7a7880"
          metalness={0.8}
          roughness={0.5}
          envMapIntensity={1.2}
        />
      </RoundedBox>

      {/* Top ingot — bright brushed aluminum — VERY reflective */}
      <RoundedBox args={[2.2, 0.45, 1.1]} radius={0.04} smoothness={4}
        position={[0.25, 0.32, 0.08]} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#e0dcd6"
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
      cameraPosition={[0, 2.2, 5.5]}
      cameraFov={26}
      shadowY={-0.6}
      isHovered={isHovered}
    >
      <Ingots isHovered={isHovered} />
    </Scene3D>
  );
}

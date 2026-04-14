"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Scene3D } from "./Scene3D";

interface Props { isHovered: boolean; isClicked: boolean; }

function Monolith() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = -0.5 + Math.sin(t * 0.15) * 0.015;
  });

  return (
    // Rectangle allongé vers le haut — ratio ~1:2.2:1
    <RoundedBox ref={ref} args={[1.2, 2.6, 1.1]} radius={0.025} smoothness={4}
      rotation={[0, -0.5, 0]} castShadow receiveShadow>
      <meshPhysicalMaterial
        color="#484850"
        metalness={0.65}
        roughness={0.45}
        envMapIntensity={1.0}
        clearcoat={0.1}
        clearcoatRoughness={0.3}
      />
    </RoundedBox>
  );
}

export function DarkCube({ isHovered, isClicked }: Props) {
  return (
    <Scene3D
      className="w-[180px] h-[220px] sm:w-[220px] sm:h-[270px] lg:w-[260px] lg:h-[310px]"
      cameraPosition={[0, 1.5, 5.5]}
      cameraFov={30}
      shadowY={-1.5}
      floatSpeed={1}
      floatIntensity={0.08}
      isHovered={isHovered}
    >
      <Monolith />
    </Scene3D>
  );
}

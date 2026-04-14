"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Scene3D } from "./Scene3D";

interface Props { isHovered: boolean; isClicked: boolean; }

function Plate({ position, color, metalness, roughness, clearcoat, clearcoatRoughness, envMapIntensity, opacity }: {
  position: [number, number, number]; color: string; metalness: number; roughness: number;
  clearcoat: number; clearcoatRoughness: number; envMapIntensity: number; opacity: number;
}) {
  return (
    <RoundedBox args={[2, 0.06, 2]} radius={0.02} smoothness={4}
      position={position} rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
      <meshPhysicalMaterial
        color={color} metalness={metalness} roughness={roughness}
        clearcoat={clearcoat} clearcoatRoughness={clearcoatRoughness}
        envMapIntensity={envMapIntensity} transparent opacity={opacity}
        side={THREE.DoubleSide}
      />
    </RoundedBox>
  );
}

function Plates({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const spread = isHovered ? 0.45 : 0.3;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.02;
  });

  return (
    // rotateX increased from -0.45 to -0.55 for more top-down view
    <group ref={groupRef} rotation={[-0.55, 0, 0]}>
      <Plate position={[0, -spread, 0]}
        color="#5a88c8" metalness={0.7} roughness={0.3}
        clearcoat={0.4} clearcoatRoughness={0.15} envMapIntensity={1.4} opacity={0.55} />
      <Plate position={[0, 0, 0]}
        color="#7aaae0" metalness={0.8} roughness={0.22}
        clearcoat={0.5} clearcoatRoughness={0.1} envMapIntensity={1.6} opacity={0.72} />
      <Plate position={[0, spread, 0]}
        color="#c0daf8" metalness={0.9} roughness={0.08}
        clearcoat={0.9} clearcoatRoughness={0.03} envMapIntensity={2.2} opacity={0.92} />
    </group>
  );
}

export function CoatingLayers({ isHovered, isClicked }: Props) {
  return (
    <Scene3D
      className="w-[200px] h-[170px] sm:w-[260px] sm:h-[210px] lg:w-[300px] lg:h-[250px]"
      cameraPosition={[0, 2.8, 5]}
      cameraFov={26}
      shadowY={-0.8}
      isHovered={isHovered}
    >
      <Plates isHovered={isHovered} />
    </Scene3D>
  );
}

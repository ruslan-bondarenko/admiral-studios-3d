"use client";

import * as THREE from "three";
import { useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerformanceMonitor,
  Environment,
  Lightformer,
  Float,
  ScrollControls,
  useScroll,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";
import { LayerMaterial, Color, Depth } from "lamina";
import { Kona } from "../Kona";
import { Overlay } from "../Overlay";
import gsap from "gsap";

function AnimatedKona() {
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(ref.current.position, { duration: 0.5, x: 0, y: 0, z: 0 }, 0);

    tl.current.to(
      ref.current.position,
      { duration: 0.5, x: -1, y: 0.5, z: 1 },
      0.5
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 0.5, x: -0.1, y: 0, z: -0.05 },
      0.5
    );

    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI - 0.5, z: -0.1 },
      1
    );

    tl.current.to(ref.current.position, { duration: 2, x: -2, y: 0, z: -1 }, 2);
    tl.current.to(
      ref.current.rotation,
      { duration: 2, x: 0, y: Math.PI + 1, z: 0 },
      2
    );
  }, []);

  return (
    <group ref={ref}>
      <Kona
        scale={0.01}
        position={[0, -1.2, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 5]}
        castShadow
      />
    </group>
  );
}

const ThreeModel = () => {
  const [degraded, setDegraded] = useState(false);

  return (
    <Canvas shadows camera={{ position: [100, 0, 15], fov: 16 }}>
      <GizmoHelper>
        <GizmoViewport />
      </GizmoHelper>

      <spotLight
        position={[0, 10, 0]}
        angle={0.8}
        penumbra={0.5}
        castShadow
        intensity={100}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={0.5} />

      <ScrollControls pages={3} damping={0.25}>
        <AnimatedKona />
        <Overlay />
      </ScrollControls>

      <PerformanceMonitor onDecline={() => setDegraded(true)} />
      <CameraRig />

      <Environment
        frames={degraded ? 1 : Infinity}
        resolution={256}
        background
        blur={1}
      >
        <Lightformers />
      </Environment>

      <mesh
        position={[0, -1.2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[250, 250]} />
        <meshStandardMaterial color={0xdcdcdc} />
      </mesh>
    </Canvas>
  );
};

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2),
      0.05
    );
    state.camera.lookAt(-2, 0, -2);
  });
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef();
  useFrame(
    (state, delta) =>
      (group.current.position.z += delta * 10) > 20 &&
      (group.current.position.z = -60)
  );
  return (
    <>
      {/* Ceiling */}
      <Lightformer
        intensity={0.75}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />
      {/* Accent color */}
      <Float speed={5} floatIntensity={5} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="#006cd5"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
          target={[0, 0, 0]}
        />
      </Float>

      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth
            colorA="#002c5f"
            colorB="black"
            alpha={0.4}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </>
  );
}

export default ThreeModel;

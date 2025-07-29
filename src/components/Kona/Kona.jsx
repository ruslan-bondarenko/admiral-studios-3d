"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const Kona = (props) => {
  const { nodes, materials } = useGLTF("/models/kona.glb");
  return (
    <group {...props}>
      <axesHelper args={[100, 100]} />

      <mesh
        castShadow
        geometry={nodes.Material2.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_ChromeBadges"]}
      />
      <lineSegments
        geometry={nodes.Material3.geometry}
        material={materials.edge_color000255}
      />
      <lineSegments
        geometry={nodes.Material3_1.geometry}
        material={materials.edge_color000255}
      />
      <lineSegments
        geometry={nodes.Material2_1.geometry}
        material={materials.edge_color000255}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_2.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Tailights_Glass"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_3.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Interior"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_4.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Windows"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_5.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_BlackTrims"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_6.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Rims1"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_7.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Doors"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_8.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_CeramicBlue"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_9.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Mirrors"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_10.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Seats"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_11.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Rims2"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_12.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Misc1"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_13.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_lambert2"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material3_2.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Interior_0"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material3_3.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Interior_1"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material3_4.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Interior_2"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_14.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Tires"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_15.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Brakes"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_16.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_FrontSkid"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_17.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_BlackTrims1"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_18.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_HeadLightsGlass"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_19.geometry}
        material={materials["2019_Hyundai_Encino_Kona_EV_Chrome2"]}
      />
      <mesh
        castShadow
        geometry={nodes.Material2_20.geometry}
        material={materials.material}
      />
    </group>
  );
};

useGLTF.preload("/models/kona.glb");
export default Kona;

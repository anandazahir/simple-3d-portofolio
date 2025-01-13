import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useEffect } from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF("./models/WawaOffice.glb");
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();
  const { size } = useThree(); // Get viewport size

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  // Adjust scale and position based on screen size
  useEffect(() => {
    if (size.width < 768) {
      // Mobile devices
      ref.current.scale.set(0.6, 0.6, 0.6); // Smaller scale for mobile
      ref.current.position.set(0, -0.5, -1); // Reposition for better visibility
    } else {
      // Desktop devices
      ref.current.scale.set(1, 1, 1); // Default scale
      ref.current.position.set(0.5, -1, -1); // Default position
    }
  }, [size.width]);

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // Office Rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    );

    // Office movement
    if (size.width < 768) {
      // Mobile-specific movement
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          x: -0.5, // Smaller movement on mobile
          z: 1.5,
        },
        0
      );
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          x: 0.5, // Smaller movement on mobile
          z: 1.5,
        },
        1
      );
    } else {
      // Desktop movement
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          x: -1,
          z: 2,
        },
        0
      );
      tl.current.to(
        ref.current.position,
        {
          duration: 1,
          x: 1,
          z: 2,
        },
        1
      );
    }

    // LIBRARY FLOOR
    tl.current.from(
      libraryRef.current.position,
      {
        duration: 0.5,
        x: size.width < 768 ? -1 : -2, // Smaller movement on mobile
      },
      0.5
    );
    tl.current.from(
      libraryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // ATTIC
    tl.current.from(
      atticRef.current.position,
      {
        duration: 1.5,
        y: size.width < 768 ? 1.5 : 2, // Smaller movement on mobile
      },
      0
    );

    tl.current.from(
      atticRef.current.rotation,
      {
        duration: 0.5,
        y: Math.PI / 2,
      },
      1
    );

    tl.current.from(
      atticRef.current.position,
      {
        duration: 0.5,
        z: size.width < 768 ? -1.5 : -2, // Smaller movement on mobile
      },
      1.5
    );
  }, [size.width]);

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[0.5, -1, -1]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <mesh geometry={nodes["01_office"].geometry} material={materials["01"]} />
      <group position={[0, 2.11, -2.23]}>
        <group ref={libraryRef}>
          <mesh
            geometry={nodes["02_library"].geometry}
            material={materials["02"]}
          />
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={atticRef}>
          <mesh
            geometry={nodes["03_attic"].geometry}
            material={materials["03"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/WawaOffice.glb");

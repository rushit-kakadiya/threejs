import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { ACESFilmicToneMapping } from 'three';

const R3f = () => {
  return (
    <Canvas
      gl={{ toneMapping: ACESFilmicToneMapping }}
      style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
    >
      {/*
      <PerspectiveCamera makeDefault position={[0, 0, 5]}>
         <TargetStand /> 
      </PerspectiveCamera>
      */}

      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
  );
};

const Model = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime();
  });
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color='lightblue' />
    </mesh>
  );
};

export default R3f;

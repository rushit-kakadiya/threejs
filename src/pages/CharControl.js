import React from 'react';
import { Canvas } from '@react-three/fiber';
import { usePersonControls } from '../utils/usePersonControls';

const CharControl = () => {
  const { forward, backward, left, right, jump } = usePersonControls();

  return (
    <Canvas style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }} shadows>
      <ambientLight />
      <mesh>
        <sphereGeometry />
        <meshBasicMaterial color={'red'} />
      </mesh>
    </Canvas>
  );
};

export default CharControl;

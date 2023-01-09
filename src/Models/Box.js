import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Box = (props) => {
  const boxRef = useRef();
  useFrame(({ clock }) => {
    // boxRef.current.rotation.x = clock.getElapsedTime();
    // boxRef.current.rotation.y = Math.sin(clock.getElapsedTime());
    boxRef.current.rotation.z = Math.cos(clock.getElapsedTime());
  });
  return (
    <mesh ref={boxRef}>
      <boxGeometry attach={'geometry'} args={[2, 2, 2]} />
      <meshBasicMaterial color={props?.color} />
    </mesh>
  );
};

export default Box;

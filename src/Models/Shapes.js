import React from 'react';
import { useFrame } from '@react-three/fiber';
import { shapeNames } from '../utils';

export default function Shapes(props) {
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
    myMesh.current.rotation.y = clock.getElapsedTime();
    myMesh.current.rotation.z = clock.getElapsedTime();
  });
  return <mesh ref={myMesh}>{shapeNames.find(({ name }) => name === props?.name)['component']}</mesh>;
}

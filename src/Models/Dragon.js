import { useDepthBuffer, useGLTF } from '@react-three/drei';
import MovingSpot from '../componet/MovingSpot';

export default function Dragon() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const { nodes, materials } = useGLTF('/model.gltf');
  return (
    <>
      <MovingSpot depthBuffer={depthBuffer} color='#0c8cbf' position={[-5, 2.5, 0]} />
      <MovingSpot depthBuffer={depthBuffer} color='#b00c3f' position={[-3, 2.5, 0]} />
      <MovingSpot depthBuffer={depthBuffer} color='green' position={[-1, 2.5, 0]} />

      <mesh
        position={[0, -0.8, 0]}
        castShadow
        receiveShadow
        geometry={nodes.dragon.geometry}
        material={materials['Default OBJ.001']}
        dispose={null}
      />
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
    </>
  );
}

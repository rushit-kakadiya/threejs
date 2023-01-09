import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ShakeScreen = () =>
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 1 + state.mouse.x / 4, 0.075);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5 + state.mouse.y / 4, 0.075);
  });

export default ShakeScreen;

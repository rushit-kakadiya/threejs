import { Clone, useGLTF } from '@react-three/drei';

export default function TargetStand(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );
  return <Clone object={scene} castShadow receiveShadow {...props} />;
}

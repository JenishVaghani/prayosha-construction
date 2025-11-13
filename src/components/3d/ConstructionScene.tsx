import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Cone } from '@react-three/drei';
import * as THREE from 'three';

export function ConstructionScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  }); 

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      <Box position={[0, -1, 0]} args={[8, 0.5, 8]}>
        <meshStandardMaterial color="#444444" />
      </Box>

      <Box position={[-2, 0.5, -2]} args={[1.5, 2, 1.5]}>
        <meshStandardMaterial color="#666666" />
      </Box>

      <Box position={[2, 1, -2]} args={[1.5, 3, 1.5]}>
        <meshStandardMaterial color="#555555" />
      </Box>

      <Box position={[-2, 1.5, 2]} args={[1.5, 4, 1.5]}>
        <meshStandardMaterial color="#777777" />
      </Box>

      <group position={[3, 1.5, 2]} rotation={[0, 0, 0]}>
        <Box position={[0, -0.5, 0]} args={[0.3, 3, 0.3]}>
          <meshStandardMaterial color="#FFC857" />
        </Box>
        <Box position={[0, 1.2, 0]} args={[2, 0.2, 0.2]} rotation={[0, 0, Math.PI / 4]}>
          <meshStandardMaterial color="#FFC857" />
        </Box>
        <Box position={[0.8, 0.5, 0]} args={[0.15, 1.5, 0.15]}>
          <meshStandardMaterial color="#F1733A" />
        </Box>
      </group>

      <Cylinder position={[-3, 0.75, 0]} args={[0.4, 0.4, 1.5, 32]}>
        <meshStandardMaterial color="#F1733A" />
      </Cylinder>

      <Cone position={[-3, 1.8, 0]} args={[0.5, 0.6, 4]}>
        <meshStandardMaterial color="#FFC857" />
      </Cone>

      <Box position={[0, 0.3, 3]} args={[1.2, 0.6, 0.8]}>
        <meshStandardMaterial color="#888888" />
      </Box>
      <Cylinder position={[0.5, 0.15, 3]} args={[0.15, 0.15, 0.3, 16]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#333333" />
      </Cylinder>
      <Cylinder position={[-0.5, 0.15, 3]} args={[0.15, 0.15, 0.3, 16]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#333333" />
      </Cylinder>
    </group>
  );
}

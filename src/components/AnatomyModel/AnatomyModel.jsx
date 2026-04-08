import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { BODY_SYSTEMS } from '../../data/anatomyData';

/* ---------- Single body-part mesh ---------- */
function BodyPart({ part, systemColor, isSelected, isHovered, onHover, onUnhover, onClick }) {
  const meshRef = useRef();
  const glowRef = useRef();

  // Animate hover/selection glow
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material;
    const targetEmissive = isSelected ? 0.6 : isHovered ? 0.35 : 0;
    mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetEmissive, delta * 8);

    // Pulse selected parts — preserve original proportions
    if (isSelected && meshRef.current) {
      const pulse = Math.sin(Date.now() * 0.003) * 0.02 + 1;
      meshRef.current.scale.set(
        part.scale[0] * pulse,
        part.scale[1] * pulse,
        part.scale[2] * pulse
      );
    } else if (meshRef.current) {
      // Smoothly reset scale back to original
      meshRef.current.scale.set(
        THREE.MathUtils.lerp(meshRef.current.scale.x, part.scale[0], delta * 6),
        THREE.MathUtils.lerp(meshRef.current.scale.y, part.scale[1], delta * 6),
        THREE.MathUtils.lerp(meshRef.current.scale.z, part.scale[2], delta * 6)
      );
    }
  });

  const geometry = useMemo(() => {
    switch (part.shape) {
      case 'sphere':
        return new THREE.SphereGeometry(1, 32, 32);
      case 'cylinder':
        return new THREE.CylinderGeometry(1, 1, 1, 16);
      case 'box':
        return new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
      case 'ellipsoid':
      default:
        return new THREE.SphereGeometry(1, 32, 32);
    }
  }, [part.shape]);

  const color = new THREE.Color(systemColor);

  return (
    <group position={part.position}>
      {/* Main mesh */}
      <mesh
        ref={meshRef}
        geometry={geometry}
        scale={part.scale}
        onClick={(e) => {
          e.stopPropagation();
          onClick(part.id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(part.id);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          onUnhover();
          document.body.style.cursor = 'auto';
        }}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={isSelected ? 0.95 : 0.7}
          roughness={0.3}
          metalness={0.1}
          emissive={color}
          emissiveIntensity={0}
        />
      </mesh>

      {/* Wireframe overlay for Skeletal system feel */}
      <mesh geometry={geometry} scale={part.scale.map((s) => s * 1.02)}>
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={isSelected ? 0.3 : isHovered ? 0.2 : 0.08}
        />
      </mesh>
    </group>
  );
}

/* ---------- Custom uploaded GLTF model ---------- */
function UploadedModel({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  // Auto-scale and center the model
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.5 / maxDim;
    scene.scale.setScalar(scale);

    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center.multiplyScalar(scale));
  }, [scene]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

/* ---------- Main AnatomyModel ---------- */
export default function AnatomyModel({
  visibleSystems,
  selectedPart,
  onSelectPart,
  uploadedModelUrl,
}) {
  const [hoveredPart, setHoveredPart] = useState(null);

  // If a custom model is uploaded, render it instead
  if (uploadedModelUrl) {
    return <UploadedModel url={uploadedModelUrl} />;
  }

  return (
    <group position={[0, -0.6, 0]}>
      {Object.values(BODY_SYSTEMS).map((system) => {
        const isVisible = visibleSystems[system.id] !== false;
        if (!isVisible) return null;

        return (
          <group key={system.id}>
            {system.parts.map((part) => (
              <BodyPart
                key={part.id}
                part={part}
                systemColor={system.color}
                isSelected={selectedPart === part.id}
                isHovered={hoveredPart === part.id}
                onHover={setHoveredPart}
                onUnhover={() => setHoveredPart(null)}
                onClick={onSelectPart}
              />
            ))}
          </group>
        );
      })}
    </group>
  );
}

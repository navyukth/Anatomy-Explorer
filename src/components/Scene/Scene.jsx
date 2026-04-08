import { Suspense, useRef, useEffect, useCallback } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Grid, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import AnatomyModel from '../AnatomyModel/AnatomyModel';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './Scene.css';

/* ---------- Camera Controller ---------- */
function CameraController({ controlsRef, targetPosition, zoomDelta, resetFlag }) {
  const { camera } = useThree();

  useEffect(() => {
    if (!targetPosition || !controlsRef.current) return;
    const controls = controlsRef.current;

    gsap.to(camera.position, {
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
      duration: 1.2,
      ease: 'power2.inOut',
      onUpdate: () => controls.update(),
    });

    gsap.to(controls.target, {
      x: 0,
      y: 0.8,
      z: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    });
  }, [targetPosition, camera, controlsRef]);

  useEffect(() => {
    if (zoomDelta === 0) return;
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    gsap.to(camera.position, {
      x: camera.position.x + dir.x * zoomDelta,
      y: camera.position.y + dir.y * zoomDelta,
      z: camera.position.z + dir.z * zoomDelta,
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [zoomDelta, camera]);

  useEffect(() => {
    if (!resetFlag || !controlsRef.current) return;
    const controls = controlsRef.current;
    gsap.to(camera.position, {
      x: 0, y: 1, z: 4,
      duration: 1,
      ease: 'power2.inOut',
      onUpdate: () => controls.update(),
    });
    gsap.to(controls.target, {
      x: 0, y: 0.8, z: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, [resetFlag, camera, controlsRef]);

  return null;
}

/* ---------- Environment Lights ---------- */
function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.8}
        color="#c8d6e5"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-3, 4, -3]} intensity={0.3} color="#8b5cf6" />
      <pointLight position={[0, 3, 2]} intensity={0.4} color="#00f0ff" distance={10} />
      <pointLight position={[0, -1, -2]} intensity={0.2} color="#f43f5e" distance={8} />
    </>
  );
}

/* ---------- Ground Grid ---------- */
function Ground() {
  return (
    <>
      <Grid
        position={[0, -1.1, 0]}
        args={[20, 20]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#1a1f35"
        sectionSize={2}
        sectionThickness={1}
        sectionColor="#252b45"
        fadeDistance={12}
        fadeStrength={1}
        infiniteGrid
      />
      <ContactShadows
        position={[0, -1.09, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4}
        color="#000"
      />
    </>
  );
}

/* ---------- Main Scene ---------- */
export default function Scene({
  visibleSystems,
  selectedPart,
  onSelectPart,
  uploadedModelUrl,
  cameraTarget,
  zoomDelta,
  resetCamera,
  isInfoOpen,
}) {
  const controlsRef = useRef();

  const handleBackgroundClick = useCallback(() => {
    onSelectPart(null);
  }, [onSelectPart]);

  return (
    <div className={`scene-container ${isInfoOpen ? 'info-open' : ''}`} id="scene-container">
      <div className="scene-bg-gradient" />
      <Canvas
        camera={{ position: [0, 1, 4], fov: 45, near: 0.1, far: 100 }}
        shadows
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        onPointerMissed={handleBackgroundClick}
      >
        <Suspense fallback={null}>
          <Lights />
          <Environment preset="city" background={false} />
          <Ground />
          <AnatomyModel
            visibleSystems={visibleSystems}
            selectedPart={selectedPart}
            onSelectPart={onSelectPart}
            uploadedModelUrl={uploadedModelUrl}
          />
          <OrbitControls
            ref={controlsRef}
            makeDefault
            enableDamping
            dampingFactor={0.08}
            minDistance={1.5}
            maxDistance={12}
            maxPolarAngle={Math.PI * 0.85}
            target={[0, 0.8, 0]}
          />
          <CameraController
            controlsRef={controlsRef}
            targetPosition={cameraTarget}
            zoomDelta={zoomDelta}
            resetFlag={resetCamera}
          />
        </Suspense>
      </Canvas>
      <div className="scene-vignette" />
    </div>
  );
}

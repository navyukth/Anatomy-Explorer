import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Scene from './components/Scene/Scene';
import InfoPanel from './components/InfoPanel/InfoPanel';
import ModelUploader from './components/ModelUploader/ModelUploader';
import ViewControls from './components/ViewControls/ViewControls';
import { getPartById } from './data/anatomyData';
import './App.css';

function App() {
  // --- State ---
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [uploaderOpen, setUploaderOpen] = useState(false);

  const [visibleSystems, setVisibleSystems] = useState({
    skeletal: true,
    muscular: true,
    cardiovascular: true,
    nervous: true,
    respiratory: true,
    digestive: true,
  });

  const [selectedPart, setSelectedPart] = useState(null);
  const [uploadedModelUrl, setUploadedModelUrl] = useState(null);
  const [uploadedModelName, setUploadedModelName] = useState(null);

  // Camera control states
  const [cameraTarget, setCameraTarget] = useState(null);
  const [zoomDelta, setZoomDelta] = useState(0);
  const [resetCamera, setResetCamera] = useState(0);

  // --- Effects ---
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // --- Handlers ---
  const handleToggleSystem = useCallback((systemId) => {
    setVisibleSystems((prev) => ({
      ...prev,
      [systemId]: !prev[systemId],
    }));
  }, []);

  const handleSelectPart = useCallback((partId) => {
    setSelectedPart(partId);
    if (partId) {
      const partData = getPartById(partId);
      if (partData) {
        // Animate camera to focus on the selected part
        const pos = partData.position;
        setCameraTarget([pos[0] * 0.5 + 2, pos[1] + 0.3, pos[2] + 3.5]);
      }
    }
  }, []);

  const handleViewChange = useCallback((position) => {
    setCameraTarget([...position]);
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoomDelta((prev) => prev + 0.8);
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomDelta((prev) => prev - 0.8);
  }, []);

  const handleResetCamera = useCallback(() => {
    setResetCamera((prev) => prev + 1);
    setZoomDelta(0);
    setCameraTarget(null);
  }, []);

  const handleModelLoad = useCallback((url, name) => {
    setUploadedModelUrl(url);
    setUploadedModelName(name);
  }, []);

  const handleModelReset = useCallback(() => {
    if (uploadedModelUrl) {
      URL.revokeObjectURL(uploadedModelUrl);
    }
    setUploadedModelUrl(null);
    setUploadedModelName(null);
  }, [uploadedModelUrl]);

  return (
    <div className="app" id="app">
      {/* Splash loading screen */}
      <div className={`app-loading ${!isLoading ? 'hidden' : ''}`}>
        <div className="splash">
          <div className="splash-logo">🧬</div>
          <h1 className="splash-title">ANATOMIX</h1>
          <p className="splash-subtitle">3D Human Anatomy Explorer</p>
          <div className="splash-loader">
            <div className="splash-loader-bar" />
          </div>
        </div>
      </div>

      {/* Main App */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onUploadClick={() => setUploaderOpen(true)}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />

      <Sidebar
        visibleSystems={visibleSystems}
        onToggleSystem={handleToggleSystem}
        selectedPart={selectedPart}
        onSelectPart={handleSelectPart}
        searchQuery={searchQuery}
        isOpen={sidebarOpen}
      />

      <Scene
        visibleSystems={visibleSystems}
        selectedPart={selectedPart}
        onSelectPart={handleSelectPart}
        uploadedModelUrl={uploadedModelUrl}
        cameraTarget={cameraTarget}
        zoomDelta={zoomDelta}
        resetCamera={resetCamera}
        isInfoOpen={!!selectedPart}
      />

      <InfoPanel
        selectedPart={selectedPart}
        onClose={() => setSelectedPart(null)}
      />

      <ViewControls
        onViewChange={handleViewChange}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleResetCamera}
      />

      <ModelUploader
        isOpen={uploaderOpen}
        onClose={() => setUploaderOpen(false)}
        onModelLoad={handleModelLoad}
        onReset={handleModelReset}
      />
    </div>
  );
}

export default App;

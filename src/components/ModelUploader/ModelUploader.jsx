import { useState, useRef } from 'react';
import './ModelUploader.css';

export default function ModelUploader({ isOpen, onClose, onModelLoad, onReset }) {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);

  if (!isOpen) return null;

  const handleFile = (file) => {
    if (!file) return;
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['glb', 'gltf'].includes(ext)) {
      alert('Please upload a .glb or .gltf file');
      return;
    }
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleLoad = () => {
    if (!selectedFile) return;
    const url = URL.createObjectURL(selectedFile);
    onModelLoad(url, selectedFile.name);
    setSelectedFile(null);
    onClose();
  };

  const handleReset = () => {
    setSelectedFile(null);
    onReset();
    onClose();
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="uploader-overlay" onClick={onClose}>
      <div className="uploader-modal" onClick={(e) => e.stopPropagation()}>
        <div className="uploader-header">
          <span className="uploader-title">Upload 3D Model</span>
          <button className="uploader-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="uploader-body">
          <div
            className={`uploader-dropzone ${dragOver ? 'dragover' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => inputRef.current?.click()}
          >
            <div className="uploader-icon">📦</div>
            <div className="uploader-text">
              Drag & drop your model here, or <strong>browse</strong>
            </div>
            <div className="uploader-formats">Supported: .glb, .gltf</div>
          </div>
          <input
            ref={inputRef}
            className="hidden-file-input"
            type="file"
            accept=".glb,.gltf"
            onChange={(e) => handleFile(e.target.files[0])}
          />
          {selectedFile && (
            <div className="uploader-file-info">
              <span className="uploader-file-icon">🧊</span>
              <div className="uploader-file-details">
                <div className="uploader-file-name">{selectedFile.name}</div>
                <div className="uploader-file-size">
                  {formatSize(selectedFile.size)}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="uploader-footer">
          <button className="btn" onClick={handleReset}>
            Reset to Default
          </button>
          <button
            className="btn btn-accent"
            onClick={handleLoad}
            disabled={!selectedFile}
            style={{ opacity: selectedFile ? 1 : 0.5 }}
          >
            Load Model
          </button>
        </div>
      </div>
    </div>
  );
}

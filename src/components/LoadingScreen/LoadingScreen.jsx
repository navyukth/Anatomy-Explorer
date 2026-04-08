import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-dna">
        <div className="dna-strand">
          {/* 12 dots (6 pairs) */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`dot-${i}`} className="dna-dot" />
          ))}
          {/* 6 connectors */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`conn-${i}`} className="dna-connector" />
          ))}
        </div>
      </div>
      <p className="loading-text loading-shimmer">Loading Anatomy...</p>
    </div>
  );
}

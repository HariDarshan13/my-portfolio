import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      setTrail(prev => [
        ...prev,
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ].slice(-10)); // Keep only last 10 points
    };

    document.addEventListener('mousemove', updateCursor);
    
    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  useEffect(() => {
    // Clean up old trail points
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(-5));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      
      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
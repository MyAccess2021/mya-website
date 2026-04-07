import React, { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    // This function runs every time the mouse moves
    const handleMouseMove = (e) => {
      if (dotRef.current) {
        // Move the dot to the mouse location
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup when you leave the page
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        width: '14px',           // Size of the dot
        height: '14px',          // Size of the dot
        backgroundColor: '#f4531c', // Your Orange Color
        borderRadius: '50%',     // Makes it a circle
        position: 'fixed',       // Stays on top of screen
        top: 0,
        left: 0,
        pointerEvents: 'none',   // So you can still click buttons behind it
        zIndex: 9999,            // Stays above everything
        transform: 'translate(-50%, -50%)', // Centers it on the cursor
        
        /* This creates the "Trailing" effect you want */
        transition: 'top 0.15s ease-out, left 0.15s ease-out', 
      }}
    />
  );
};

export default MouseFollower;
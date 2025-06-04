
import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }
    
    const intensities: number[] = [];
    for (let i = 0; i < columns; i++) {
      intensities[i] = 0.03 + Math.random() * 0.04;
    }
    
    const draw = () => {
      // Create a semi-transparent black rectangle to fade previous frame
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set font and color
      ctx.font = `${fontSize}px monospace`;
      
      // Update each character
      for (let i = 0; i < drops.length; i++) {
        // Randomly choose a character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Calculate brightness based on position (brighter at the leading edge)
        const y = drops[i] * fontSize;
        
        if (y > 0) {
          // Draw the character
          // Create gradient effect - brighter at the head, fading to darker
          const brightness = drops[i] < 1 ? 1 : (1 - Math.min(drops[i] / 50, 0.8));
          const greenValue = Math.floor(brightness * 255);
          ctx.fillStyle = `rgba(0, ${greenValue}, 0, ${brightness * 0.9})`;
          ctx.fillText(text, i * fontSize, y);
          
          // Smaller secondary character for more texture (only for some columns)
          if (i % 3 === 0 && drops[i] > 2) {
            ctx.font = `${fontSize * 0.7}px monospace`;
            ctx.fillStyle = `rgba(0, ${Math.floor(greenValue * 0.8)}, 0, ${brightness * 0.7})`;
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], 
                         i * fontSize + fontSize * 0.4, 
                         y - fontSize * 0.5);
            ctx.font = `${fontSize}px monospace`;
          }
        }
        
        // Increment the y position
        drops[i] += intensities[i];
        
        // Reset when reaching bottom or randomly for some variety
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = -Math.floor(Math.random() * 20);
          intensities[i] = 0.03 + Math.random() * 0.04;
        }
      }
    };
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const newColumns = Math.floor(canvas.width / fontSize);
      
      // Adjust drops array to match new column count
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.floor(Math.random() * -100);
          intensities[i] = 0.03 + Math.random() * 0.04;
        }
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    
    const interval = setInterval(draw, 50);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full bg-black opacity-90 -z-10"
      aria-hidden="true"
    />
  );
};

export default MatrixBackground;

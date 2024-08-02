// src/components/Dog.js
import React, { useEffect, useRef } from 'react';
import './Dog.css';

const Dog = () => {
  const dogRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const dog = dogRef.current;
      const { clientX, clientY } = event;
      const { left, top, width, height } = dog.getBoundingClientRect();
      const dogX = left + width / 2;
      const dogY = top + height / 2;
      const distance = Math.sqrt((clientX - dogX) ** 2 + (clientY - dogY) ** 2);

      if (distance < 20) {
        const angle = Math.atan2(clientY - dogY, clientX - dogX);
        dog.style.transform = `translate(${Math.cos(angle) * 10}px, ${Math.sin(angle) * 10}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={dogRef} className="dog"></div>;
};

export default Dog;

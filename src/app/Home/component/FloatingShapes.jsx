"use client"

import React, { useEffect, useRef } from 'react';

const FloatingShapes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;

    const createShape = () => {
      const shape = document.createElement('div');
      shape.classList.add('floating-shape');
      shape.style.backgroundColor = '#fafafa9a';

      const size = getRandomNumber(20, 50);
      const posX = getRandomNumber(0, container.offsetWidth - size);
      const posY = getRandomNumber(0, container.offsetHeight - size);

      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.transform = `translate(${posX}px, ${posY}px)`;

      container.appendChild(shape);

      const animateShape = () => {
        const newY = parseFloat(shape.style.transform.split(',')[1]) + 1;
        shape.style.transform = `translate(${posX}px, ${newY}px`;

        if (newY > container.offsetHeight) {
          container.removeChild(shape);
          cancelAnimationFrame(animationFrameId);
        } else {
          animationFrameId = requestAnimationFrame(animateShape);
        }
      };

      animateShape();
    };

    // const getRandomColor = () => {
    //   const letters = '0123456789ABCDEF';
    //   let color = '#';
    //   for (let i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    //   }
    //   return color;
    // };

    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const intervalId = setInterval(createShape, 1000);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={containerRef} className="floating-shapes-container h-[100%] w-[100%]"></div>;
};

export default FloatingShapes;

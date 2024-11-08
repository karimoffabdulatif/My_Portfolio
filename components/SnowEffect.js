// components/SnowEffect.js
"use client";

import React, { useEffect } from 'react';

const SnowEffect = () => {
  useEffect(() => {
    const createSnowflake = () => {
      for (let i = 0; i < 3; i++) {  // Bir intervalda uchta qor parchasini yaratish
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
        snowflake.style.width = `${Math.random() * 5 + 2}px`;
        snowflake.style.height = snowflake.style.width;
        document.body.appendChild(snowflake);

        setTimeout(() => {
          snowflake.remove();
        }, 8000);
      }
    };

    const snowInterval = setInterval(createSnowflake, 300);

    return () => clearInterval(snowInterval);
  }, []);

  return null;
};

export default SnowEffect;

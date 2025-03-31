import React, { useInsertionEffect } from 'react';

// CSS-in-JS Hook
function useCSS(rule) {
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.textContent = rule;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Cleanup on unmount
    };
  }, [rule]);

  return rule;
}

// Button Component
function Button() {
  const className = useCSS(`
    .btn {
      background-color: blue;
      color: white;
      padding: 10px;
      border-radius: 5px;
      outline: none
      border: none
    }
  `);

  return <button className="btn">Click Me</button>;
}

export default Button;

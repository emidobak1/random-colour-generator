import React from 'react';

const ColorDisplay = ({ color, shouldUseDarkText }) => (
  <div 
    className="w-72 h-72 rounded-xl shadow-lg mb-12 transition-colors duration-300 relative"
    style={{ backgroundColor: color }}
  >
    <span 
      className={`absolute bottom-4 right-4 font-mono text-lg
        ${shouldUseDarkText(color) ? 'text-gray-800' : 'text-white'}`}
    >
      {color}
    </span>
  </div>
);

export default ColorDisplay;
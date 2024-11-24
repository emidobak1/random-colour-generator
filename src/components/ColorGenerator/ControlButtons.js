import React from 'react';
import { Lock, Unlock, Copy, Save } from 'lucide-react';

const ControlButtons = ({ 
  generateRandomColor, 
  copyToClipboard, 
  isLocked, 
  toggleLock, 
  saveColor 
}) => (
  <div className="flex flex-wrap gap-4 justify-center mb-4">
    <button
      onClick={generateRandomColor}
      className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
    >
      Generate New Color
    </button>

    <button
      onClick={copyToClipboard}
      className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md"
    >
      <Copy size={20} />
      Copy Hex
    </button>

    <button
      onClick={toggleLock}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors shadow-md
        ${isLocked 
          ? 'bg-red-500 hover:bg-red-600' 
          : 'bg-gray-500 hover:bg-gray-600'} 
        text-white`}
    >
      {isLocked ? <Lock size={20} /> : <Unlock size={20} />}
      {isLocked ? 'Unlock' : 'Lock'}
    </button>

    <button
      onClick={saveColor}
      className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors shadow-md"
    >
      <Save size={20} />
      Save Color
    </button>
  </div>
);

export default ControlButtons;
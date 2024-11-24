import React, { useState, useEffect, useCallback } from 'react';
import ColorDisplay from './ColorDisplay';
import ControlButtons from './ControlButtons';
import SavedColors from './SavedColors';
import { shouldUseDarkText } from './utils';

const ColorGenerator = () => {
  const [currentColor, setCurrentColor] = useState('#ffffff');
  const [isLocked, setIsLocked] = useState(false);
  const [savedColors, setSavedColors] = useState([]);
  const [copyMessage, setCopyMessage] = useState('');

  const generateRandomColor = useCallback(() => {
    if (!isLocked) {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
      setCurrentColor(randomColor);
    }
  }, [isLocked]);

  useEffect(() => {
    generateRandomColor();
  }, [generateRandomColor]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentColor);
      setCopyMessage('Copied!');
      setTimeout(() => setCopyMessage(''), 2000);
    } catch (err) {
      setCopyMessage('Failed to copy');
      setTimeout(() => setCopyMessage(''), 2000);
    }
  };

  const toggleLock = () => setIsLocked(!isLocked);

  const saveColor = () => {
    if (!savedColors.includes(currentColor)) {
      setSavedColors([...savedColors, currentColor]);
    }
  };

  const removeSavedColor = (colorToRemove) => {
    setSavedColors(savedColors.filter(color => color !== colorToRemove));
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-6xl font-bold mb-12 text-gray-800">Generate Your 
            <span className="text-transparent font-serif italic bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"> Colour</span> Pallette
          </h1>
          
          <ColorDisplay 
            color={currentColor} 
            shouldUseDarkText={shouldUseDarkText} 
          />

          <ControlButtons 
            generateRandomColor={generateRandomColor}
            copyToClipboard={copyToClipboard}
            isLocked={isLocked}
            toggleLock={toggleLock}
            saveColor={saveColor}
          />

          {copyMessage && (
            <div className="mt-2 text-sm font-medium text-gray-600">
              {copyMessage}
            </div>
          )}
        </div>

        <SavedColors 
          savedColors={savedColors} 
          removeSavedColor={removeSavedColor} 
        />
      </div>
    </div>
  );
};

export default ColorGenerator;
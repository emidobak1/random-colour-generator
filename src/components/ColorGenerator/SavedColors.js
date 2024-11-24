import React from 'react';
import { Trash2 } from 'lucide-react';

const SavedColors = ({ savedColors, removeSavedColor }) => {
  if (savedColors.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Saved Colors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {savedColors.map((color, index) => (
          <div key={index} className="relative group">
            <div
              className="h-32 rounded-lg shadow-md transition-transform group-hover:scale-105"
              style={{ backgroundColor: color }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => removeSavedColor(color)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  title="Remove color"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            <p className="text-center mt-2 font-mono text-sm text-gray-600">{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedColors;
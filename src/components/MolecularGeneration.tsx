import React, { useState } from 'react';
import { BeakerIcon } from 'lucide-react';
import type { GenerationParameters } from '../types/molecule';
import { generateMolecules } from '../services/api';

const MolecularGeneration: React.FC = () => {
  const [parameters, setParameters] = useState<GenerationParameters>({
    targetProtein: '',
    molecularWeightRange: {
      min: 200,
      max: 800
    },
    logPRange: {
      min: -2,
      max: 5
    },
    syntheticAccessibilityThreshold: 0.7
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const molecules = await generateMolecules(parameters);
      console.log('Generated molecules:', molecules);
      // Handle the generated molecules (e.g., display them, store in state, etc.)
    } catch (error) {
      console.error('Error generating molecules:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <BeakerIcon className="h-8 w-8 text-indigo-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Molecular Generation
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target Protein
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={parameters.targetProtein}
              onChange={(e) => setParameters({ ...parameters, targetProtein: e.target.value })}
            >
              <option value="">Select a target protein</option>
              <option value="er-alpha">Estrogen Receptor Alpha</option>
              <option value="tau">Tau Protein</option>
              <option value="bcl6">BCL6</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Molecular Weight Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Min"
                  value={parameters.molecularWeightRange.min}
                  onChange={(e) => setParameters({
                    ...parameters,
                    molecularWeightRange: {
                      ...parameters.molecularWeightRange,
                      min: Number(e.target.value)
                    }
                  })}
                />
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Max"
                  value={parameters.molecularWeightRange.max}
                  onChange={(e) => setParameters({
                    ...parameters,
                    molecularWeightRange: {
                      ...parameters.molecularWeightRange,
                      max: Number(e.target.value)
                    }
                  })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                LogP Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Min"
                  value={parameters.logPRange.min}
                  onChange={(e) => setParameters({
                    ...parameters,
                    logPRange: {
                      ...parameters.logPRange,
                      min: Number(e.target.value)
                    }
                  })}
                />
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Max"
                  value={parameters.logPRange.max}
                  onChange={(e) => setParameters({
                    ...parameters,
                    logPRange: {
                      ...parameters.logPRange,
                      max: Number(e.target.value)
                    }
                  })}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Synthetic Accessibility Threshold
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              className="mt-1 block w-full"
              value={parameters.syntheticAccessibilityThreshold}
              onChange={(e) => setParameters({
                ...parameters,
                syntheticAccessibilityThreshold: Number(e.target.value)
              })}
            />
            <div className="text-sm text-gray-500 mt-1">
              Value: {parameters.syntheticAccessibilityThreshold}
            </div>
          </div>

          <button
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isGenerating ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Generate Molecules'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MolecularGeneration;
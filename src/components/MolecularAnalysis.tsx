import React, { useState } from 'react';
import { ActivityIcon } from 'lucide-react';
import { analyzeMolecule } from '../services/api';
import type { Molecule } from '../types/molecule';

const MolecularAnalysis: React.FC = () => {
  const [smiles, setSmiles] = useState('');
  const [analysis, setAnalysis] = useState<Partial<Molecule> | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!smiles.trim()) return;

    setIsAnalyzing(true);
    try {
      const result = await analyzeMolecule(smiles);
      setAnalysis(result);
    } catch (error) {
      console.error('Error analyzing molecule:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <ActivityIcon className="h-8 w-8 text-purple-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Molecular Analysis
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              SMILES String
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              rows={3}
              value={smiles}
              onChange={(e) => setSmiles(e.target.value)}
              placeholder="Enter SMILES string..."
            />
          </div>

          <button
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
              isAnalyzing ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            onClick={handleAnalyze}
            disabled={isAnalyzing || !smiles.trim()}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Molecule'}
          </button>

          {analysis && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Analysis Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Molecular Weight</div>
                  <div className="text-lg font-medium text-gray-900">
                    {analysis.molecularWeight?.toFixed(2)}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">LogP</div>
                  <div className="text-lg font-medium text-gray-900">
                    {analysis.logP?.toFixed(2)}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Synthetic Accessibility</div>
                  <div className="text-lg font-medium text-gray-900">
                    {analysis.syntheticAccessibility?.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MolecularAnalysis;
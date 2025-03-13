import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BeakerIcon, ActivityIcon, LineChart, Brain } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          AI-Driven Drug Design & Molecular Analysis
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to our advanced platform for de novo drug design using generative AI models.
          This tool is specifically designed to support the development of PROTAC® targeted
          protein degraders for treating life-threatening diseases.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-indigo-50 p-6 rounded-lg cursor-pointer hover:bg-indigo-100 transition"
            onClick={() => navigate('/generate')}
          >
            <BeakerIcon className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Molecular Generation
            </h3>
            <p className="text-gray-600">
              Generate novel PROTAC molecules using our advanced AI models.
            </p>
          </div>

          <div
            className="bg-purple-50 p-6 rounded-lg cursor-pointer hover:bg-purple-100 transition"
            onClick={() => navigate('/analyze')}
          >
            <ActivityIcon className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Molecular Analysis
            </h3>
            <p className="text-gray-600">
              Analyze properties and synthetic accessibility of generated molecules.
            </p>
          </div>

          <div
            className="bg-blue-50 p-6 rounded-lg cursor-pointer hover:bg-blue-100 transition"
            onClick={() => navigate('/results')}
          >
            <LineChart className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Results & Visualization
            </h3>
            <p className="text-gray-600">
              View and analyze results with interactive visualizations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Brain className="h-8 w-8 text-indigo-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Target Disease Areas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ER+/HER2- Breast Cancer
            </h3>
            <p className="text-gray-600">
              Targeting estrogen receptor degradation in breast cancer cells.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Neurodegenerative Disorders
            </h3>
            <p className="text-gray-600">
              Developing PROTACs for tau protein degradation in Alzheimer's disease.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Non-Hodgkin Lymphoma
            </h3>
            <p className="text-gray-600">
              Targeting key proteins involved in lymphoma progression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
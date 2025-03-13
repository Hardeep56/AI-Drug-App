import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BeakerIcon, ActivityIcon, LineChart, Home } from 'lucide-react';
import MolecularGeneration from './components/MolecularGeneration';
import MolecularAnalysis from './components/MolecularAnalysis';
import Results from './components/Results';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div 
        className="min-h-screen bg-gray-100 relative"
        style={{
          backgroundImage: `
            url('https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80'), 
            url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80'),
            url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80')
          `,
          backgroundPosition: 'right top, left center, right bottom',
          backgroundSize: '500px, 400px, 450px',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'soft-light'
        }}
      >
        {/* Semi-transparent overlay with increased opacity for better readability */}
        <div className="absolute inset-0 bg-gray-100/97 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="relative">
          <nav className="bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link to="/" className="flex-shrink-0 flex items-center">
                    <BeakerIcon className="h-8 w-8 text-indigo-600" />
                    <span className="ml-2 text-xl font-bold text-gray-900">
                      AI Drug Design
                    </span>
                  </Link>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      to="/"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                    >
                      <Home className="h-5 w-5 mr-1" />
                      Dashboard
                    </Link>
                    <Link
                      to="/generate"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      <BeakerIcon className="h-5 w-5 mr-1" />
                      Generate
                    </Link>
                    <Link
                      to="/analyze"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      <ActivityIcon className="h-5 w-5 mr-1" />
                      Analyze
                    </Link>
                    <Link
                      to="/results"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      <LineChart className="h-5 w-5 mr-1" />
                      Results
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <main className="relative max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/generate" element={<MolecularGeneration />} />
              <Route path="/analyze" element={<MolecularAnalysis />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
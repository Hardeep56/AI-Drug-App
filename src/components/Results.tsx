import React from 'react';
import { LineChart as LineChartIcon } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Results: React.FC = () => {
  // Sample data for the chart
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Molecular Weight Distribution',
        data: [300, 350, 400, 380, 420, 450, 380],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'LogP Distribution',
        data: [2.1, 2.4, 2.8, 2.6, 3.0, 3.2, 2.9],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Generated Molecules Analysis'
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <LineChartIcon className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Results & Visualization
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Property Distribution</h3>
            <div className="aspect-w-16 aspect-h-9">
              <Line options={options} data={data} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500">Total Molecules</h4>
              <p className="text-2xl font-bold text-gray-900">42</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500">Average MW</h4>
              <p className="text-2xl font-bold text-gray-900">382.5</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500">Average LogP</h4>
              <p className="text-2xl font-bold text-gray-900">2.7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
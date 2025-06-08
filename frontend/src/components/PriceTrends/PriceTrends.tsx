import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './PriceTrends.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface AreaData {
  labels: string[];
  prices: number[];
}

type Areas = 'Indirapuram' | 'Vaishali' | 'Raj Nagar Extension' | 'Crossings Republik';

type AreaDataMap = {
  [key in Areas]: AreaData;
};

// Dummy data for different areas
const areaData: AreaDataMap = {
  'Indirapuram': {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    prices: [5500, 5800, 6200, 6800, 7200]
  },
  'Vaishali': {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    prices: [5200, 5500, 5900, 6300, 6800]
  },
  'Raj Nagar Extension': {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    prices: [3800, 4200, 4600, 5100, 5500]
  },
  'Crossings Republik': {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    prices: [4000, 4300, 4700, 5200, 5600]
  }
};

const PriceTrends: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<Areas>('Indirapuram');

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Property Price Trends (Price per sq.ft)',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: '₹ per sq.ft'
        }
      }
    }
  };

  const data = {
    labels: areaData[selectedArea].labels,
    datasets: [
      {
        label: selectedArea,
        data: areaData[selectedArea].prices,
        borderColor: '#dc3545',
        backgroundColor: 'rgba(220, 53, 69, 0.5)',
        tension: 0.3
      }
    ]
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(e.target.value as Areas);
  };

  const calculateGrowthRate = (area: Areas): string => {
    const prices = areaData[area].prices;
    const growthRate = (Math.pow(prices[4] / prices[0], 1/5) - 1) * 100;
    return growthRate.toFixed(1);
  };

  return (
    <Card className="price-trends">
      <Card.Header as="h5">Area-wise Price Trends</Card.Header>
      <Card.Body>
        <Form.Group className="mb-4">
          <Form.Label>Select Area</Form.Label>
          <Form.Select
            value={selectedArea}
            onChange={handleAreaChange}
          >
            {(Object.keys(areaData) as Areas[]).map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        
        <div className="chart-container">
          <Line options={options} data={data} />
        </div>

        <div className="trend-summary">
          <h6>Market Insights:</h6>
          <p>
            Property prices in {selectedArea} have shown a steady increase over the past 5 years, 
            with an average annual growth rate of {calculateGrowthRate(selectedArea)}%.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PriceTrends; 
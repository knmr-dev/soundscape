import { useState } from 'react';
import * as XLSX from 'xlsx';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [genderData, setGenderData] = useState({});
  const [ageData, setAgeData] = useState({ labels: [], values: [] });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(worksheet);

      // Prepare gender data
      const genderCount = {};
      const ageSum = { Male: 0, Female: 0 };
      const ageCount = { Male: 0, Female: 0 };

      json.forEach(({ Name, Gender, Age }) => {
        genderCount[Gender] = (genderCount[Gender] || 0) + 1;

        if (Age) {
          ageSum[Gender] = (ageSum[Gender] || 0) + Age;
          ageCount[Gender] = (ageCount[Gender] || 0) + 1;
        }
      });

      const avgAges = {
        Male: ageSum.Male / (ageCount.Male || 1),
        Female: ageSum.Female / (ageCount.Female || 1),
      };

      setGenderData(genderCount);
      setAgeData({
        labels: Object.keys(avgAges),
        values: Object.values(avgAges),
      });
    };
    reader.readAsBinaryString(file);
  };

  const pieData = {
    labels: Object.keys(genderData),
    datasets: [{
      data: Object.values(genderData),
      backgroundColor: ['#FF6384', '#36A2EB'],
    }],
  };

  const barData = {
    labels: ageData.labels,
    datasets: [{
      label: 'Average Age',
      data: ageData.values,
      backgroundColor: '#FFCE56',
    }],
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleFileUpload} accept=".xlsx, .xls" />
      {Object.keys(genderData).length > 0 && (
        <div className="flex justify-between my-4">
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-4">Gender Distribution (Pie Chart)</h2>
            <Pie data={pieData} />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-4">Average Age by Gender (Bar Chart)</h2>
            <Bar data={barData} />
            <p className="mt-4 text-gray-700">
              The bar chart above displays the average age of individuals grouped by gender. 
              Each bar represents the mean age of males and females from the uploaded data, 
              providing insights into the age distribution across genders.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Item {
  input1: string;
  input2: string;
  category: string;
  originalFileName: string;
  // Add more fields as needed
}

const FetchedData: React.FC = () => {
  const [jsonData, setJsonData] = useState<Item[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Item[]>('http://localhost:5000/fetchData');
      setJsonData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {jsonData.map((item, index) => (
          <li key={index}>
            <p>{`Input 1: ${item.input1}`}</p>
            <p>{`Input 2: ${item.input2}`}</p>
            <p>{`Category: ${item.category}`}</p>
            <p>{`Original File Name: ${item.originalFileName}`}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchedData;

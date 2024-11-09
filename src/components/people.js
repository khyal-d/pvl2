import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const People = ({ peopleDataList, deletePeopleData }) => {
  const [state, setState] = useState({
    labels: ["Boy", "Male", "Girl", "Female"],
    datasets: [
      {
        label: 'People Data',
        backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
        hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
        data: [100, 100, 100, 100],
      },
    ],
  });

  useEffect(() => {
    const labels = Object.keys(peopleDataList);
    const datasetData = Object.values(peopleDataList);

    setState((prevState) => ({
      ...prevState,
      labels: labels,
      datasets: [
        {
          ...prevState.datasets[0],
          data: datasetData,
        },
      ],
    }));
    console.log(state);
  }, [peopleDataList]);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', backgroundColor: '#f9f9f9' }}>
      <h2>Submitted People Data</h2>
      {Object.keys(peopleDataList).length === 0 ? (
        <p>No data available</p>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "500px" }}>
          <div style={{ width: "300px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Doughnut
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'People Data Distribution',
                  fontSize: 10,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default People;

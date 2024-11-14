import React, { useEffect, useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

function SalesChart() {
  const [salesData, setSalesData] = useState([]);
  const chartRef = useRef(null); // Use ref for the chart canvas

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/sales")
      .then((response) => {
        setSalesData(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching sales data!", error)
      );

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  if (!salesData || salesData.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const data = {
    labels: salesData.map((item) => item.product),
    datasets: [
      {
        label: "Sales",
        data: salesData.map((item) => item.total_amount),
        backgroundColor: ["red", "blue", "green", "yellow", "purple"],
      },
    ],
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header text-center bg-primary text-white">
          <h5 className="mb-0">Sales Distribution</h5>
        </div>
        <div className="card-body">
          <div className="chart-container" style={{ height: "400px" }}>
            <Pie data={data} ref={chartRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesChart;

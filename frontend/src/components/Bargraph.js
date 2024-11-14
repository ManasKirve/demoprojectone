import React, { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
} from "chart.js";


ChartJS.register(BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

function SalesBarChart() {
  const [salesData, setSalesData] = useState([]);
  const chartRef = useRef(null);

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
        label: "Sales Amount",
        data: salesData.map((item) => item.total_amount),
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales by Product",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Products",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales Amount",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header text-center bg-success text-white">
          <h5 className="mb-0">Sales Bar Chart</h5>
        </div>
        <div className="card-body">
          <div className="chart-container" style={{ height: "400px" }}>
            <Bar data={data} options={options} ref={chartRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesBarChart;

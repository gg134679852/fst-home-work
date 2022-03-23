import React from 'react'
import {
  Chart as ChartJS
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import './LineChart.css'

const options = {
  responsive: true
};
const LineChart = ({ marketData }) => {
  const data = {
    labels: marketData.time,
    datasets: [
      {
        data: marketData.value,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }
  return (
    <div className="chart-container">
    <Line data={data} options={options} />
    </div>
  )
}

export default LineChart

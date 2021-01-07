import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';
import generateChartData from '../utils/generateChartDataset';


const horizontalOptions = {
  type: 'horizontalBar',
  plugins: [ChartDataLabels],
  options: {
    title: {
      display: true,
      scaleFontSize: 30,
      text: "Things I'm interested in",
    },
    responsive: true,
    dataset: {
      barPercentage: 1.0,
      categoryPercentage: 0.75,
    },
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            scaleFontSize: 20,
            beginAtZero: true,
            max: 100,
            min: 0,
            stepSize: 20,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontSize: 20,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        color: 'rgb(255,255,255)',
        anchor: 'end',
        align: 'left',
        formatter: Math.round,
        font: {
          weight: 'bold',
        },
      },
    },
  },
};

const verticalOptions = {
  type: 'bar',
  plugins: [ChartDataLabels],
  options: {
    title: {
      display: true,
      scaleFontSize: 25,
      text: "Things I'm interested in",
    },
    responsive: true,
    maintainAspectRatio: false,
    options: {
      animation: {
        delay: 2000,
      },
    },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            scaleFontSize: 20,
            beginAtZero: true,
            max: 100,
            min: 0,
            stepSize: 20,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontSize: 10,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        rotation: 90,
        font: {
          size: 8,
        },
        color: 'rgb(255,255,255)',
        anchor: 'end',
        align: 'bottom',
        formatter: Math.round,
      },
    },
  },
};

const StyledWrapper = styled.div`
  width: 90vw;
  height: 100%;
  margin: auto;

  @media (max-width: 1000px) {
    width: 100%;
    height: 500px;
  }
`;

let timeout;
export default function Charts({ dataset }) {
  const { width } = useWindowDimensions();
  const [delayWidth, setDelayWidth] = useState();
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  function drawChart() {
    if (!width) return;
    const options = width > 600 ? horizontalOptions : verticalOptions;
    setChartInstance(
      new Chart(chartRef.current, {
        data: generateChartData(dataset),
        ...options,
      })
    );
  }

  // used to make the chart delay before rerendering chart and running the animation
  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setDelayWidth(width);
    }, 500);
  }, [width]);

  useEffect(() => {
    if (chartInstance) chartInstance.destroy();
    drawChart();
  }, [delayWidth]);

  return (
    <StyledWrapper>
      <canvas className='canvas' ref={chartRef} />
    </StyledWrapper>
  );
}

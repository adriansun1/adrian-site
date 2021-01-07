const colors = [
  '57, 0, 153',
  '255, 0, 84',
  '158, 0, 89',
  '255, 189, 0',
  '255, 84, 0',
];

export default function generateChartData(dataset) {
  const output = {
    labels: [],
    datasets: [],
  };
  const sortedDataset = dataset.sort((a, b) => b.interest - a.interest);

  sortedDataset.forEach((data, setIndex) => {
    output.labels.push(data.label);
    Object.entries(data).forEach(([key, val]) => {
      if (key === 'label') return;
      const index = output.datasets.findIndex((e) => e.label === key);
      if (index > -1) {
        output.datasets[index].data.push(val);
      } else {
        const arr = [val];
        if (setIndex !== 0) {
          for (let i = 0; i < setIndex; i += 1) {
            arr.unshift(0);
          }
        }
        output.datasets.push({
          label: key,
          data: arr,
          barPercentage: 1.0,
        });
      }
    });
  });

  output.datasets.forEach((data, setIndex) => {
    data.backgroundColor = [];
    output.labels.forEach((_, index) => {
      data.backgroundColor.push(
        `rgba(${colors[setIndex % colors.length]}, 0.6)`
      );
    });
  });

  return output;
}

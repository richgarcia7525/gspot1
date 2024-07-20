import Chart from 'chart.js/auto';

const ctx = document.getElementById('analytics-chart').getContext('2d');
const analyticsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Customer Trends',
      data: [0, 10, 5, 2, 20, 30, 45],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

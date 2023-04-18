export const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [10, 100, 200, 30, 150, 0],
      strokeWidth: 3
    }
  ]
};

export const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(37, 167, 219, ${opacity})`,
  strokeWidth: 3,
  barPercentage: 0,
  useShadowColorFromDataset: false
};

export const styles = {
  marginVertical: 16,
  paddingRight: 3,
  paddingBottom: 0
};

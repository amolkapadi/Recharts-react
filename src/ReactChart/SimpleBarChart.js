import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const SimpleBarChart = () => {
  const data = [
    { name: 'Jan', uv: 1400, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 2300, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 1200, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 1278, pv: 3908, amt: 2000 },
    { name: 'May', uv: 3189, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 1239, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 1349, pv: 4300, amt: 2100 },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h3>Simple Bar Chart</h3>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
          <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default SimpleBarChart;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  content: {
    textAlign: 'center',
  },
};
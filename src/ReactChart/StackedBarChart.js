import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const StackedBarChart = () => {
    const data = [
        {"name":"Jan","uv":4500,"pv":2500,"amt":3000},
        {"name":"Feb","uv":3200,"pv":1500,"amt":2800},
        {"name":"Mar","uv":2200,"pv":9900,"amt":3100},
        {"name":"Apr","uv":2900,"pv":4100,"amt":2600},
        {"name":"May","uv":2000,"pv":4900,"amt":2700},
        {"name":"Jun","uv":2500,"pv":4000,"amt":2900},
        {"name":"Jul","uv":3700,"pv":4400,"amt":3100}
    ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h3>Stacked Bar Chart</h3>
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
          <Bar dataKey="uv" stackId="a" fill="#8884d8" />
          <Bar dataKey="pv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default StackedBarChart;

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

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TestChart = () => {
  return (
    <div style={{ width: '500px', height: '300px', backgroundColor: 'lightgray', margin: 'auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={[{ name: 'Test', value: 100 }]}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TestChart;

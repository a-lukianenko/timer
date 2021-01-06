import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import GenerateTasksBtn from "./GenerateTasksBtn";

export default function Chart({ data, labels, getRandomColor }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart width={800} height={250} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='hour'
            type='number'
            domain={[0, 23]}
            tickCount={24}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis type='number' domain={[0, 60]} />

          <Tooltip
            labelFormatter={(value, name, props) => [`${value}. hour`]}
            formatter={(value, name, props) => [`${value} min`, name]}
          />
          <Legend />
          {labels.map((label, index) => (
            <Bar
              key={index}
              dataKey={label}
              fill={getRandomColor()}
              barSize={15}
              stackId='a'
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
      <GenerateTasksBtn className={"btnRight"} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function ChartPie({ events }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

  const getData = () => {
    const data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary
          .split(" ")
          .find((word) => word.toLowerCase().includes(genre.toLowerCase()))
      ).length;

      return { name: genre, value };
    });
    return data;
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#cf281f"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.2;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.2;

    let precentValue = (percent * 100).toFixed(0);

    return precentValue === 0 ? null : (
      <text
        x={x}
        y={y}
        fill={COLORS[index]}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${precentValue}%`}
      </text>
    );
  };

  return (
    <div>
      <ResponsiveContainer height={400}>
        <PieChart height={400}>
          <Pie
            data={data}
            cx={400}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

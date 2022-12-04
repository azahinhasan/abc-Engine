import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
} from "recharts";
import { Paper, Collapse } from "@mui/material";
import { useEffect } from "react";

const Chart = ({ allDataFromCSV }) => {
  useEffect(() => {}, [allDataFromCSV]);
  return (
    <Collapse in={allDataFromCSV}>
      <Paper
        style={{ maxWidth: "900px", margin: "15px auto", padding: "20px" }}
      >
        <h2>Chart</h2>
        <h4>X axis - KP</h4>
        <h4>Y axis - X</h4>
        <BarChart width={830} height={250} data={allDataFromCSV}>
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="xAxis" />
          <YAxis dataKey="yAxis" />
          <Tooltip />
          <Legend />
          <Bar dataKey="yAxis" fill="#1565C0" />
        </BarChart>
        P.S. Due to so many data I limited it's to 120
      </Paper>
    </Collapse>
  );
};

export default Chart;

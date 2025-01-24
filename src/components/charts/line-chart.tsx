import { CHARTDATA, IChartProps, Metrics } from "@/lib/dto";
import { Stack, Text } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LineChartComponent({ data, metric }: IChartProps) {
  return (
    <Stack overflow={"hidden"} width={"full"} p={3}>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart height={300} width={600} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            angle={10}
            style={{
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          />
          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat("en-US", {
                notation: "compact",
                compactDisplay: "short",
              }).format(value)
            }
            style={{ fontSize: "15px" }}
            name="amount"
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={metric} stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Stack>
  );
}

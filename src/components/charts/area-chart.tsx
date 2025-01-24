import { CHARTDATA, IChartProps } from "@/lib/dto";
import { Stack } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function AreaChartComponent({ data, metric }: IChartProps) {
  return (
    <Stack overflow={"hidden"} width={"full"} p={3}>
      <ResponsiveContainer width={"100%"} height={300}>
        <AreaChart style={{ width: "100%" }} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            angle={10}
            style={{ fontWeight: "bold", textTransform: "capitalize" }}
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
          <Area dataKey={metric} fill="#F26419" />
        </AreaChart>
      </ResponsiveContainer>
    </Stack>
  );
}

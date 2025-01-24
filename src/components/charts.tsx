import { CHARTDATA, Metrics } from "@/lib/dto";
import LineChartComponent from "./charts/line-chart";
import AreaChartComponent from "./charts/area-chart";
import { Box, Flex, For, Text } from "@chakra-ui/react";
import { Skeleton } from "@/components/ui/skeleton";
import ChartTabs from "./chart-tabs";
import { Fragment } from "react";

interface IChart {
  data: CHARTDATA;
  isLoading: boolean;
  filterMetrics: Metrics;
  name: string;
}

export default function Charts({
  data,
  isLoading,
  filterMetrics,
  name,
}: IChart) {
  if (!data || isLoading)
    return (
      <Flex width={"full"} flexDirection={"column"} pt={10} gap={4}>
        <Skeleton height="6" width={"25%"} />
        <Skeleton height="6" width={"50%"} />
        <Skeleton height="6" width={"75%"} />
        <Skeleton height="6" width={"100%"} />
      </Flex>
    );
  return (
    <Box width={"full"} pt={7}>
      <For
        each={Object.keys(filterMetrics).filter(
          (it) => filterMetrics[it as keyof Metrics]
        )}
      >
        {(item, i) => (
          <Fragment key={i}>
            <Text textTransform={"capitalize"} fontWeight={"bold"} pb={4}>
              {name} {item} Chart
            </Text>
            <ChartTabs
              lineHeader={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={13}
                    height={13}
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Line Chart
                </>
              }
              barHeader={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={13}
                    height={13}
                  >
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                  </svg>
                  Area Chart
                </>
              }
              lineComponent={
                <LineChartComponent
                  data={data}
                  metric={item as keyof Metrics}
                />
              }
              barComponent={
                <AreaChartComponent
                  data={data}
                  metric={item as keyof Metrics}
                />
              }
            />
          </Fragment>
        )}
      </For>
    </Box>
  );
}

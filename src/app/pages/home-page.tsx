"use client";

import Filters from "@/components/filters";
import { Stack } from "@chakra-ui/react";
import useSWR from "swr";
import { GECKO_BASE_URL } from "@/lib/urls";
import { useEffect, useState } from "react";
import moment from "moment";
import { fetcher, transformData } from "@/lib/utils";
import { APIDATA, Inputs } from "@/lib/dto";
import Charts from "@/components/charts";
import MetricFilters from "@/components/metric-filters";

const defaultValues: Inputs = {
  coin: "bitcoin",
  currency: "usd",
  from: moment("2025-01-01").startOf("day").unix(),
  to: moment().endOf("day").unix(),
};

const metrics = {
  price: true,
  marketCap: false,
  volume: false,
};

export default function HomePage() {
  const [hydrate, setHydrate] = useState(false);
  const [options, setOptions] = useState(defaultValues);
  const [filterMetrics, setFilterMetrics] = useState(metrics);

  const { data, isLoading } = useSWR<APIDATA>(
    `${GECKO_BASE_URL}/coins/${options.coin}/market_chart/range?vs_currency=${options.currency}&from=${options.from}&to=${options.to}`,
    fetcher
  );

  const transformedData = (data && transformData(data)) || [];

  useEffect(() => {
    setHydrate(true);
  }, []);
  if (!hydrate) return null;
  return (
    <Stack p={5} justifyContent={"start"}>
      <Filters defaultValues={defaultValues} setOptions={setOptions} />
      <MetricFilters metrics={filterMetrics} setMetrics={setFilterMetrics} />
      <Charts
        data={transformedData}
        isLoading={isLoading}
        filterMetrics={filterMetrics}
        name={options.coin}
      />
    </Stack>
  );
}

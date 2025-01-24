import { Flex, For, Group, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Field } from "./ui/field";
import { Checkbox } from "./ui/checkbox";
import { Metrics } from "@/lib/dto";

interface Props {
  metrics: Metrics;
  setMetrics: (metric: Metrics) => void;
}

export default function MetricFilters({ metrics, setMetrics }: Props) {
  const {} = useForm();
  return (
    <Stack mt={"5"}>
      <Text>Choose Metric to Display:</Text>

      <Group flexWrap={"wrap"}>
        <For each={Object.keys(metrics)}>
          {(item, i) => (
            <Checkbox
              key={i}
              checked={metrics[item as keyof Metrics]}
              onCheckedChange={({ checked }) =>
                setMetrics({ ...metrics, [item as keyof Metrics]: checked })
              }
              textTransform={"capitalize"}
            >
              {item}
            </Checkbox>
          )}
        </For>
      </Group>
    </Stack>
  );
}

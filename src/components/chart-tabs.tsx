import { Box, Flex, Tabs, VStack } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

interface Props {
  lineHeader: ReactNode;
  barHeader: ReactNode;
  lineComponent: ReactElement;
  barComponent: ReactElement;
}
export default function ChartTabs({
  lineHeader,
  barHeader,
  lineComponent,
  barComponent,
}: Props) {
  return (
    <Tabs.Root defaultValue="area" variant={"enclosed"}>
      <Tabs.List>
        <Tabs.Trigger value="area">{barHeader}</Tabs.Trigger>
        <Tabs.Trigger value="line">{lineHeader}</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="area">{barComponent}</Tabs.Content>
      <Tabs.Content value="line">{lineComponent}</Tabs.Content>
    </Tabs.Root>
  );
}

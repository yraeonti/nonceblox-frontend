import { Box, Flex, Group, HStack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Flex padding={3} rounded={8} direction={"row"} gap={4} height={"full"}>
      <Sidebar height={"full"} />
      <VStack width={"full"} rounded={10}>
        <Header />
        <Box
          bg={"white"}
          rounded={10}
          height={"full"}
          width={"full"}
          overflowY={"scroll"}
        >
          {children}
        </Box>
      </VStack>
    </Flex>
  );
}

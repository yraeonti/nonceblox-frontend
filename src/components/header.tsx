import { Box, Center, Text } from "@chakra-ui/react";
import MobileDrawer from "./mobile-drawer";

export default function Header() {
  return (
    <Center
      as="header"
      rounded={10}
      padding={5}
      height={10}
      bg={"white"}
      width={"full"}
      justifyContent={"space-between"}
    >
      <Text fontStyle={"italic"} fontWeight={"bold"}>
        NonceBlox
      </Text>

      <Box lg={{ display: "none" }}>
        <MobileDrawer />
      </Box>
    </Center>
  );
}

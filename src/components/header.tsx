import { Box, Center } from "@chakra-ui/react";
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
      <span>NonceBlox</span>

      <Box lg={{ display: "none" }}>
        <MobileDrawer />
      </Box>
    </Center>
  );
}

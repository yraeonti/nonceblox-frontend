"use client";
import { Group, HStack, Text, VStack, For, StackProps } from "@chakra-ui/react";

import { usePathname } from "next/navigation";

const sideBarItems = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        height={20}
        width={20}
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
    name: "Home",
  },
];

const activeMenu = (menu: string, pathname: string) => {
  return pathname.includes(menu);
};

export default function Sidebar({ ...props }: StackProps) {
  return (
    <VStack
      display={{ base: "none", lg: "block" }}
      padding={5}
      pt={100}
      width={"20%"}
      rounded={20}
      bg={"white"}
      {...props}
    >
      <SidebarOptions />
    </VStack>
  );
}

export function SidebarOptions() {
  const pathname = usePathname();
  return (
    <>
      <For each={sideBarItems}>
        {(item, i) => (
          <Group
            key={i}
            bg={activeMenu("/", pathname) ? "#E8F0F2" : "transparent"}
            rounded={10}
            width={"full"}
            p={2}
          >
            {item.icon}
            <Text fontWeight={"normal"}> {item.name} </Text>
          </Group>
        )}
      </For>
    </>
  );
}

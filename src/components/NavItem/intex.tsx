import { Text } from "@chakra-ui/react";

interface NavItemProps {
  children: string;
  onClick?: () => void;
}

export function NavItem({ children, onClick }: NavItemProps) {
  return (
    <Text
      position="relative"
      cursor="pointer"
      onClick={onClick}
      _hover={{
        color: "gray.400",
        "&::before": {
          content: `""`,
          position: "absolute",
          top: "-4px",
          left: 0,
          width: "100%",
          height: "2px",
          bg: "gray.400",
        },
        "&::after": {
          content: `""`,
          position: "absolute",
          bottom: "-4px",
          left: 0,
          width: "100%",
          height: "2px",
          bg: "gray.400",
        },
      }}
    >
      {children}
    </Text>
  );
}
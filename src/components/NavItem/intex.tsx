import { Text } from "@chakra-ui/react";

interface NavItemProps {
  children: string;
}

export function NavItem({ children }: NavItemProps) {
  const idMap: { [key: string]: string } = {
    "INÍCIO": "inicio",
    "SOBRE": "sobre",
    "PORTFÓLIO": "portfolio",
    "PERGUNTAS": "faq",
    "CONTATO": "contato",
    "FAQ": "faq"
  };

  const handleClick = () => {
    const sectionId = idMap[children];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Text
      position="relative"
      cursor="pointer"
      onClick={handleClick}
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

import { Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItemProps {
  children: string;
}

export function NavItem({ children }: NavItemProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const idMap: { [key: string]: string } = {
    "INÍCIO": "inicio",
    "HABILIDADES": "habilidades",
    "SOBRE": "sobre",
    "PORTFÓLIO": "portfolio",
    "PERGUNTAS": "faq",
    "CONTATO": "contato",
    "FAQ": "faq"
  };

  const handleClick = () => {
    const sectionId = idMap[children];

    if (location.pathname === "/") {
      // Já está na home, rola até a seção
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Salva a intenção no sessionStorage e redireciona
      sessionStorage.setItem("scrollToSection", sectionId);
      navigate("/");
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

import { useState } from "react";
import { Flex, Image, Button, useMediaQuery } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { SocialIcon } from "../ButtonIcons/buttonIcon";
import { NavItem } from "../NavItem/intex"; // ajuste o caminho conforme seu projeto

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallerThan870] = useMediaQuery("(max-width: 950px)");

  return (
    <Flex 
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem 2rem"
      bg="#301c3f"
      color="white"
      position="fixed"  // fixa no topo
      top="0"
      left="0"
      width="100%"
      zIndex="1000"
    >
      {/* Logo */}
      <a href="/">
      <Image
        src="logo3.0.png"
        alt="Ícone JT"
        width="150px"
        height="50px"
        objectFit="contain"
        cursor="pointer"
        />
      </a>

      {/* Botão Sanduíche */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        bg="transparent"
        _hover={{ bg: "whiteAlpha.300" }}
        position="absolute"
        top="1.5rem"
        right="2rem"
        zIndex="10"
        display={isSmallerThan870 ? "block" : "none"} 
        color="white" 
        border="1px" 
        borderColor="white" 
      >
        {isOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={30} />}
      </Button>

      {/* Links de Navegação */}
      <Flex 
        align="center" 
        gap="4" 
        display={!isSmallerThan870 || isOpen ? "flex" : "none"} 
        flexDirection={isSmallerThan870 ? "column" : "row"}
        position={isSmallerThan870 ? "absolute" : "static"}
        top={isSmallerThan870 ? "60px" : "auto"}
        left={0}
        width={isSmallerThan870 ? "100%" : "auto"}
        bg={isSmallerThan870 ? "#301c3f" : "transparent"}
        p={isSmallerThan870 ? 4 : 0}
        justify="center"
        zIndex="9"
      >
        <NavItem>INÍCIO</NavItem>
        <NavItem>HABILIDADES</NavItem>
        <NavItem>SOBRE</NavItem>
        <NavItem>PORTFÓLIO</NavItem>
        <NavItem>PERGUNTAS</NavItem>
        <NavItem>CONTATO</NavItem>
        <NavItem>FAQ</NavItem>
      </Flex>

      {/* Ícones das redes sociais */}
      {!isSmallerThan870 && (
        <Flex align="center" gap="2">
          <SocialIcon
            href="https://www.linkedin.com/in/jofre-tomas-811113197/"
            icon={<FaLinkedin fontSize="1.5rem" />}
            label="LinkedIn"
          />
          <SocialIcon
            href="https://github.com/DevJofre"
            icon={<FaGithub fontSize="1.5rem" />} 
            label="GitHub"
          />
          <SocialIcon
            href="https://w.app/shcgkt"
            icon={<FaWhatsapp fontSize="1.5rem" />} 
            label="WhatsApp"
          />
        </Flex>
      )}
    </Flex>
  );
}

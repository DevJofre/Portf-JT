import { useState } from "react";
import { Flex, Image, Text, IconButton, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex 
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding="1rem 2rem"
      bg="#301c3f"
      color="white"
      gap="9"
    >
      {/* Logo */}
      <Image src="logo3.0.png" alt="Ícone JT" width="150px" height="50px" objectFit="contain" />
      
      {/* Links de Navegação */}
      <Flex 
        align="center" 
        gap="4" 
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        position={{ base: "absolute", md: "static" }}
        top={{ base: "60px", md: "auto" }}
        left={0}
        width={{ base: "100%", md: "auto" }}
        bg={{ base: "#301c3f", md: "transparent" }}
        p={{ base: 4, md: 0 }}
        justify="center"
      >
        <Text cursor="pointer" _hover={{ color: "gray.400" }}>INÍCIO</Text>
        <Text cursor="pointer" _hover={{ color: "gray.400" }}>SOBRE</Text>
        <Text cursor="pointer" _hover={{ color: "gray.400" }}>PORTFÓLIO</Text>
        <Text cursor="pointer" _hover={{ color: "gray.400" }}>PERGUNTAS</Text>
        <Text cursor="pointer" _hover={{ color: "gray.400" }}>CONTATO</Text>
        <Text cursor="pointer" _hover={{ color: "gray.400" }}>FAQ</Text>
      </Flex>
      
      {/* Ícones das redes sociais */}
      <Flex align="center" gap="2">
        <IconButton as="a" href="https://www.linkedin.com/in/seu-perfil" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.5rem" />} size="md" colorScheme="purple" isRound />
        <IconButton as="a" href="https://github.com/seu-usuario" aria-label="GitHub" icon={<FaGithub fontSize="1.5rem" />} size="md" colorScheme="purple" isRound />
        <IconButton as="a" href="https://wa.me/seu-numero" aria-label="WhatsApp" icon={<FaWhatsapp fontSize="1.5rem" />} size="md" colorScheme="purple" isRound />
      </Flex>
      
      {/* Botão Sanduíche */}
      <Button
        display={{ base: "block", md: "none" }}
        onClick={() => setIsOpen(!isOpen)}
        bg="transparent"
        _hover={{ bg: "whiteAlpha.300" }}
        position="absolute"
        right="2rem"
      >
        <Menu size={24} />
      </Button>
    </Flex>
  );
}
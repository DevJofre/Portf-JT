import { Box, Container, Stack, Text, Link, HStack, Image } from "@chakra-ui/react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialIcon } from "../ButtonIcons/buttonIcon";

export default function Footer() {
  return (
    <Box bg="#250147" color="white" py={6}>
      <Container maxW="6xl">
        <Stack direction={{ base: "column", md: "row" }} justify="space-between" spacing={6} align="center">
          {/* Logo e descrição */}
          <Stack spacing={2} maxW="300px" align="center">
            <Image src="/logo3.0.png" alt="Criative Agência"  width="200px" height="69px" objectFit="contain" align="left" />
            <Text fontSize="sm" textAlign="center">
              Comprometido com a qualidade do código e a entrega de soluções que geram impacto positivo.
            </Text>
          </Stack>

          {/* Contato */}
          <Stack spacing={2} align="center">
            <Text fontSize="lg" fontWeight="bold">CONTATO</Text>
            <HStack spacing={2}>
              <FaWhatsapp />
              <Text>(47) 9 9957-0049</Text>
            </HStack>
            <HStack spacing={2}>
              <FaPhone />
              <Text>(47) 9 9957-0049</Text>
            </HStack>
            <HStack spacing={2}>
              <FaEnvelope />
              <Text>jofretomas.dev@gmail.com</Text>
            </HStack>
          </Stack>

          {/* Menu */}
          <Stack spacing={1} align="center">
            <Text fontSize="lg" fontWeight="bold">MENU</Text>
            <Link href="#">Início</Link>
            <Link href="#">Tecnologias</Link>
            <Link href="#">Portfólio</Link>
            <Link href="#">Contato</Link>
          </Stack>

          {/* Redes Sociais */}
          <Stack spacing={2} align="center">
            <Text fontSize="lg" fontWeight="bold">SIGA-NOS</Text>
            <HStack spacing={2}>
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
                href="https://wa.me/47999570049"
                icon={<FaWhatsapp fontSize="1.5rem" />} 
                label="WhatsApp"
              />
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
import { Box, Container, Stack, Text, Link, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="#250147" color="white" py={6}>
      <Container maxW="6xl">
        <Stack direction={{ base: "column", md: "row" }} justify="space-between" spacing={6} align="center">
          {/* Logo e descrição */}
          <Stack spacing={2} maxW="300px" align="center">
            <Image src="/logo3.0.png" alt="Criative Agência"  width="200px" height="69px" objectFit="contain" align="left" />
            <Text fontSize="sm" textAlign="center">
              Somos especialistas em criar sites personalizados que convertem visitantes em leads e clientes.
            </Text>
          </Stack>

          {/* Contato */}
          <Stack spacing={2} align="center">
            <Text fontSize="lg" fontWeight="bold">CONTATO</Text>
            <HStack spacing={2}>
              <FaWhatsapp />
              <Text>(47) 9 9293-2109</Text>
            </HStack>
            <HStack spacing={2}>
              <FaPhone />
              <Text>(47) 9 9293-2109</Text>
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
            <Link href="#">Nossas Soluções</Link>
            <Link href="#">Portfólio</Link>
            <Link href="#">Contato</Link>
          </Stack>

          {/* Redes Sociais */}
          <Stack spacing={2} align="center">
            <Text fontSize="lg" fontWeight="bold">SIGA-NOS</Text>
            <HStack spacing={2}>
              <IconButton as="a" href="https://github.com/DevJofre" aria-label="GitHub" icon={<FaGithub fontSize="1.5rem" />} size="md" colorScheme="purple" isRound />
              <IconButton as="a" href="https://www.linkedin.com/in/jofre-tomas-811113197/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.5rem" />} size="md" colorScheme="purple" isRound />
              <IconButton as="a" href="#" aria-label="WhatsApp" icon={<FaWhatsapp fontSize="1.5rem" />} size="md" colorScheme="purple" isRound />
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
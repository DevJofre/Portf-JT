import { Box, Flex, Heading, Text, Icon, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

export function ContactForm() {
  return (
    <Flex
      backgroundImage="url('/bannerhome.png')"
      color="white"
      py={10}
      px={6}
      align="center"
      justify="center"
      flexDirection={["column", "column", "row"]}
      gap={10}
    >
      {/* Título e descrição - Esquerda */}
      <Box flex="1" maxW="400px" textAlign={["center", "left"]}>
        <Heading as="h2" size="xl" mb={3}>
          Fale Conosco
        </Heading>
        <Text mb={4}>
          Quer saber mais? Me mande uma mensagem e vamos falar sobre oportunidades.
        </Text>
      </Box>

      {/* Informações de contato - Direita */}
      <Box flex="1" maxW="400px" textAlign={["center", "left"]}>
        <Flex direction="column">
          <Flex align="center" mb={2}>
            <Icon as={FaWhatsapp} w={5} h={5} color="green.400" mr={2} />
            <Text>(47) 9 9957-0049</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={FaPhone} w={5} h={5} color="blue.400" mr={2} />
            <Text>(47) 9 9957-0049</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={FaEnvelope} w={5} h={5} color="yellow.400" mr={2} />
            <Text>jofretomas.dev@gmail.com</Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaLinkedin} w={5} h={5} color="pink.400" mr={2} />
            <Text>
              <Link
                href="https://www.linkedin.com/in/jofre-tomas-811113197/"
                isExternal
                color="pink.300"
                fontWeight="bold"
              >
                JofreTomas
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

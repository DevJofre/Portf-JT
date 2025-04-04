import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Textarea, Heading, Text, Icon, Grid } from "@chakra-ui/react";
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
      position="relative"
    >
      {/* Informações de contato */}
      <Box flex="1" maxW="400px" textAlign={["center", "left"]} mb={[6, 6, 0]}>
        <Heading as="h2" size="xl" mb={3}>
          Fale Conosco
        </Heading>
        <Text mb={4}>
          Solicite um orçamento agora mesmo e descubra como podemos te ajudar a ter um{" "}
          <Text as="span" color="pink.400" fontWeight="bold">
            site profissional
          </Text>{" "}
          que converte!
        </Text>
        <Box>
          <Flex align="center" mb={2}>
            <Icon as={FaWhatsapp} w={5} h={5} color="green.400" mr={2} />
            <Text>(47) 9 9293-2109</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={FaPhone} w={5} h={5} color="blue.400" mr={2} />
            <Text>(47) 9 9293-2109</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={FaEnvelope} w={5} h={5} color="yellow.400" mr={2} />
            <Text>jofretomas.dev@gmail.com</Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaLinkedin} w={5} h={5} color="pink.400" mr={2} />
            <Text></Text>
          </Flex>
        </Box>
      </Box>

      {/* Formulário */}
      <Box
        flex="1"
        bg="rgba(255, 255, 255, 0.1)"
        color="white"
        p={6}
        borderRadius="md"
        boxShadow="xl"
        maxW="500px"
        backdropFilter="blur(10px)"
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input placeholder="Nome" bg="transparent" border="1px solid white" borderRadius="full" />
          </FormControl>
          <FormControl>
            <FormLabel>Telefone</FormLabel>
            <Input type="tel" placeholder="Digite Seu Telefone" bg="transparent" border="1px solid white" borderRadius="full" />
          </FormControl>
        </Grid>

        <Grid templateColumns="repeat(2, 1fr)" gap={3} mt={3}>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" placeholder="E-mail" bg="transparent" border="1px solid white" borderRadius="full" />
          </FormControl>
          <FormControl>
            <FormLabel>Tipo de Serviço</FormLabel>
            <Select bg="transparent" border="1px solid white" borderRadius="full">
              <option value="site">Criação de Site</option>
              <option value="loja">Loja Virtual</option>
              <option value="marketing">Marketing Digital</option>
              <option value="outros">Outros</option>
            </Select>
          </FormControl>
        </Grid>

        <FormControl mt={3}>
          <FormLabel>Mensagem</FormLabel>
          <Textarea placeholder="Como posso te ajudar?" bg="transparent" border="1px solid white"  />
        </FormControl>

        <Button bg="pink.500" color="white" borderRadius="full" w="100%" mt={4} _hover={{ bg: "pink.600" }}>
          Enviar
        </Button>
      </Box>
    </Flex>
  );
}

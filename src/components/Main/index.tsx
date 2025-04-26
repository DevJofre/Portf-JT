import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

function Main() {
  return (
    <Flex 
      backgroundImage="url('/bannerhome.png')"
      backgroundSize="cover" 
      backgroundPosition="center top" 
      backgroundRepeat="no-repeat"
      align="center"
      w="100%"
      minH={{ base: "auto", md: "68vh" }} 
      maxH="700px"
      justify="center"
      px={6}
      flexDirection={{ base: "column", md: "row" }} 
      gap={8} // Espaço entre elementos
    >

      {/* Imagem - Ajustado para tamanhos responsivos */}
      <Box maxW={{ base: "300px", md: "400px" }} width="100%">
        <Image 
          src="jofre.png" 
          alt="Foto do Desenvolvedor de braços cruzados" 
          width="100%"
          height="auto"
          objectFit="contain"
        />
      </Box>

      {/* Conteúdo de texto - Removida altura fixa */}
      <Box
        maxW="600px"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start" 
      >
        <Text fontSize={["md", "lg"]} fontWeight="bold" color="white">
          Olá, Bem-vindo!
        </Text>
        
        <Heading
          fontSize={["3xl", "5xl"]}
          fontWeight="extrabold"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          Sou Jofre Tomas
        </Heading>
        
        <Text
          fontSize={["xl", "2xl"]}
          fontWeight="bold"
          color="purple.300"
          textDecoration="underline"
        >
          DESENVOLVEDOR FULL STACK
        </Text>
        
        <Button
          mt={4}
          colorScheme="blue"
          size="lg"
          leftIcon={<i className="fas fa-cloud-download-alt"></i>}
          borderRadius="full"
        >
          📂 Teste
        </Button>
      </Box>
    </Flex>
  );
}

export default Main;
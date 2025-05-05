import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

function Main() {
  return (
    <Flex 
      id="inicio"
      backgroundImage="url('/bannerhome.png')"
      backgroundSize="cover" 
      backgroundPosition="center top" 
      backgroundRepeat="no-repeat"
      w="100%"
      minH={{ base: "calc(100vh - 80px)", md: "68vh" }} 
      maxH="700px"
      justify="center"
      align={{ base: "flex-start", md: "center" }}
      px={6}
      flexDirection={{ base: "column", md: "row" }} 
      gap={8}
      pt="100px"
      pb={{ base: 4, md: 0 }}
      overflowY="auto"
    >
      {/* Imagem */}
      <Box maxW={{ base: "300px", md: "400px" }} width="100%">
        <Image 
          src="jofre.png" 
          alt="Foto do Desenvolvedor de braços cruzados" 
          width="100%"
          height="auto"
          objectFit="contain"
        />
      </Box>

      {/* Conteúdo de texto */}
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
          📂 Currículo
        </Button>
      </Box>
    </Flex>
  );
}

export default Main;

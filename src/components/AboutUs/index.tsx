import { Box, Flex, Heading, Text, Highlight, Button, Image } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export function AboutUs () {
  return (
    <Flex 
      backgroundImage="url('/bannerhome2.0.png')"
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
      {/* Conteúdo de texto - Removida altura fixa */}
      <Box
        maxW="600px"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start" 
      >
                <Heading as="h2" size="xl" mb={4}>
          Sobre Nós
        </Heading>
        <Button
          leftIcon={<FaStar />}
          variant="outline"
          colorScheme="purple"
          mb={4}
          fontSize={{ base: "sm", md: "md" }}
        >
          Seu parceiro para uma presença digital de sucesso!
        </Button>
        <Text mb={4}>
          Na <Highlight query="Criative Agência" styles={{ color: "purple.500", fontWeight: "bold" }}>
            Criative Agência
          </Highlight> acreditamos que um site é muito mais do que apenas uma página na web.
          É a porta de entrada para o seu negócio, a primeira impressão que você causa em seus clientes
          potenciais e a base para construir relacionamentos duradouros.
        </Text>
        <Text mb={4}>
          Com uma equipe experiente e criativa, usamos as últimas tendências em design e desenvolvimento
          para criar sites personalizados que atendem às suas necessidades e objetivos específicos.
          Trabalhamos em estreita colaboração com você para entender sua visão e garantir que seu site
          seja um reflexo fiel de sua marca.
        </Text>
        <Text fontWeight="bold" color="purple.500">
          Estamos prontos para ajudá-lo a criar um site que você ame.
        </Text>
      </Box>

      {/* Imagem - Ajustado para tamanhos responsivos */}
      <Box maxW={{ base: "300px", md: "400px" }} width="100%" display={{ base: "none", md: "block" }}>
        <Image 
          src="/src/assets/jofre.png" 
          alt="Foto do Desenvolvedor de braços cruzados" 
          width="100%"
          height="auto"
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
}

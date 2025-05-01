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
              Minha Jornada
        </Heading>
        <Button
          leftIcon={<FaStar />}
          variant="outline"
          colorScheme="purple"
          mb={4}
          fontSize={{ base: "sm", md: "md" }}
        >
          Juntando conhecimento, prática e vontade de evoluir.
        </Button>
        <Text mb={4}>
          Meu nome é <Highlight query="Jofre Tomas," styles={{ color: "purple.500", fontWeight: "bold" }}>
          Jofre Tomas,
          </Highlight> sou natural de Salvador e curso Sistemas de Informação no IFC. Tenho experiência com desenvolvimento usando C#, .NET, React, TypeScript, Node.js, Python e Docker.
        </Text>
        <Text mb={4}>
          Algumas habilidades que desenvolvi em projetos acadêmicos, pessoais e experiências práticas. Sou movido pela curiosidade e pela vontade constante de aprender, e estou sempre em busca de novos desafios para expandir meus horizontes como desenvolvedor e crescer na área de tecnologia.
        </Text>
        <Text fontWeight="bold" color="purple.500">
          Explore o que já desenvolvi.
        </Text>
      </Box>

      {/* Imagem - Ajustado para tamanhos responsivos */}
      <Box maxW={{ base: "300px", md: "400px" }} width="100%" display={{ base: "none", md: "block" }}>
        <Image 
          src="/jofre.png" 
          alt="Foto do Desenvolvedor de braços cruzados" 
          width="100%"
          height="auto"
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
}

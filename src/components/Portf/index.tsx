import { Box, Flex, Heading, Text, Image, Button, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: "/site1.png",
    link: "http://localhost:5173/projetos/1",
  },
  {
    id: 2,
    image: "/site-desenvolvimento.png",
    link: "#",
  },
  {
    id: 3,
    image: "/site-desenvolvimento.png",
    link: "#",
  },
  {
    id: 4,
    image: "/site-desenvolvimento.png",
    link: "#",
  },
  {
    id: 5,
    image: "/site-desenvolvimento.png",
    link: "#",
  },
  {
    id: 6,
    image: "/site-desenvolvimento.png",
    link: "#",
  },
];

export function Portfolio() {
  return (
    <Box textAlign="center" py={20}>
      <Heading as="h2" size="xl" mb={2}>
        Portfólio
      </Heading>
      <Text mb={6}>Confira meu portfólio de desenvolvimento</Text>

      <Flex
        wrap="wrap"
        justify="center"
        gap={8}
        maxW="900px"
        mx="auto"
        sx={{
          "& > *": {
            flexBasis: ["100%", "48%", "30%"],
          },
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Flex>

      <Box textAlign="center" mt={10} pb={10}>
        <a
          href="https://wa.me/5547992728639?text=Oi%20sou%20o%20Jofre%2C%20como%20posso%20ajudar%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            bg="green.500"
            color="white"
            borderRadius="full"
            px={6}
            py={4}
            fontSize="lg"
            boxShadow="md"
            transition="transform 0.3s ease-in-out"
            _hover={{
              bg: "green.600",
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
            leftIcon={<Icon as={FaWhatsapp} />}
          >
            Fale comigo no WhatsApp
          </Button>
        </a>
      </Box>
    </Box>
  );
}

function ProjectCard({ project }: { project: { image: string; link: string } }) {
  const isInternalLink = project.link !== "#";

  const cardContent = (
    <Box
      w="100%"
      maxW="280px"
      h="250px"
      overflow="hidden"
      position="relative"
      borderRadius="lg"
      borderWidth="1px"
      boxShadow="md"
      textAlign="center"
      p={4}
      mx="auto"
      role="group"
      cursor={isInternalLink ? "pointer" : "not-allowed"}
      opacity={isInternalLink ? 1 : 0.5}
    >
      <Box w="100%" h="100%" position="relative">
        <Image
          src={project.image}
          alt="Projeto"
          objectFit="cover"
          w="100%"
          h="auto"
          position="absolute"
          top="0"
          transition="transform 7s ease-in-out"
          _groupHover={{
            transform: "translateY(-50%)",
          }}
        />
      </Box>
    </Box>
  );

  return isInternalLink ? (
    <RouterLink to={project.link}>
      {cardContent}
      <Text
        mt={3}
        fontWeight="bold"
        color="blue.500"
        textAlign="center"
        transition="all 0.3s ease-in-out"
        _hover={{
          textDecoration: "underline",
          textShadow: "2px 2px 5px rgba(0, 0, 255, 0.3)",
        }}
      >
        VER PROJETO
      </Text>
    </RouterLink>
  ) : (
    <Box>
      {cardContent}
      <Text mt={3} fontWeight="bold" color="gray.400" textAlign="center">
        EM DESENVOLVIMENTO
      </Text>
    </Box>
  );
}

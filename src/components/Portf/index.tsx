import { Box, Flex, Heading, Text, Image, Link, Button, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "/site1.png", // sem "/public"
    link: "#",
  },
  {
    id: 2,
    image: "/site2.png",
    link: "#",
  },
  {
    id: 3,
    image: "/site3.png",
    link: "#",
  },
  {
    id: 4,
    image: "/images/project1.jpg",
    link: "#",
  },
  {
    id: 5,
    image: "/images/project2.jpg",
    link: "#",
  },
  {
    id: 6,
    image: "/images/project3.jpg",
    link: "#",
  },
];


export function Portfolio() {
    return (
      <Box textAlign="center" py={10}>
        <Heading as="h2" size="xl" mb={2}>
          Portfólio
        </Heading>
        <Text mb={6}>Conheça alguns sites profissionais que já criamos</Text>
        <Flex
          wrap="wrap"
          justify="center"
          gap={8}
          maxW="900px"
          mx="auto"
          sx={{
            "& > *": {
              flexBasis: ["100%", "48%", "30%"], // 1 coluna no mobile, 2 no médio, 3 no grande
            }
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Flex>
        <Box textAlign="center" mt={10} pb={10}>
            <Link
                href="https://wa.me/seunumerodetelefone"
                isExternal
                _hover={{ textDecoration: "none" }}
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
                    transform: "scale(1.05)", // Aumenta 5% ao passar o mouse
                    boxShadow: "lg", // Aumenta a sombra para dar um efeito 3D
                }}
                leftIcon={<Icon as={FaWhatsapp} />}
                >
                QUERO FAZER MEU SITE
                </Button>
            </Link>
        </Box>
      </Box>
      
    );
  }
  
  function ProjectCard({ project }: { project: { image: string; link: string } }) {
    return (
      <Link href={project.link} isExternal _hover={{ textDecoration: "none" }}>
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
        >
          <Box w="100%" h="100%" overflow="hidden" position="relative">
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
        <Text
            mt={3}
            fontWeight="bold"
            color="blue.500"
            transition="all 0.3s ease-in-out"
            _hover={{
                textDecoration: "underline",
                textShadow: "2px 2px 5px rgba(0, 0, 255, 0.3)", // Sombra azul suave
            }}
            >
            VER PROJETO
            </Text>
      </Link>
    );
  }
  
  
  
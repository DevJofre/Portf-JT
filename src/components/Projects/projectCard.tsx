import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Tag,
  TagLabel,
  Grid,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const imageUrls = [
  "/public/teste1.jpg",
  "/public/teste2.png",
  "/public/teste1.jpg",
  "/public/teste2.png"
];

export function ProjectCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    onOpen();
  };

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);

  return (
    <Box
      bg="white"
      px={{ base: 4, md: 10, lg: 20 }}
      py={{ base: 10, md: 10 }}
      mx="auto"
      maxW="1200px"
      fontFamily="sans-serif"
      transition="all 0.2s"
    >
      {/* Título e categoria */}
      <Flex justify="space-between" align="center" mb={8} mt={14} wrap="wrap">
        <Heading as="h3" size="xl" fontWeight="semibold"  >
          Ocafin - Web Site
        </Heading>
        <Tag colorScheme="blue" size="sm" mt={{ base: 2, md: 0 }}>
          <TagLabel>Web</TagLabel>
        </Tag>
      </Flex>

      {/* Vídeo + imagens pequenas */}
      <Flex wrap="wrap" gap={4} mb={4} justify="space-between">
        {/* Vídeo (iframe) */}
        <Box
          as="iframe"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          flex={{ base: "1 1 100%", md: "1 1 60%" }}
          h={{ base: "200px", md: "350px", lg: "450px" }}
          borderRadius="lg"
          allowFullScreen
        />

        {/* Imagens clicáveis */}
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={4}
          flex={{ base: "1 1 100%", md: "1 1 38%" }}
        >
          {imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              w="100%"
              aspectRatio={1}
              borderRadius="lg"
              objectFit="cover"
              cursor="pointer"
              onClick={() => openImage(index)}
              transition="all 0.2s ease-in-out"
              _hover={{
                boxShadow: "lg",
                border: "2px solid #e2e8f0",
                transform: "scale(1.02)",
              }}
            />
          ))}
        </Grid>
      </Flex>

      {/* Tecnologias */}
      <Text fontSize="lg" color="Black" mb={5} fontWeight="semibold">
        Tecnologias Usadas:
      </Text>
      <Stack direction="row" mb={6} flexWrap="wrap" spacing={2}>
        {['React', 'Chakra UI', 'Node.js', 'MongoDB'].map((tech) => (
          <Tag key={tech} size="sm" variant="subtle" colorScheme="gray">
            {tech}
          </Tag>
        ))}
      </Stack>

      {/* Seção de descrição expandida */}
      <Box mt={4}>
        <Heading fontSize="xl" color="Black" mb={5} fontWeight="semibold">
          Sobre o projeto
        </Heading>
        <Text fontSize="sm" color="gray.700">
          Este projeto é um site institucional desenvolvido para a empresa Ocafin. Ele foi feito com foco em design moderno, responsividade e fácil navegação. Utiliza tecnologias modernas como React, Chakra UI, Node.js e MongoDB, integrando frontend e backend com eficiência.
        </Text>
      </Box>

      {/* Modal com imagem ampliada */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalBody position="relative" p={0}>
            <Image src={imageUrls[currentIndex]} w="100%" borderRadius="lg" />
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={prevImage}
              position="absolute"
              top="50%"
              left="0"
              transform="translateY(-50%)"
              bg="rgba(0,0,0,0.5)"
              color="white"
              _hover={{ bg: "blackAlpha.700" }}
              aria-label="Anterior"
            />
            <IconButton
              icon={<ChevronRightIcon />}
              onClick={nextImage}
              position="absolute"
              top="50%"
              right="0"
              transform="translateY(-50%)"
              bg="rgba(0,0,0,0.5)"
              color="white"
              _hover={{ bg: "blackAlpha.700" }}
              aria-label="Próxima"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

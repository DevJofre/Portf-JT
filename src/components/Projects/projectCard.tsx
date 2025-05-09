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
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg"
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
      py={{ base: 40, md: 20 }}
      mx="auto"
      maxW="1200px"
      fontFamily="sans-serif"
      transition="all 0.2s"
    >
      {/* Título e categoria */}
      <Flex justify="space-between" align="center" mb={4} wrap="wrap">
        <Heading as="h3" size="sm" fontWeight="semibold">
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
            />
          ))}
        </Grid>
      </Flex>

      {/* Descrição */}
      <Text fontSize="sm" color="gray.600" mb={3} noOfLines={2}>
        Tecnologias Usadas:
      </Text>

      {/* Tecnologias */}
      <Stack direction="row" mb={3} flexWrap="wrap" spacing={2}>
        {['React', 'Chakra UI', 'Node.js', 'MongoDB'].map((tech) => (
          <Tag key={tech} size="sm" variant="subtle" colorScheme="gray">
            {tech}
          </Tag>
        ))}
      </Stack>

      {/* Botão */}
      <Box
        mt={4}
        py={2}
        textAlign="center"
        bg="black"
        color="white"
        borderRadius="md"
        fontWeight="medium"
        fontSize="sm"
        cursor="pointer"
        _hover={{ bg: "gray.800" }}
      >
        Ver detalhes
      </Box>

      {/* Modal com imagem ampliada e setas */}
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

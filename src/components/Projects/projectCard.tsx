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

interface ProjectCardProps {
  title: string;
  category: string;
  videoUrl: string;
  imageUrls: string[];
  technologies: string[];
  description: string;
}

export function ProjectCard({
  title,
  category,
  videoUrl,
  imageUrls,
  technologies,
  description,
}: ProjectCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    onOpen();
  };

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);

  return (
    <Box maxW="1200px" mx="auto" px={6} py={10} pt={24} bg="gray.80">
      {/* Título e categoria */}
      <Flex justify="space-between" align="center" mb={6} wrap="wrap">
        <Heading as="h3" size="xl">{title}</Heading>
        <Tag colorScheme="blue" size="sm">
          <TagLabel>{category}</TagLabel>
        </Tag>
      </Flex>

      {/* Vídeo + imagens */}
      <Flex wrap="wrap" gap={4} justify="space-between">
        {/* Vídeo */}
        <Box
          as="iframe"
          src={videoUrl}
          flex={{ base: "1 1 100%", md: "1 1 60%" }}
          h={{ base: "200px", md: "350px" }}
          borderRadius="lg"
          allowFullScreen
        />

        {/* Imagens */}
        <Grid templateColumns="repeat(2, 1fr)" gap={4} flex="1 1 38%">
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
      <Text mt={8} fontWeight="bold">Tecnologias Usadas:</Text>
      <Stack direction="row" wrap="wrap" spacing={2} mb={4}>
        {technologies.map((tech) => (
          <Tag key={tech} size="sm" mt={4} variant="subtle" colorScheme="gray">
            {tech}
          </Tag>
        ))}
      </Stack>

      {/* Descrição */}
      <Text fontWeight="bold" mt={8} mb={2}>Sobre o projeto:</Text>
      <Text color="gray.700">{description}</Text>

      {/* Modal de imagem ampliada */}
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

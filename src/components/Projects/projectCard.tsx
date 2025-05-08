import { Box, Flex, Heading, Text, Stack, Tag, TagLabel, Grid } from "@chakra-ui/react";

export function ProjectCard() {
  return (
    <Box
      bg="white"
      px={{ base: 4, md: 10, lg: 20 }}
      py={{ base: 40, md: 40 }}
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

      {/* Imagem principal + quadrados menores */}
      <Flex
        wrap="wrap"
        gap={4}
        mb={4}
        justify="space-between"
      >
        {/* Imagem principal (retângulo) */}
        <Box
          flex={{ base: "1 1 100%", md: "1 1 60%" }}
          h={{ base: "200px", md: "350px", lg: "450px" }}
          bg="red.500"
          borderRadius="lg"
          order={{ base: 0, md: 0 }}
        />

        {/* Quatro quadrados menores */}
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={4}
          flex={{ base: "1 1 100%", md: "1 1 38%" }}
          order={{ base: 1, md: 0 }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <Box
              key={i}
              w="100%"
              aspectRatio={1}
              bg="red.700"
              borderRadius="lg"
            />
          ))}
        </Grid>
      </Flex>

      {/* Descrição */}
      <Text fontSize="sm" color="gray.600" mb={3} noOfLines={2}>
        Site institucional desenvolvido para empresa Ocafin com catálogo de produtos e informações de contato.
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
    </Box>
  );
}

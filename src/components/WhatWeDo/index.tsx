import { Flex, Box, Text, Heading, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const services = [
  {
    title: "Site Institucional",
    description: "Apresente sua empresa, serviços e produtos, permita que seu público te encontre facilmente na internet."
  },
  {
    title: "Loja Virtual",
    description: "Permita que seus clientes comprem seus produtos de onde estiverem, a qualquer hora do dia."
  },
  {
    title: "Landing Pages",
    description: "Capture dados de leads potenciais, aumente suas vendas e melhore o ROI das suas campanhas de marketing."
  },
  {
    title: "Portais de Notícia",
    description: "Portais de notícias dinâmicos e informativos, com recursos avançados de pesquisa e categorização."
  },
  {
    title: "Site de Imobiliária",
    description: "Aumente sua visibilidade online e seja encontrado por quem busca imóveis na sua região."
  },
  {
    title: "Site Personalizado",
    description: "Desenvolva soluções únicas para atender às suas necessidades específicas com design profissional e intuitivo."
  }
];

export function WhatWeDo() {
  return (
    <Flex direction="column" align="center" p={10}>
      <Heading size="xl" mb={4}>O que fazemos?</Heading>
      <Text textAlign="center" maxW="600px" mb={8}>
        Um site vai além de uma simples página na internet. Ele é a porta de entrada para o seu negócio, a vitrine que apresenta seus produtos ou serviços e a ferramenta poderosa para alcançar seus objetivos.
      </Text>
      <Flex wrap="wrap" justify="center" gap={8} maxW="900px" 
        sx={{
          "& > *": {
            flexBasis: ["100%", "48%", "30%"]
          }
        }}>
        {services.map((service, index) => (
          <Box key={index} textAlign="center" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
            <Icon as={FaStar} color="purple.500" boxSize={6} mb={2} />
            <Heading size="md" mb={2}>{service.title}</Heading>
            <Text fontSize="sm" color="gray.600">{service.description}</Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

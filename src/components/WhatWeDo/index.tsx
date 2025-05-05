import { Flex, Box, Text, Heading, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const services = [
  {
    title: "C#",
    description: "Utilizo C# com ASP.NET para criar aplicações web e APIs RESTful, integrando com banco de dados via Entity Framework. Já desenvolvi sistemas de controle financeiro, CRUDs e autenticação de usuários."
  },
  {
    title: "TypeScript",
    description: "Uso JavaScript no frontend manipulando o DOM, criando componentes dinâmicos e consumindo APIs. Apliquei em projetos com React para desenvolver interfaces interativas e responsivas."
  },
  {
    title: "Python",
    description: "Uso Python em projetos acadêmicos e pessoais para automações e análise de dados. Explorei bibliotecas como Pandas em estudos de ciência de dados."
  },
  {
    title: "Node.js",
    description: "Com Node.js, desenvolvo backend e APIs, crio CRUDs e uso Express.js para agilizar o processo. Também integro com bancos de dados como MongoDB e MySQL, faço autenticação de usuários e faço o deploy em AWS e Docker."
  },
  {
    title: "Git",
    description: "Utilizo Git para versionamento de código, criação de branches, merge de funcionalidades e controle de histórico de alterações. Trabalho com GitHub para hospedagem de repositórios, revisão de código (pull requests) e colaboração em equipe."
  },
  {
    title: "Metodologias Ágeis",
    description: "Tenho experiência com metodologias ágeis (Scrum, Kanban) e ferramentas de gerenciamento de chamados (Jira, Trello) para organizar e acompanhar projetos."
  }
];

export function WhatWeDo() {
  return (
    <Flex direction="column" align="center" p={20}>
      <Heading size="xl" mb={4} textAlign="center">Habilidades Técnicas</Heading>
      <Text textAlign="center" maxW="600px" mb={8}>
      Ao longo da minha jornada como programador, desenvolvi um conjunto sólido de habilidades técnicas que me permitem criar soluções eficientes, escaláveis e seguras. Trabalho com foco no ecossistema .NET, mas também tenho experiência em outras tecnologias modernas do desenvolvimento web e backend. 
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

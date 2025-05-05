import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Stack,
} from "@chakra-ui/react";

const faqItems = [
  {
    question: "Quem sou eu?",
    answer:
      "Sou Jofre, desenvolvedor full stack com ênfase em backend. Tenho experiência sólida com C# e .NET, criando APIs, sistemas web e integrações com bancos de dados. Também atuo no frontend com React e TypeScript, sempre buscando entregar soluções completas e bem estruturadas.",
  },
  {
    question: "Quais tecnologias eu domino?",
    answer:
      "Tenho domínio prático de C#, .NET, Node.js, TypeScript e React, com experiência em projetos reais. Além disso, possuo conhecimento acadêmico em Python, Angular e Java.",
  },
  {
    question: "Atuação atual?",
    answer:
      "Atualmente, atuo como programador júnior full stack, desenvolvendo soluções com foco em C#, .NET, React e TypeScript. Tenho contribuído em projetos reais, colaborando com equipes de desenvolvimento e lidando com desafios do dia a dia profissional.",
  },
  {
    question: "Tenho experiência com computação em nuvem?",
    answer:
      "Sim, possuo conhecimentos em Docker e já explorei de forma limitada serviços de nuvem como AWS e Azure em projetos e estudos pessoais.",
  },
  {
    question: "Quais habilidades levo para sua equipe?",
    answer:
      "Gosto de trabalhar em equipe, aprender com os outros e contribuir para soluções que realmente façam a diferença. Tenho facilidade em entender problemas, me comunicar bem e buscar sempre a melhor forma de entregar valor em cada projeto.",
  },
];

export function FAQ() {
  return (
    <Box maxW="1200px" mx="auto" py={20} px={4}>
      <Stack spacing={8} textAlign="center">
        <Heading as="h2" size="2xl" fontWeight="bold">
          FAQ - Perguntas Frequentes
        </Heading>
      </Stack>
      <Accordion allowToggle mt={10}>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} borderWidth="1px" borderRadius="md" mb={4}>
            <h2>
              <AccordionButton _expanded={{ bg: "blue.500", color: "white" }} p={4}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>{item.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

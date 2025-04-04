import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from "@chakra-ui/react";

const faqItems = [
  {
    question: "Quem sou eu?",
    answer: "Sou Jofre, um desenvolvedor full stack com experiência em frontend e backend. Trabalho com C#, React e diversas tecnologias modernas."
  },
  {
    question: "Quais tecnologias eu domino?",
    answer: "Tenho experiência com HTML, CSS, JavaScript, TypeScript, React, C#, Python, Docker, Kubernetes, MySQL, PostgreSQL e muito mais."
  },
  {
    question: "Onde trabalho atualmente?",
    answer: "Atualmente, sou programador júnior full stack na Acanto Labs."
  },
  {
    question: "Tenho experiência com computação em nuvem?",
    answer: "Sim, possuo conhecimentos em Docker, Kubernetes e já explorei serviços de nuvem como AWS, Azure e GCP."
  },
  {
    question: "Como posso ajudar no seu projeto?",
    answer: "Posso desenvolver interfaces modernas e responsivas, criar APIs robustas e trabalhar em integrações entre frontend e backend."
  },
];

export function FAQ() {
  return (
    <Box maxW="800px" mx="auto" py={10} textAlign="center">
      <Heading as="h2" size="xl" mb={6}>
        FAQ - Perguntas Frequentes
      </Heading>
      <Accordion allowToggle>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} borderWidth="1px" borderRadius="md" overflow="hidden" mb={3}>
            <h2>
              <AccordionButton _expanded={{ bg: "blue.500", color: "white" }} p={4}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign="left">
              <Text>{item.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
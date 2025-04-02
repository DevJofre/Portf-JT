import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const icons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
];

export default function AnimatedIcons() {
  return (
    <Flex 
      justify="center" 
      align="center" 
      bg="#250147" 
      gap={2} 
      overflow="hidden"
      paddingY={2}
    >
      <Flex gap={4}>
        {icons.map((icon, index) => (
          <motion.img
            key={index}
            src={icon}
            alt="icon"
            width={50}
            height={50}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, ease: "linear" }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          />
        ))}
      </Flex>
    </Flex>
  );
}

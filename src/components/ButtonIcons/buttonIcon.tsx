import { IconButton } from "@chakra-ui/react";
import { ReactElement } from "react"; // Para permitir qualquer tipo de conteúdo (como o ícone)

interface SocialIconProps {
  href: string; 
  icon: ReactElement;      
  label: string;         
}

export function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <IconButton
      as="a"
      href={href}
      aria-label={label}
      icon={icon}
      size="md"
      colorScheme="purple"
      isRound
      target="_blank"
    />
  );
}

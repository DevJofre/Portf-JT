import { Navbar } from "../components/Nav";
import Footer from "../components/Footer";
import { ProjectDetails } from "./ProjectDetails";
import { Box, Flex } from "@chakra-ui/react";

export function LayoutProject() {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar/>
      <Box flex="1">
        <ProjectDetails />
      </Box>
      <Footer />
    </Flex>
  );
}
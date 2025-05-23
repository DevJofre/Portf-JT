import { useParams } from "react-router-dom";
import { projects } from "../data/projectsMock";
import { ProjectCard } from "../components/Projects/projectCard";


export function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div style={{ textAlign: "center", padding: "50px" }}>Projeto não encontrado.</div>;
  }

  return <ProjectCard {...project} />;
}

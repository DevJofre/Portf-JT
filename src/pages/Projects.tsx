import { ContactForm } from "../components/ContactUs"
import { Navbar } from "../components/Nav"
import { ProjectCard } from "../components/Projects/projectCard"


export const Projects: React.FC = () => {
    return(
        <>
            <Navbar/>
            <ProjectCard/>
            <ContactForm/> 
        </>

    )
}
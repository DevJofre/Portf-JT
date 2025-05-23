import { Navbar } from "../components/Nav";
import Footer from "../components/Footer";
import { ProjectDetails } from "./ProjectDetails";
import { ContactForm } from "../components/ContactUs";


export function LayoutProject() {
  return (
    <>
      <Navbar />
      <ProjectDetails />
      <ContactForm />
      <Footer />
    </>
  );
}
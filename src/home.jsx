import Background from "./componets/Background";
import NavBar from "./componets/NavBar";
import ThemeToggle from "./componets/ThemeToggle";
import Homesection from "./componets/Homesection ";
import AboutSection from "./componets/AboutSection";
import SkillsSection from "./componets/SkillsSection";
import ProjectsSection from "./componets/ProjectsSection";
import ContactSection from "./componets/ContactSection";


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />

      {/* background effects */}
      <Background />

      {/* nav bar  */}

      <NavBar />

      {/* main content */}

      <main>
        <Homesection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;

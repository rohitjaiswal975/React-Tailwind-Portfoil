import pdf from "../pdf/resume.example.pdf";
import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="conatiner mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">About</span> <span>Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Passionates Web Developer
            </h2>

            <p className="text-muted-foreground">
              I am a passionate Web Developer who loves creating clean,
              responsive, and user-friendly websites. I enjoy turning ideas into
              functional digital experiences using modern technologies like
              HTML, CSS, JavaScript, and React.
            </p>

            <p className="text-muted-foreground">
              Problem-solving and improving UI/UX are the parts of development I
              enjoy the most. I am always exploring new tools, learning new
              concepts, and enhancing my skills to build better and more
              creative web solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a href={pdf} download="resume.pdf" className="cosmic-button">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-bold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Web Page applications with modern frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-bold text-lg">UI/UX Desings</h4>
                    <p className="text-muted-foreground">
                      I design intuitive and visually engaging user interfaces
                      that elevate the overall user experience. My focus is on
                      creating clean, modern layouts that blend creativity with
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-bold text-lg">Project Management</h4>
                    <p className="text-muted-foreground">
                      plan, organize, and manage projects efficiently to ensure
                      timely and successful delivery. My approach focuses on
                      clear communication, streamlined workflows, and consistent
                      progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { ArrowBigDown } from "lucide-react";

const Homesection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I Am</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rohit
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Jaiswal
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a dedicated Front-End Developer focused on creating clean,
            modern, and responsive user interfaces. I specialize in HTML, CSS,
            JavaScript, and modern frameworks to build fast and visually
            appealing websites. My goal is to deliver smooth user experiences
            with pixel-perfect designs. I always aim to bring creativity and
            high-quality results to every project I work on.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#Projects" className="cosmic-button">
              See My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span>Scroll</span>
          <ArrowBigDown className="text-primary" />
      </div>
    </section>
  );
};

export default Homesection;

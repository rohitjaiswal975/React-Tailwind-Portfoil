import { ExternalLinkIcon, GithubIcon } from "lucide-react";

const projects = [
  {
    key: "1",
    title: "Portfolio Website",
    imageSrc: "public/ecommerce.webp",
    description:
      "This is an incomplete project. I uploaded it because I wanted to learn it.",
    demo: "https://github.com/rohitjaiswal975/Uncomplete-Projects.git",
    source: "https://github.com/rohitjaiswal975/Uncomplete-Projects.git",
  },
];

const ProjectsSection = () => {
  return (
    <section id="Projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, id) => (
            <div
              key={id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                />
                <h3 className="text-xl font-semibold text-purple-700">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-start">
                  <div className="flex space-x-3">
                    <a href={project.demo} target="blank">
                      <ExternalLinkIcon size={30} />
                    </a>
                    <a href={project.source}>
                      <GithubIcon size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/rohitjaiswal975?tab=repositories"
            className="cosmic-button w-fit flex items-center mx-auto gap-4"
            target="_blank"
          >
            Check My GitHub Account
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

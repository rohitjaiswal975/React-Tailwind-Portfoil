import { useState } from "react";

const skills = [
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "JAVASCRIPT", level: 85, category: "Frontend" },
  { name: "REACT", level: 85, category: "Frontend" },
  { name: "PHP", level: 70, category: "Backend" },
  { name: "GITHUB", level: 90, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

const SkillsSection = () => {

  const [activecategory, setcategory] = useState("all");

  const filterdskills = skills.filter((skill) => activecategory === "all" || skill.category === activecategory)

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span>My</span> <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, id) => (
            <button
              key={id}
              className="px-5 py-3 rounded-full cosmic-button"
              onClick={() => setcategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterdskills.map((skill, id) => (
            <div
              key={id}
              className="bg-card p-5 rounded-lg shadow-xs card-hover"
            >
              <h3 className="font-semibold text-lg">{skill.name}</h3>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-primary h-2 rounded-full origin-left"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right">
                <span className="text-sm">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

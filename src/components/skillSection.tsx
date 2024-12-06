import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface Skill {
  icon: JSX.Element;
  name: string;
}

interface SkillsProps {
  skills: Skill[];
  className?: string;
}

const SkillSection = ({ icon, name }: Skill) => (
  <div className="skill-rectangle bg-tertiary aspect-square w-36 lg:w-48 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110">
    <div className="icon-container text-3xl lg:text-4xl mb-3 lg:mb-4">{icon}</div>
    <p className="text-lg lg:text-xl font-semibold">{name}</p>
  </div>
);

const Skills = ({ skills, className }: SkillsProps) => {
  const isInView = useIntersectionObserver("skill", { threshold: 0 });

  return (
    <div
      id="skill"
      className={`skills min-h-screen flex flex-col items-center p-12 ${className} ${
        isInView ? "animate-pop-out" : ""
      }`}
    >
      <h1 id="startPoint" className="text-3xl lg:text-4xl text-text font-bold pt-8">
        Technology Expertise
      </h1>
      <h4 className="text-text text-lg lg:text-xl mb-12">
        Am familiar with these technologies
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {skills.map((skill, index) => (
          <SkillSection key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

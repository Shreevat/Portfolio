import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface Skill {
  icon: JSX.Element;
  name: string;
}

interface SkillsProps {
  skills: Skill[];
  className?: string;
}

const SkillCard = ({ icon, name }: Skill) => (
  <div className="group bg-muted border border-border rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
    <div className="text-primary text-4xl mb-3 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <p className="text-base font-medium text-text">{name}</p>
  </div>
);

const Skills = ({ skills, className }: SkillsProps) => {
  const isInView = useIntersectionObserver("skill", { threshold: 0 });

  return (
    <section
      id="skill"
      className={`min-h-screen flex flex-col items-center px-6 lg:px-12 py-16 space-y-6 ${className} ${
        isInView ? "animate-fade-in" : ""
      }`}
    >
      <h1 className="text-3xl lg:text-4xl font-bold text-text">Technology Expertise</h1>
      <h4 className="text-text text-lg lg:text-xl mb-6">
        Am familiar with these technologies
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

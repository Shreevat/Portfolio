interface Skill {
  icon: JSX.Element;
  name: string;
}

interface SkillsProps {
  skills: Skill[];
  className?: string;
}

const SkillSection = ({ icon, name }: Skill) => (
  <div className="skill-rectangle bg-tertiary p-4 rounded-lg flex flex-col items-center justify-center">
    {icon}
    <p className="text-lg font-bold">{name}</p>
  </div>
);

const Skills = ({ skills, className }: SkillsProps) => (
  <div
    className={`skills bg-primary flex flex-col items-center p-8 ${className}`}
  >
    <h2 className="text-2xl font-bold mb-8">Technology Expertise</h2>
    <div className="grid grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <SkillSection key={index} {...skill} />
      ))}
    </div>
  </div>
);

export default Skills;

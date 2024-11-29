interface Skill {
  icon: JSX.Element;
  name: string;
}

interface SkillsProps {
  skills: Skill[];
  className?: string;
}

const SkillSection = ({ icon, name }: Skill) => (
  <div className="skill-rectangle bg-tertiary p-4 rounded-lg shadow-[rgba(0,0,0,0.35)_0px_5px_15px] transition-shadow duration-300 flex flex-col items-center justify-center hover:scale-105">
    {icon}
    <p className="text-lg font-bold">{name}</p>
  </div>
);

const Skills = ({ skills, className }: SkillsProps) => (
  <div
    id="skillSection"
    className={`skills h-screen bg flex flex-col items-center p-10 ${className}`}
  >
    <h1 className="text-2xl text-text font-bold pt-10">Technology Expertise</h1>
    <h4 className=" text-text pb-10">Am familiar with these technology</h4>
    <div className="grid grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <SkillSection key={index} {...skill} />
      ))}
    </div>
  </div>
);

export default Skills;

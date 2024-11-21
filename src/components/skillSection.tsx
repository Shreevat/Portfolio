interface Skill {
  image: string;
  name: string;
}

interface SkillsProps {
  skills: Skill[];
  className?: string;
}

const SkillSection = ({ image, name }: Skill) => (
  <div className="skill-rectangle bg-secondary p-4 rounded-lg ">
    <img src={image} alt={name} className="w-8 h-8 mx-auto" />
    <p className="text-lg font-bold text-center">{name}</p>
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

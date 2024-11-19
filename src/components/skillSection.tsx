interface Skill {
  image: string;
  name: string;
}

interface SkillsProps {
  skills: Skill[];
  className?: string;
}

const SkillSection = ({ image, name }: Skill) => (
  <div className="skill-rectangle bg-red-500 p-4 rounded-lg md:w-1/3">
    <img src={image} alt={name} className="w-8 h-8 mx-auto" />
    <p className="text-lg font-bold text-center">{name}</p>
  </div>
);

const Skills = ({ skills, className }: SkillsProps) => (
  <div className={`skills bg-teal-200 flex flex-col items-center p-8 ${className}`}>
    <h2 className="text-2xl font-bold mb-8">Technology Expertise</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <SkillSection key={index} {...skill} />
      ))}
    </div>
  </div>
);

export default Skills;

interface Skill {
  image: string;
  name: string;
}

interface SkillsProps {
  skills: Skill[];
}

const SkillSection = ({ image, name }: Skill) => (
    <div className="skill-rectangle bg-cyan-500 p-4 rounded-lg shadow-md">
      <img src={image} alt={name} className="w-8 h-8 mb-2" />
      <p className="text-lg font-bold">{name}</p>
    </div>
);

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="skills bg-teal-200 flex flex-wrap justify-center p-8 gap-4">
      {skills.map((skill, index) => (
        <SkillSection key={index} {...skill} />
      ))}
    </div>
  );
};

export default Skills;

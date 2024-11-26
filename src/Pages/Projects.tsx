const Projects = () => { 
const projects = [
  {
    title: "Baun",
    description: `
      A side-scrolling platformer game made in Unity Engine.
      Worked on level design and sprites.
    `,
    gif: "https://via.placeholder.com/300x200",
  },
  {
    title: "Mailo Driver",
    description: `
      A driving game made in Unity Engine, featuring a license trial mode.
      Worked on map design.
    `,
    gif: "https://via.placeholder.com/300x200",
  },
];

  return (
    <div className="projects bg-primary flex flex-col items-center p-8">
      <h2 className="text-2xl text-secondary font-bold mb-8">Game Development Projects</h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="project bg-tertiary p-4 rounded-lg">
            <img
              src={project.gif}
              alt={project.title}
              className="w-full h-auto"
            />
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

/******  6f70e475-d9c8-4c3b-8a00-054b98e692d0  *******/
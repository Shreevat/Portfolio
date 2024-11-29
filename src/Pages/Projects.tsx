import useImageViewer from "../Hooks/useImageViewer";
import md from "../assets/Images/MailoDriver.gif";
import rd from "../assets/Images/RajeshDai.gif";

const Projects = () => {
  const { selectedImage, isAnimating, openViewer, closeViewer } =
    useImageViewer();

  const projects = [
    {
      title: "Rajesh Dai",
      description: `
      A side-scrolling platformer game made in Unity Engine.
      Worked on level design.
    `,
      gif: rd,
    },
    {
      title: "Mailo Driver",
      description: `
      A driving game made in Unity Engine, featuring a license trial mode.
      Worked on map design.
    `,
      gif: md,
    },
  ];

  return (
    <div className="projects flex flex-col items-center p-8">
      <h2 className="text-2xl text-text font-bold mb-8">
        Game Development Projects
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project bg-tertiary p-4 rounded-lg cursor-pointer"
            onClick={() => openViewer(project.gif)}
          >
            <img
              src={project.gif}
              alt={project.title}
              className="w-full h-auto"
            />
            <h3 className="text-lg text-text font-bold">{project.title}</h3>
            <p className="text-sm text-text">{project.description}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeViewer}
        >
          <img
            src={selectedImage}
            alt="Selected Project"
            className={`max-w-full max-h-screen object-contain transform transition-all duration-300 ${
              isAnimating ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;

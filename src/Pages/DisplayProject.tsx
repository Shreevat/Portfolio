import useImageViewer from "../hooks/useImageViewer";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import md from "../assets/Images/MailoDriver.gif";
import rd from "../assets/Images/RajeshDai.gif";

const Projects = () => {
  const { selectedImage, openViewer, closeViewer } = useImageViewer();
  const isInView = useIntersectionObserver("startPoint1", { threshold: 0.5 });

  const projects = [
    {
      title: "Rajesh Dai",
      description: `A side-scrolling platformer game made in Unity Engine. Worked on level design.`,
      gif: rd,
    },
    {
      title: "Mailo Driver",
      description: `A driving game made in Unity Engine, featuring a license trial mode. Worked on map design.`,
      gif: md,
    },
  ];

  return (
    <section id="startPoint1" className="flex flex-col items-center px-6 lg:px-12 py-16 space-y-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-text">Game Development Projects</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl ${isInView ? "animate-fade-in" : ""}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-card border border-border rounded-xl shadow-md transition-transform hover:scale-105 cursor-pointer"
            onClick={() => openViewer(project.gif)}
          >
            {/* Project Image - Ensuring it doesn't crop */}
            <img src={project.gif} alt={project.title} className="w-full h-auto rounded-t-xl" />

            {/* Overlay Card Description */}
            <div className="bg-background p-4 rounded-b-xl border-t border-border">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeViewer}
        >
          <img
            src={selectedImage}
            alt="Selected Project"
            className="max-w-full max-h-screen object-contain transition-transform duration-300"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;

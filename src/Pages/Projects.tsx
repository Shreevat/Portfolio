import { PROJECTS } from "../constants/project.ts";
import withLayout from "../hoc/withLayout";
// import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Project() {
  
  
    

  return (
    <div className="projects grid grid-cols-1 gap-y-5 items-center justify-items-center p-8 min-h-screen overflow-y-auto  shadow-md">
      <h1 className="text-2xl text-text font-bold text-center mb-4">
        Have worked on
      </h1>

     
      {PROJECTS.map((project, index) => (

        
        <div
          className={`projects bg-tertiary opacity-0 w-[80%] p-6 rounded-lg shadow-[rgba(0,0,0,0.35)_0px_5px_15px]  transition-transform duration-300 hover:scale-105 
            animate-sweepIn`}
          style={{ animationDelay: `${index * 0.3}s` }} //
          key={index}
          
          onAnimationStart={(e) => {
            e.currentTarget.classList.remove("opacity-0");
          }}
        >
          <h2 className="text-2xl text-text font-bold text-center mb-2">
            {project.title}
          </h2>
          <p className="text-lg text-text text-center">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

const ProjectWithLayout = withLayout(Project);

export default ProjectWithLayout;

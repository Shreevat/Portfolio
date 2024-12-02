import { PROJECTS } from "../constants/project.ts";
import withLayout from "../hoc/withLayout";

function Project() {
  return (
    //add a shadow on bottom of this div
    <div className="projects grid grid-cols-1 items-center justify-items-center p-8 min-h-screen shadow-md">
        <h1 className="text-2xl text-text font-bold text-center mb-4">Have worked on</h1>
        {PROJECTS.map((project, index) => (
          <div
            className="bg-tertiary w-[80%] p-6 rounded-lg shadow-[rgba(0,0,0,0.35)_0px_5px_15px] transition-transform duration-300 hover:scale-105"
            key={index}
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

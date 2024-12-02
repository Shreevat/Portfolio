import withLayout from "../hoc/withLayout";

const Projects = () => {
  return (
    <div
      id="startPoint"
      className={`skills h-screen bg flex flex-col items-center p-10 `}
    >
      <h1 id="startPoint" className="text-2xl text-text font-bold pt-10">
        Have a look at my projects
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {/* add 3 boxes with project such as contacts api backend, unity project, scoreboard website below*/}
        <div className="skill-rectangle bg-tertiary p-4 rounded-lg shadow-[rgba(0,0,0,0.35)_0px_5px_15px] transition-shadow duration-300 flex flex-col items-center justify-center hover:scale-105"></div>
        </div>
    </div>
  );
};

const ProjectWithLayout = withLayout(Projects);

export default ProjectWithLayout;

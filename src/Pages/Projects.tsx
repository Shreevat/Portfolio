import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { PROJECTS } from "../constants/project";
import withLayout from "../hoc/withLayout";
import SortableItem from "../components/SortableItem"; // Custom component for sortable items

function Project() {
  const [projects, setProjects] = useState(PROJECTS);

  // Setup DnD sensors
  const sensors = useSensors(useSensor(MouseSensor));

  // Handle drag-and-drop event
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = projects.findIndex((p) => p.id === active.id);
      const newIndex = projects.findIndex((p) => p.id === over.id);

      setProjects((prevProjects) =>
        arrayMove(prevProjects, oldIndex, newIndex)
      );
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="projects-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center p-8 min-h-screen overflow-y-auto shadow-md">
        <h1 className="text-2xl text-text font-bold text-center mb-6">
          Have Worked On
        </h1>
        <SortableContext
          items={projects.map((project) => project.id)}
          strategy={verticalListSortingStrategy}
        >
          {projects.map((project, index) => (
            <SortableItem key={project.id} id={project.id}>
              <div
                className="sortable-item bg-tertiary p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full max-w-[350px] mx-auto"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <h2 className="text-xl font-semibold text-text text-center mb-2">
                  {project.title}
                </h2>
                <p className="text-base text-text text-center mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center bg-primary text-text text-center font-medium text-sm px-4 py-2 rounded hover:bg-primary-dark transition"
                  >
                    View Project
                  </a>
                )}
              </div>
            </SortableItem>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}
const ProjectWithLayout = withLayout(Project);
export default ProjectWithLayout;

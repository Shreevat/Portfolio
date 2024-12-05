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
import { PROJECTS } from "../constants/project.ts";
import withLayout from "../hoc/withLayout";
import SortableItem from "../components/SortableItem.tsx"; // Custom component for sortable items

function Project() {
  const [projects, setProjects] = useState(PROJECTS);

  // Sensors for drag-and-drop
  const sensors = useSensors(useSensor(MouseSensor));

  // Handle drag-end event
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = projects.findIndex((p) => p.id === active.id);
      const newIndex = projects.findIndex((p) => p.id === over?.id);
      setProjects((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="projects-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center p-8 min-h-screen overflow-y-auto shadow-md">
        <h1 className="text-2xl text-text font-bold text-center mb-4">
          Have worked on
        </h1>

        <SortableContext
          items={projects.map((p) => p.id)}
          strategy={verticalListSortingStrategy}
        >
          {projects.map((project, index) => (
            <SortableItem key={project.id} id={project.id}>
              <div
                className="sortable-item bg-tertiary p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full max-w-[350px] mx-auto"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <h2 className="text-2xl text-text font-bold text-center mb-2">
                  {project.title}
                </h2>
                <p className="text-lg text-text text-center">
                  {project.description}
                </p>
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

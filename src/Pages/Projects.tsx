"use client";

import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  type DragEndEvent,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { PROJECTS } from "../constants/project";
import withLayout from "../hoc/withLayout";
import SortableItem from "../components/SortableItem";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

function Project() {
  const [projects, setProjects] = useState(PROJECTS);
  // const [expandedProject, setExpandedProject] = useState<string | null>(null);
  // Setup DnD sensors with both mouse and touch support
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

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

  // const toggleExpand = (id: string) => {
  //   setExpandedProject(expandedProject === id ? null : id);
  // };

  return (
    <div className="bg-background py-16 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-center mb-12">
          <span className="text-primary">Projects</span> I've Worked On
        </h1>
        <p className="text-center text-text mb-8 max-w-2xl mx-auto">
          Each project represents my skills and experience in different areas of
          development.
        </p>

        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-tooltip-id="send-tooltip"
            data-tooltip-content="Drag n droppable items, trying things out"
          >
            <SortableContext
              items={projects.map((project) => project.id)}
              strategy={verticalListSortingStrategy}
            >
              {projects.map((project, index) => (
                <SortableItem key={project.id} id={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  >
                    {/* {project.category === "Professional" && (
                      <div className="h-40 bg-gray-100 overflow-hidden">
                        {expandedProject === project.id ? (
                          <iframe
                            src={project.link}
                            className="w-full h-full border-none"
                            title={`Preview of ${project.title}`}
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                          />
                        ) : (
                          <div
                            className="w-full h-full bg-gradient-to-r from-primary/20 to-tertiary flex items-center justify-center cursor-pointer"
                            onClick={() => toggleExpand(project.id)}
                          >
                            <span className="text-sm font-medium text-gray-700">
                              Click to show preview
                            </span>
                          </div>
                        )}
                      </div>
                    )} */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="text-xl font-bold text-text mb-3">
                          {project.title}
                        </h2>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            project.category === "Personal"
                              ? "bg-blue-500 text-white"
                              : "bg-green-500 text-white"
                          }`}
                        >
                          {project.category}
                        </span>
                      </div>
                      <p className="text-text/80 mb-6 min-h-[80px]">
                        {project.description}
                      </p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-primary text-text font-medium px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors duration-300 w-full text-center"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </motion.div>
                </SortableItem>
              ))}
            </SortableContext>
          </div>
          <Tooltip id="send-tooltip" place="bottom" />
        </DndContext>

        <div className="text-center mt-12 text-text/70">
          <p>Drag to reorder • {projects.length} projects</p>
        </div>
      </motion.div>
    </div>
  );
}

const ProjectWithLayout = withLayout(Project);
export default ProjectWithLayout;

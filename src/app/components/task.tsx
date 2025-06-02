"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TaskEditForm } from "@/app/components/taskform";

type TaskStatus = "To Do" | "In Progress" | "Done";
type TaskPriority = "Low" | "Medium" | "High";

interface Task {
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  creationDate: Date;
  dueDate?: string;
}

interface TaskCardProps {
  task: Task;
}

const Task : React.FC<TaskCardProps> = ({ task}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskData, setTaskData] = useState<Task>(task);
  const handleSave = (data: { status: TaskStatus; priority: TaskPriority }) => {
    setIsEditing(false);
    setTaskData((prev) => ({
      ...prev,
      status: data.status,
      priority: data.priority,
    }));
  };
   return (
    <div className="border p-4 rounded-lg shadow max-w-md space-y-2">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{taskData.title}</h3>
        {!isEditing && (
          <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </div>

      {task.description && <p className="text-sm text-muted-foreground">{taskData.description}</p>}

      <div className="text-xs text-muted-foreground flex justify-between">
        <span>Created: {task.creationDate.toLocaleDateString()}</span>
        {task.dueDate && <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>}
      </div>

      {!isEditing ? (
        <div className="flex gap-2 text-sm">
          <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800">{taskData.status}</span>
          <span className="px-2 py-1 rounded-full bg-red-100 text-red-800">{taskData.priority}</span>
        </div>
      ) : (
        <TaskEditForm
          onCancel={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
export default Task;
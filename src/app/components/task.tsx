'use client';

import { useState } from 'react';
import { useTaskContext } from '@/context/TaskContext';
import { Button } from '@/components/ui/button';
import TaskForm from '@/app/components/taskform';

interface TaskProps {
  task: {
    id: string;
    title: string;
    description?: string;
    status: 'ToDo' | 'InProgress' | 'Done';
    priority: 'Low' | 'Medium' | 'High';
    dueDate?: string;
  };
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { fetchTasks } = useTaskContext();
  const handleSave = async (data: {
    title: string;
    description?: string;
    status: 'ToDo' | 'InProgress' | 'Done';
    priority: 'Low' | 'Medium' | 'High';
    dueDate?: string;
  }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_TP_API_URL}/update/${task.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, id: task.id }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
  
      await fetchTasks(); 
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-[#FAFAFA] shadow max-w-md space-y-2">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        {!isEditing && (
          <Button variant="outline" className="hover:bg-white" size="sm" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </div>

      {task.description && <p className="text-sm">{task.description}</p>}

      <div className="text-xs text-muted-foreground flex justify-between">
        {task.dueDate && (
          <span className={`${new Date(task.dueDate) < new Date() ? 'text-red-800' : 'text-black'}`}>
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>

      {!isEditing ? (
        <div className="flex gap-2 text-sm">
          <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800">{task.status}</span>
          <span className="px-2 py-1 rounded-full bg-red-100 text-red-800">{task.priority}</span>
        </div>
      ) : (
        <TaskForm
          initialData={task}
          onSubmit={handleSave}
        />
      )}
    </div>
  );
};

export default Task;
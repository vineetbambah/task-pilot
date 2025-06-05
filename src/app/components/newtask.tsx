'use client';

import { useState } from 'react';
import { useTaskContext } from '@/context/TaskContext';
import TaskForm from '@/app/components/taskform';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const NewTask = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { fetchTasks } = useTaskContext();

  const handleCreateTask = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3001/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      await fetchTasks(); // Refresh tasks
      setOpen(false); // Close the dialog
    } catch (error) {
      console.error('Error creating task:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-gradient-to-r from-amber-800 to-amber-800/90 text-white px-4 py-2 rounded">
          New Task
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <TaskForm onSubmit={handleCreateTask} isLoading={isSubmitting} />
      </DialogContent>
    </Dialog>
  );
};

export default NewTask;
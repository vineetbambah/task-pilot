'use client';

import { useState } from "react";

import TaskForm from "@/app/components/taskform";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const NewTask = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateTask = async (data: any) => {
    setIsSubmitting(true);
    try {
      setOpen(false); // Close the dialog
    } catch (error) {
      console.error("Error creating task:", error);
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
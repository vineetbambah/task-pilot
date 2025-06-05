'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.enum(["ToDo", "InProgress", "Done"]),
  priority: z.enum(["Low", "Medium", "High"]),
  dueDate: z.string().optional(), 
});

export type FormData = z.infer<typeof formSchema>;

interface TaskFormProps {
  initialData?: Partial<FormData>;
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
}

export default function TaskForm({
  initialData,
  onSubmit,
  isLoading = false,
}: TaskFormProps) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      status: "ToDo",
      priority: "Medium",
      ...initialData,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("title")}
          placeholder="Task Title"
          className="w-full border px-3 py-2 rounded"
          disabled={isLoading}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("description")}
          placeholder="Task Description"
          className="w-full border px-3 py-2 rounded"
          disabled={isLoading}
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Due Date</label>
        <input
          type="date"
          {...register("dueDate")}
          className="w-full border px-3 py-2 rounded"
          disabled={isLoading}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select 
          {...register("status")} 
          className="w-full border px-3 py-2 rounded"
          disabled={isLoading}
        >
          <option value="ToDo">To Do</option>
          <option value="InProgress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Priority</label>
        <select 
          {...register("priority")} 
          className="w-full border px-3 py-2 rounded"
          disabled={isLoading}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? (
          "Processing..."
        ) : (
          initialData ? "Update Task" : "Create Task"
        )}
      </button>
    </form>
  );
}

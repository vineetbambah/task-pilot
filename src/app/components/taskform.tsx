'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.enum(["To Do", "In Progress", "Done"]),
  priority: z.enum(["Low", "Medium", "High"]),
  dueDate: z.date().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function TaskForm({ onSubmit }: { onSubmit: () => void }) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      status: "To Do",
      priority: "Medium",
    },
  })

  const handleSubmit = (data: FormData) => {
    console.log("New task:", data)
    onSubmit()
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
      <input
        {...form.register("title")}
        placeholder="Task Title"
        className="w-full border px-3 py-2 rounded"
      />
      <textarea
        {...form.register("description")}
        placeholder="Task Description"
        className="w-full border px-3 py-2 rounded"
      />
        <input
            type="date"
            {...form.register("dueDate")}
            className="w-full border px-3 py-2 rounded"
        />
      <select {...form.register("status")} className="w-full border px-3 py-2 rounded">
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select> 
      <select {...form.register("priority")} className="w-full border px-3 py-2 rounded">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select> 
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Save Task
      </button>
    </form>
  )
}

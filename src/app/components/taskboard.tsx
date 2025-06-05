'use client';

import { useState, useEffect } from "react";
import Task from "@/app/components/task";

const TaskBoard = () => {
    const [tasks, setTasks] = useState([]); // State to store tasks
    const [isLoading, setIsLoading] = useState(true); // State to handle loading

    // Function to fetch tasks from the API
    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/posts");
            if (!response.ok) {
                throw new Error("Failed to fetch tasks");
            }
            const data = await response.json();
            setTasks(data); // Update the tasks state with the fetched data
        } catch (error) {
            console.error("Error fetching tasks:", error);
        } finally {
            setIsLoading(false); // Stop the loading spinner
        }
    };

    // Fetch tasks when the component mounts
    useEffect(() => {
        fetchTasks();
    }, []);

    // Function to handle task updates (e.g., after creating or updating a task)
    const handleTaskUpdate = () => {
        fetchTasks(); // Re-fetch tasks to reflect changes
    };

    if (isLoading) {
        return <div>Loading tasks...</div>; // Show a loading state while tasks are being fetched
    }

    return (
        <div className="w-full p-4 mx-auto max-w-3xl">
            <div className="desktop-board hidden md:visible"></div>
            <div className="mobile-board md:hidden grid grid-cols-1 gap-4">
                <Task
                    task={{
                        id: "2",
                        title: "Sample Task",
                        description: "This is a sample task description.",
                        status: "Done",
                        priority: "High",
                        creationDate: new Date(),
                        dueDate: "2026-10-01",
                    }}
                />
            </div>
        </div>
    );
};

export default TaskBoard;
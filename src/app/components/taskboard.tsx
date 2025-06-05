import Task from "@/app/components/task";

const TaskBoard = () => {
    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/posts");
            console.log(response);
            if (!response.ok) {
                throw new Error("Failed to fetch tasks");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching tasks:", error);
            return [];
        }
    };
    const tasks = fetchTasks();
    console.log("Fetched tasks:", tasks);
    return (
        <div className="w-full p-4 mx-auto max-w-3xl">
            <div className="desktop-board hidden md:visible"></div>
            <div className="mobile-board md:hidden grid grid-cols-1 gap-4">
                {/* Mobile board content goes here */}
                <Task
                    task={{
                        id: "1",
                        title: "Sample Task",
                        description: "This is a sample task description.",
                        status: "Done",
                        priority: "High",
                        creationDate: new Date(),
                        dueDate: "2023-10-31",
                    }}
                />
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
}
export default TaskBoard;
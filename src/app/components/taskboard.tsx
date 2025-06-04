import Task from "@/app/components/task";
const TaskBoard = () => {
    return (
        <div className="w-full p-4 mx-auto max-w-3xl">
            <div className="desktop-board hidden md:visible"></div>
            <div className="mobile-board md:hidden grid grid-cols-1 gap-4">
                {/* Mobile board content goes here */}
                <Task
                    task={{
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
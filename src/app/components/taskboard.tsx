import Task from "@/app/components/task";
const TaskBoard = () => {
  return (
    <div className="w-full p-4 mx-auto max-w-3xl">
      <div className="desktop-board hidden md:visible"></div>
      <div className="mobile-board md:hidden grid grid-cols-1 gap-4">
        {/* Mobile board content goes here */}
      </div>
    </div>
  );
}
export default TaskBoard;
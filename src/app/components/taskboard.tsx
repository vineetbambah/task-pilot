'use client';

import { useTaskContext } from '@/context/TaskContext';
import Task from '@/app/components/task';

const TaskBoard = () => {
  const { tasks } = useTaskContext();

  if (!tasks.length) {
    return <div>No tasks available.</div>;
  }

  return (
    <div className="w-full p-4 mx-auto max-w-3xl">
      <div className="desktop-board hidden md:visible"></div>
      <div className="mobile-board md:hidden grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
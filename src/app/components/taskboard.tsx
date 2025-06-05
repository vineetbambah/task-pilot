'use client';

import { useTaskContext } from '@/context/TaskContext';
import Task from '@/app/components/task';

const TaskBoard = () => {
  const { tasks } = useTaskContext();

  if (!tasks.length) {
    return <div>No tasks available.</div>;
  }

  // Filter tasks by priority
  const lowPriorityTasks = tasks.filter((task) => task.priority === 'Low');
  const mediumPriorityTasks = tasks.filter((task) => task.priority === 'Medium');
  const highPriorityTasks = tasks.filter((task) => task.priority === 'High');

  return (
    <div className="w-full p-4 mx-auto max-w-6xl">
      {/* Desktop Board */}
      <div className="desktop-board hidden md:grid grid-cols-3 gap-4">
        {/* High Priority Section */}
        <div className="bg-red-100 p-4 space-y-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-red-800 mb-4">High Priority</h2>
          {highPriorityTasks.length ? (
            highPriorityTasks.map((task) => <Task key={task.id} task={task} />)
          ) : (
            <p className="text-sm text-gray-500">No high-priority tasks.</p>
          )}
        </div>

        {/* Medium Priority Section */}
        <div className="bg-yellow-100 p-4 space-y-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-yellow-800 mb-4">Medium Priority</h2>
          {mediumPriorityTasks.length ? (
            mediumPriorityTasks.map((task) => <Task key={task.id} task={task} />)
          ) : (
            <p className="text-sm text-gray-500">No medium-priority tasks.</p>
          )}
        </div>

        {/* Low Priority Section */}
        <div className="bg-green-100 p-4 space-y-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-green-800 mb-4">Low Priority</h2>
          {lowPriorityTasks.length ? (
            lowPriorityTasks.map((task) => <Task key={task.id} task={task} />)
          ) : (
            <p className="text-sm text-gray-500">No low-priority tasks.</p>
          )}
        </div>
      </div>

      {/* Mobile Board */}
      <div className="mobile-board md:hidden grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
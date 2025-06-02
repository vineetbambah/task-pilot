import TaskBoard from "@/app/components/taskboard";
export default function Home() {
  return (
   <>
   <nav className="p-4 mx-auto flex justify-between items-center">
      <h1 className="text-2xl ">
        Task <span className="font-medium text-amber-700">Pilot</span>
      </h1>
      <button className="bg-gradient-to-r from-amber-800 to-amber-800/90  text-white px-4 py-2 rounded">
        New Task
      </button>
   </nav>
   <TaskBoard />
   </>
  );
}

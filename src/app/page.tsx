import TaskBoard from "@/app/components/taskboard";
import NewTask from "@/app/components/newtask";
export default function Home() {
  return (
   <>
   <nav className="p-4 mx-auto flex justify-between items-center">
      <h1 className="text-2xl ">
        Task <span className="font-medium text-amber-700">Pilot</span>
      </h1>
      <NewTask />
   </nav>
   <TaskBoard />
   </>
  );
}

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Portfolio() {
  return (
    <div className="bg-gray-50">
       <div className=" container  font-[family-name:var(--font-geist-sans)]">
      <h1 className=" text-center text-4xl font-bold font-serif pt-4">What I've Built</h1>
      <ProjectCard />
    </div>

    </div>
   
  );
}

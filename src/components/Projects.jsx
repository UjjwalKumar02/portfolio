import img1 from "../../public/circles2.png";
import img2 from "../../public/resume-score.jpeg";
import ProjectBox from "./ProjectBox";


const Projects = () => {
  return (
    <section
      id="projects"
      className="lg:max-w-4xl mx-auto p-10 mt-24 rounded-2xl shadow-sm border-[1.5px] border-gray-300"
    >
      <h1 className="lg:text-2xl text-xl font-medium text-center">Recent Projects</h1>

      <div className="space-y-28 my-16">
        <ProjectBox
          title={"Circles"}
          desc={"A community based social web app."}
          img={img1}
          techStack={["React.js", "Express.js", "PostgreSQL"]}
          githubLink={"https://github.com/UjjwalKumar02/Circles"}
          liveLink={"https://circles-tan.vercel.app"}
        />
        <ProjectBox
          title={"Rescore"}
          desc={"A tool to evaluate resumes with JD."}
          img={img2}
          techStack={["Next.js", "FastAPI", "ML"]}
          githubLink={"https://github.com/UjjwalKumar02/Rescore"}
          liveLink={"https://rescore-flax.vercel.app"}
        />
      </div>
    </section>
  );
};

export default Projects;

import ProjectBox from "./ProjectBox";
import img1 from "../../public/circles2.png";
import img2 from "../../public/resume-score.jpeg";
import ProjectBox2 from "./ProjectBox2";

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="lg:max-w-4xl mx-auto p-10 mt-24 rounded-2xl shadow-sm border-[1.5px] border-gray-300"
    >
      <h1 className="lg:text-2xl text-xl font-medium text-center">Recent Projects</h1>

      <div className="space-y-18 mt-10">
        {/* <ProjectBox2 /> */}
        <ProjectBox2
          title={"Circles"}
          desc={"A community based social web app."}
          img={img1}
          // stack1={["React.js", "Express.js"]}
          // stack2={["PostgreSQL", "TypeScript"]}
          githubLink={"https://github.com/UjjwalKumar02/Circles"}
          liveLink={"https://circles-tan.vercel.app"}
        />
        <ProjectBox2
          title={"Rescore"}
          desc={"A tool to evaluate resumes with JD."}
          img={img2}
          // stack1={["Next.js", "FastAPI"]}
          // stack2={["scikit-learn", "Python"]}
          githubLink={"https://github.com/UjjwalKumar02/Rescore"}
          liveLink={"https://rescore-flax.vercel.app"}
        />
      </div>
    </section>
  );
};

export default Projects;

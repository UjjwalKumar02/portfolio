import ProjectBox from "./ProjectBox";
import img1 from "../../public/circles2.png";
import img2 from "../../public/resume-score.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="lg:w-[60%] w-[97%] mx-auto mt-20">
      <h1 className="text-2xl font-medium text-center">Projects</h1>

      <div className="flex lg:flex-row flex-col justify-between ">
        <ProjectBox
          name={"Circles"}
          desc={"A community based social platform for connecting people."}
          img={img1}
          stack1={["React.js", "Express.js"]}
          stack2={["PostgreSQL", "TypeScript"]}
          github={"https://github.com/UjjwalKumar02/Circles"}
          live={"https://circles-tan.vercel.app"}
        />
        <ProjectBox
          name={"Rescore"}
          desc={"A resume evaluator based on JDs using Machine Learning."}
          img={img2}
          stack1={["Next.js", "FastAPI"]}
          stack2={["scikit-learn", "Python"]}
          github={"https://github.com/UjjwalKumar02/Rescore"}
          live={"https://rescore-flax.vercel.app"}
        />
      </div>
    </div>
  );
};

export default Projects;

import SkillsBox from "./SkillsBox";


const Skills = () => {
  return (
    <section 
      id="skills" 
      className="max-w-4xl mx-auto p-10 mt-24"
    >
      <h1 className="mb-10 lg:text-2xl text-xl font-medium text-center">Technical Skills</h1>

      <div className="flex flex-row flex-wrap justify-center gap-8">
        <SkillsBox
          name={"Languages"}
          stack={["C++", "JavaScript"]}
        />
        <SkillsBox
          name={"Frontend"}
          stack={["Next.js", "React.js", "Tailwind CSS", "HTML", "CSS"]}
        />
        <SkillsBox
          name={"Backend"}
          stack={["Node.js", "Express.js", "Rest API", "FastAPI"]}
        />
        <SkillsBox
          name={"Machine Learning"}
          stack={["Supervised", "Unsupervised", "NLP"]}
        />
      </div>
    </section>
  );
};

export default Skills;

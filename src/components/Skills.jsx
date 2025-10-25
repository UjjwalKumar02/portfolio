import SkillsBox from "./SkillsBox";

const Skills = () => {
  return (
    <div id="skills" className="lg:w-[60%] w-[97%] mx-auto mt-20">
      <h1 className="text-2xl font-medium text-center">Technical Skills</h1>

      <div className="flex flex-wrap justify-between md:items-start items-center">
        <SkillsBox
          name={"Web Development"}
          heading1={"Frontend"}
          stack1={["Next.js", "React.js", "Tailwind CSS", "HTML", "CSS"]}
          heading2={"Backend"}
          stack2={["Node.js", "Express.js", "Rest API", "FastAPI"]}
          heading3={"Database"}
          stack3={["PostgreSQL", "MongoDB"]}
        />
        <SkillsBox
          name={"Machine Learning"}
          heading1={"Algorithms"}
          stack1={["Supervised", "Unsupervised", "NLP"]}
          heading2={"Tools"}
          stack2={["Scikit-learn", "Flask", "Streamlit"]}
        />
        <SkillsBox
          name={"Software"}
          heading1={"Languages"}
          stack1={["C++", "SQL"]}
          heading2={"Tools"}
          stack2={["Git", "Postman"]}
        />
      </div>
    </div>
  );
};

export default Skills;

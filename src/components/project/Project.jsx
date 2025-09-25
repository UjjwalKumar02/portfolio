import ProjectBox from './ProjectBox'
import img1 from "../../../public/resume-score.jpeg"
import img2 from "../../../public/circles2.png"

const Project = () => {
  return (
    <div className='px-4 pb-8 mt- flex flex-col gap-16'>
      <ProjectBox 
        name={"Circles"} 
        desc={"A community-based social platform to discover and interact with different communities."} 
        img={img2}  
        live={""}
        github={"https://github.com/UjjwalKumar02/Circles"}
      />
      <ProjectBox 
        name={"Resume score"} 
        desc={"A tool to evaluates resumes with given job description."} 
        img={img1} 
        live={""}
        github={"https://github.com/UjjwalKumar02/Resume-score"}
      />
    </div>
  )
}

export default Project
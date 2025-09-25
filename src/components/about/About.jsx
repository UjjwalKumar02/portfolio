
const About = () => {
  return (
    <div className='px-6 mt-2 space-y-5'>
      <p>
        {/* In 2003 i got born in a small town of bihar, India. */}
      </p>

      {/* <p className=''>
        I am currently in the final year of
        <span className='font-medium italic'> Bachelors of Technology </span> */}
        {/* in specialisation of */}
        {/* <span className='font-medium italic'> Electronics and Communication </span> */}
        {/* (Minor in
        <span className='font-medium italic'> AI & ML) </span> */}
        {/* from
        <span className='font-medium italic'> MAIT, Delhi.</span>
      </p> */}

      {/* <p className=''>
        I have strong interest in software technologies, particularly in
        <span className='font-medium italic'> web development </span>
        and
        <span className='font-medium italic'> machine learning.</span>
      </p> */}

      <p className='text-lg font-medium'>
        Technologies i familiar with :
      </p>

      <ul className='flex flex-wrap gap-2 list-disc list-inside'>
        <li className='font-medium '>Languages: </li>
        C++, Javascript/Typescript, Python, SQL
      </ul>
       <ul className='flex flex-wrap gap-2 list-disc list-inside'>
        <li className='font-medium '>Frontend: </li>
        Next.js, React.js, Tailwind, HTML, CSS
      </ul>
      <ul className='flex flex-wrap gap-2 list-disc list-inside'>
        <li className='font-medium '>Backend: </li>
        Node.js, Express.js, FastAPI, Rest API, Mongoose, Prisma
      </ul>
       <ul className='flex flex-wrap gap-2 list-disc list-inside'>
        <li className='font-medium '>Database: </li>
        MongoDB, PostgreSQL
      </ul>
       <ul className='flex flex-wrap gap-2 list-disc list-inside'>
        <li className='font-medium '>Machine Learning: </li>
        Supervised, Unsupervised, NLP, scikit-learn
      </ul>
    </div>
  )
}

export default About
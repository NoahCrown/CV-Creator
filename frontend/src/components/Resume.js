import {React, useContext} from 'react'
import Buttons from './Buttons'
import { FormDataContext } from '../context/ContextProvider'


const Resume = () => {

  
  const {formData} = useContext(FormDataContext)
  return (
    <>


    <div className='w-1/2 h-screen flex flex-col justify-start items-center  '>
    <div className='flex flex-col bg-white w-full p-5 rounded shadow-md mb-5'>
      <div>
        <h1 className='font-bold text-center text-3xl'>{formData.firstName} {formData.lastName}</h1>
        <p className='mb-2 text-center'><span>{formData.phoneNumber}</span> ● <a href={formData.githubLink}>{formData.githubLink}</a> ● <span>{formData.portfolioLink}</span></p>
      </div>

      <div>
        <h1 className='text-2x1 text-center font-bold text-2xl mt-2 mb-2'>Description</h1>
        <hr className=' mb-1 h-1 w-100 bg-black'/>
            <p>{formData.description}</p>
      </div>

      <div>
        <h1 className='text-center font-bold text-2xl mt-2 mb-2'>Experience</h1>
        <hr className=' mb-1 h-1 w-100 bg-black'/>
        <div>
            <h1 className='text-2xl font-semibold'>{formData.position}</h1>
            <h2>{formData.company}</h2>
            <h2>{formData.city}</h2>
            <p>{formData.jobFrom} - {formData.jobTo}</p>
            <p>{formData.jobDescription}</p>
        </div>
      </div>

      <div className='w-full'>
        <h1 className='text-center font-bold text-2xl mt-2 mb-2'>Education</h1>
        <hr className=' mb-1 h-1 w-100 bg-black'/>
        <div>
            <h1 className='text-2xl font-semibold'>{formData.universityName}</h1>
            <h2>{formData.educationCity}</h2>
            <h2>{formData.degree}</h2>
            <p>{formData.educFrom} - {formData.educTo}</p>
        </div>
      </div>
    </div>
    <Buttons/>


    </div>
    
    </>
  )
}

export default Resume

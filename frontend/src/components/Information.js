import {React, useContext} from 'react'
import { FormDataContext } from '../context/ContextProvider'

const Information = () => {
    const {handleInputChange, formData,handleLoadExample} = useContext(FormDataContext)
    
  return (
    <div className='flex flex-col justify-center items-center p-5 bg-slate-900 w-1/2 text-white rounded shadow-sm h-fittext-black  box-border'>
        <form className='flex flex-col justify-center items-center w-full box-border'>
            <p className='mb-2 text-2xl'>Personal Information</p>
            <input value={formData.firstName} onChange={handleInputChange}  className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='firstName' type='text' placeholder='First Name'/>
            <input  value={formData.lastName} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='lastName' type='text' placeholder='Last Name'/>
            <input  value={formData.title} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='title' type='text' placeholder='Title'/>
            <input  value={formData.address} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='address' type='text' placeholder='Address'/>
            <input  value={formData.phoneNumber} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='phoneNumber' type='text' placeholder='Phone number'/>
            <input  value={formData.email} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='email' type='text' placeholder='Email'/>
            <input  value={formData.description} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='description' type='text' placeholder='Description'/>

            <p className='mb-2 text-2xl'>Experience</p>
            <input value={formData.position} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='position' type='text' placeholder='Position'/>
            <input  value={formData.company} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='company' type='text' placeholder='Company'/>
            <input  value={formData.city} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='city' type='text' placeholder='City'/>
            <input  value={formData.jobFrom}  onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='jobFrom' type='text' placeholder='From'/>
            <input  value={formData.jobTo} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='jobTo' type='text' placeholder='To'/>
            <input  value={formData.jobDescription} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='jobDescription' type='text' placeholder='Job Description'/>

            <p className='mb-2 text-2xl'>Education</p>
            <input  value={formData.universityName} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='universityName' type='text' placeholder='University Name'/>
            <input  value={formData.educationCity} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='city' type='text' placeholder='City'/>
            <input  value={formData.degree} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='degree' type='text' placeholder='Degree'/>
            <input  value={formData.educFrom} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='educFrom' type='text' placeholder='From'/>
            <input  value={formData.educTo} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='educTo' type='text' placeholder='To'/>
            
            <p className='mb-2 text-2xl'>Links</p>
            <input  value={formData.githubLink} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='githubLink' type='text' placeholder='Github Link'/>
            <input  value={formData.portfolioLink} onChange={handleInputChange} className='text-black w-1/2 p-2 rounded shadow-md mb-4' name='portfolioLink' type='text' placeholder='Portfolio Link'/>
            
            

            
        </form>
    
    </div>
  )
}

export default Information
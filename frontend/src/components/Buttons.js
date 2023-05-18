import {React, useContext} from 'react'
import { FormDataContext } from '../context/ContextProvider'
import Resume from './Resume';
import ReactToPrint from 'react-to-print';

const Buttons = () => {
  const handlePrint = () => {
    window.print();
  };

  const {handleReset, handleLoadExample, componentRef} = useContext(FormDataContext)
  return (
    <div className='w-full flex text-white justify-around items-center gap-4'>
      <ReactToPrint trigger={() => {
        return <button className='bg-green-900 p-2 w-1/4 rounded shadow-md'>Generate PDF</button>

      }}
        content={() =>componentRef.current }
        documentTitle='Resume'
        pageStyle='print'
      />
      <button onClick={handleLoadExample} className='bg-yellow-900 p-2 w-1/4 rounded shadow-md'>Load Example</button>
      <button onClick={handleReset} className='bg-red-900 p-2 w-1/4 rounded shadow-md'>Reset</button>

    </div>
  )
}

export default Buttons
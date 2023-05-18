import { useContext, useRef } from "react";
import Buttons from "./components/Buttons";
import Information from "./components/Information";
import Resume from "./components/Resume";
import {ReactToPrint} from 'react-to-print'
import { FormDataContext } from "./context/ContextProvider";


function App() {
  const {componentRef} = useContext(FormDataContext)
  return (
    <>
      <h1 className="bg-slate-900 text-white text-center text-4xl pt-10 font-semibold">Harvard CV Creator</h1>
      <div className="App flex flex-wrap justify-between items-center p-5 bg-slate-900 w-full box-border h-full">
      <Information/>
      
      <Resume ref={componentRef}/>
      
      
      

    </div>
    </>
    
  );
}

export default App;

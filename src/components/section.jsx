import React, { useState } from 'react';
import SimpleInput from './SimpleInput';
import AdvInput from './AdvInput';


const Section=()=>{
    const [decInput,chngInput]=useState(true);
    const extendInput=()=>{
        chngInput(false);
    }
    const cancelInput=()=>{
        chngInput(true);
    }
    return(
        <>
        <div className='section'>
        <div className='inside-section'>
        {decInput?<SimpleInput onSelect={extendInput}/>:<AdvInput onSelect={cancelInput}/>}
        </div>
        </div>
        <footer className='footer text-center'>
            <h1>©️ All Right Reserved</h1>
        </footer>
        </>
    )
}
export default Section;
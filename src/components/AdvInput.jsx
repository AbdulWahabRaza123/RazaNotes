import React, { useState } from 'react';
import PlaceNote from './PlaceNote';
const AdvInput=(props)=>{
    const [note,chgNote]=useState([]);
    const [title,chgTitle]=useState('');
    const [detail,chgDetail]=useState('');
    const input1Data=(event)=>{
        chgTitle(event.target.value);
        console.log("This is title ",title);
    }
    const input2Data=(event)=>{
        chgDetail(event.target.value);
        console.log("This is detail ",detail);
    }
    const AddNote=()=>{
        console.log("These are total Elements ",note.length);
        chgNote([...note,[title,detail]]);
        chgTitle('');
        chgDetail('');
        console.log("This is note ",note[0]);
    }
    const getValue=(ArrayElem,id)=>{
        chgTitle(ArrayElem[0]);
        chgDetail(ArrayElem[1]);
        chgNote(
            (oldItems)=>{
                return oldItems.filter((arrElement,index)=>{
                    return index!==id;
                })
            }
        )

    }
    const showData=(id)=>{
        return (
        note.filter((ArrayElem,index)=>{
            return (
                index===id?getValue(ArrayElem,id):null
            )
        })
        
    )}
    return (
        <>
         <div className="place-border">
                <input className='title-input' type="text" onChange={input1Data} value={title} placeholder='title' name="title"/>
                <input className='note-input' type="text" onChange={input2Data} value={detail} placeholder='Take a note...' name="note"/>
                <div className='place-button'>
                <button onClick={props.onSelect} className="btn btn-danger left-button">DELETE ALL</button>
                <button onClick={AddNote} className="btn btn-success right-button">Add Note</button>
                </div>
        </div>
        <div className='place-of-note container-fluid'>
        {
            note.map((val,index)=>{
                console.log("Value is ",val);
                return(
                <PlaceNote key={index} id={index} name={val} onSelect={showData}/>
                )
            })
        }
        </div>
        
        </>

    )
}
export default AdvInput;

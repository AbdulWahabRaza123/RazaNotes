import React from 'react';
const PlaceNote=(props)=>{
return(
    <>
    <div className='place-of-inputs'>
    <input className='title-input' type="text" onClick={()=>{props.onSelect(props.id)}} value={props.name[0]} placeholder='title' name="title"/>
    <input className='note-input' onClick={()=>{props.onSelect(props.id)}} type="text" value={props.name[1]} placeholder='Take a note...' name="note"/>
    </div>
    </>
)
}
export default PlaceNote;
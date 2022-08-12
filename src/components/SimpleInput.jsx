import React from 'react';
const SimpleInput=(props)=>{
    return (
        <>
<div className='add-note d-flex justify-content-center'>
    
    <input onFocus={props.onSelect} className='form-control' type="text" placeholder='Take a Note' name="name"/>
    </div>
        </>
    )
}
export default SimpleInput;
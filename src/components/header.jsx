import React from 'react';
import logo from '../logo/logo.png'
const Header=()=>{
    return(
        <>
        <div className='place-logo'>
        <div className='logo'>
            <img className='img-responsive img-fluid' src={logo} alt="logo"/>
        </div>
        <div className='heading text-center d-flex justify-content-center'>
            <h1>Raza Notes</h1>
        </div>
        <hr/>
    </div>
    
        </>
    )
}
export default Header;
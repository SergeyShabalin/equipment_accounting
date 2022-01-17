import React, {Component} from 'react'
import '../styles/drawer.css'

import {NavLink} from 'react-router-dom'


const Drawer = ()=>{
    return(
        <div className='Drawer'>
    <li  >
        <NavLink
            to="/archive"
                    >
           Архив
        </NavLink>
    </li>
        </div>
)
}



export default Drawer
import React from 'react'
import Departments from "../components/department";


export const Department = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Отделы</h1>
               <h2>
                   {<Departments/>}
               </h2>

            </div>
        </div>
    )
}
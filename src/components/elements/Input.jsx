import React from 'react'

export const Input = ({type, value, name, onChange, label}) => {

    return (
        <div className="input-group input-group-sm mb-3">

            <div className="input-group-prepend">

            </div>
            <input className=" input form-control" placeholder={label}

                   type={type}
                   value={value}
                   name={name}
                   onChange={onChange}
                   aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-sm"/>
        </div>

    )
}


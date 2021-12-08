import React from 'react'

export const Input = (props)=> {

    return (
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">{props.label}</span>
            </div>
            <input type={props.type}
                                      value={props.value}
                   name = {props.name}
                   onChange={props.onChange}
                   className="form-control"
                   aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-sm"/>
        </div>

    )
}


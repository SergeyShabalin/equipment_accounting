import React from 'react'

export const Select = ({selectValue, onChange, name, value}) => {


    const options = selectValue.map(function (item) {
        return (
            <option key={item.id}  value={item.id}>{item.name}</option>
        )
    })
    return (

        <select value={value}
            name={name}
            onChange={onChange}
            className="form-select selectShadow"
            aria-label="Default select example">
            {options}
        </select>
    )
}

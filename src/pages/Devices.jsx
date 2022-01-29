import React from 'react'
import Device from '../components/Devices/Device'

export const Devices = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Оборудование</h1>
                {<Device/>}
            </div>
        </div>
    )
}
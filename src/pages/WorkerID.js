import React from 'react'
import {Worker} from "../components/workers/Worker";

export const WorkerID = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Ответственный отдела</h1>
                <h2>
                    { <Worker/>}
                </h2>
            </div>
        </div>
    )
}
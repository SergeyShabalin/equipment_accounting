import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {Navbar} from "./components/Navbar";

import {Archive} from "./pages/archive";
import {Department} from "./pages/department";
import {Devices} from "./pages/devices";
import {Registered} from "./pages/registered";
import {Workers} from "./pages/workers";
import {WorkerID} from "./pages/WorkerID";

function App() {
    return (

                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-0">

                        <Switch>
                            <Route path="/archive" component={Archive}/>
                            <Route path="/department" component={Department}/>
                            <Route path="/devices" component={Devices}/>
                            <Route path="/registered" component={Registered}/>
                            <Route path="/workers" component={Workers}/>
                            <Route path="/worker/id" component={WorkerID}/>
                        </Switch>
                    </div>
                </BrowserRouter>

    );
}

export default App;
import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import {Navbar} from "./components/Navbar";

import {Archive} from "./pages/Archive";
import {Department} from "./pages/Department";
import {Devices} from "./pages/Devices";
import {Registered} from "./pages/Registered";
import Workers from "./pages/Workers";
import {WorkerID} from "./pages/WorkerID";
import {Login} from "./pages/Login"
import {Registration} from "./pages/Registration"

import {checkAuth, logins} from "./store/actions/Auth";
import {useDispatch, useSelector} from "react-redux";

import {loadingCheck} from "./store/actions/AuthActionCreator";


function App() {


    const isAuth = useSelector((state) => state.AuthReducer.isAuth)
    const isLoading = useSelector((state) => state.AuthReducer.isLoadind)


    const dispatch = useDispatch()

    useEffect(() => {
     if (localStorage.getItem('token')) {
            dispatch(checkAuth())
       }     else {
         dispatch(loadingCheck())
     }
    }, [])



if (isLoading){
    return  <div>loading...</div>
}
    return (
        <BrowserRouter>

            {isAuth ?
                <>
                        <Navbar/>
                        <div className="container pt-0" style={{margin:0}}>
                        <Switch>
                        <Route path="/devices" component={Devices}/>
                        <Route path="/archive" component={Archive}/>
                        <Route path="/department" component={Department}/>
                        <Route path="/registered" component={Registered}/>
                        <Route path="/workers" component={Workers}/>
                        <Route path="/worker/:id" component={WorkerID}/>
                        <Route path="*">
                        <Redirect to="/devices"/>
                        </Route>
                        </Switch>
                        </div>

                </>
                :
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="*">
                        <Redirect to="/login"/>
                    </Route>
                </Switch>
            }

        </BrowserRouter>

    );
}

export default App;
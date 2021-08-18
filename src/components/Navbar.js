import React,{useEffect,useState}from 'react'

import { useHistory } from 'react-router-dom'

import firebase from "../firebase"

function Navbar(props) {

    const history = useHistory();

    const noUser = () => {
        return (
            <div className="nouser">
                <button className="btn signup" onClick={() => history.push("/SignUp")}>Sign up</button>
                <button className="btn signin" onClick={() => history.push("/SignIn")}>Sign in</button>
            </div>
        )
    }

    const User = () => {
        console.log(props.user);
        return (
            <div className="user">
                <span>
                {props.user.email}
                </span>
                <div className="logout">
                <button onClick={() => {firebase.auth().signOut(); history.push('/');}}>Logout</button>
                </div>
            </div>
        )
    };

    return (
        <div className="navbar">
            <ul>
                <li>
                    Dashboard
                </li>
                <li>
                    Courses
                </li>
            </ul>
            <h1>
                Logo
            </h1>
            <div className="Auth">
                <div className="">
                    {props.user === null? noUser() : User()}
                </div>
            </div>
        </div>
    )
}
export default Navbar

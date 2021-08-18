import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import firebase from "./firebase";

function SignUp(props) {
    const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState('');
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        history.push("/");
        var user = userCredential.user;
        console.log(user);
        props.setUser(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        setErr(errorMessage);
        // ..
      });
  };

  const GoogleAuth = () => {
    console.log("GoogleAuth");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user);
      history.push("/");
      props.setUser(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      setErr(errorMessage);
    });
  };

  return (
    <div className="SignUp">
        <h1>Sign Up</h1>
        <p>{err == ''? 'Sign Up Below' : err}</p>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button>Sign Up</button>
      </form>
      <button className="google" onClick={() => GoogleAuth()}>Google</button>
    </div>
  );
}

export default SignUp;

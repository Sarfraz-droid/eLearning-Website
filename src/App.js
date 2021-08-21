import React,{useEffect,useState} from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Navbar from "./components/Navbar"

import Home from "./Home";
import CourseSection from "./CourseSection";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import BrowseCourses from "./BrowseCourses";

import firebase from "./firebase";

function App() {

  const [user,setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    console.log(user);
  });

  return (
    <div className="App">
          <BrowserRouter>
            <Switch>
                <Route path="/CourseSection">
                  <CourseSection />
                </Route>
                <Route path="/courses">
                  
                </Route>
                <Route path="/SignUp">
                  <SignUp user={user} setUser={setUser}/>
                </Route>
                <Route path="/SignIn">
                  <SignIn user={user} setUser={setUser}/>
                </Route>
                <Route path="/browse-courses">
                <Navbar user={user} setUser={setUser} />
                  <BrowseCourses user={user}/>
                </Route>
                <Route path="/course/:id">
                  <CourseSection user={user}/>
                </Route>
                <Route path="/">
                  <Navbar user={user} setUser={setUser} />
                  <Home user={user} setUser={setUser} />
                </Route>

            </Switch>
          </BrowserRouter>

    </div>
  );
}

export default App;

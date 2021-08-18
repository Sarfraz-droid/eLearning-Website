import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Navbar from "./components/Navbar"

import Home from "./Home";
import CourseSection from "./CourseSection";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Switch>
                <Route path="/CourseSection">
                  <CourseSection />
                </Route>
                <Route path="/">
                  <Navbar />
                  <Home />
                </Route>

            </Switch>
          </BrowserRouter>

    </div>
  );
}

export default App;

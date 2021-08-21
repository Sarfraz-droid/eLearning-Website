import React, { useState, useEffect } from "react";
import firebase from "./firebase";

import CourseCard from "./components/CourseCard";
import "./scss/Home.scss";

function Home(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    console.log(props);
    if(props.user !== null)
    {
      db.collection(props.user.uid).onSnapshot((snapshot) => {
        const courses = [];
        snapshot.forEach((doc) => {
          courses.push({ ...doc.data(), id: doc.id });
        });
        setCourses(courses);
        console.log(courses);
      });
    }else
    {
      setCourses([]);
    }
  }, [props.user]);

  return (
    <div>
      <div className="courses">
        <h1>My Courses</h1>
        <div className="courses-cards">
            {courses.map((course) => {
                return (
                    <CourseCard course={course} />
                )
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;

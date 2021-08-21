import React,{useState,useEffect} from 'react'

import Card from "./components/BrowseCourses/Card"
import CourseList from "./json/browseCourses.json"
function BrowseCourses(props) {

    return (
        <div className="browse-courses">
            <h1 className="heading">Browse Courses</h1>
            {props.user===null ? <span>You have not logged in</span> : <span>Logged in</span>}
            <div className="container">
            {CourseList.map((course, index) => {
                return (
                    <Card data={course} user={props.user}/>
                    );
            })}
            </div>
        </div>
    )
}

export default BrowseCourses

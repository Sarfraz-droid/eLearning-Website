import React from 'react'
import { useHistory } from 'react-router-dom';

import html from "../images/html-5.png"

function CourseCard(props) {
    const history = useHistory();
    return (
        <div className="course-card">
            <img src={html}/>
            <h2>{props.heading}</h2>
            <button onClick={() => history.push("/CourseSection")}>
                Resume
            </button>
        </div>
    )
}

export default CourseCard

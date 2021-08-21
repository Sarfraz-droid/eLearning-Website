import React from 'react'
import { useHistory } from 'react-router-dom';


function CourseCard(props) {
    const history = useHistory();
    return (
        <div className="course-card">
            <img src={props.course.image}/>
            <h2>{props.course.name}</h2>
            <button onClick={() => history.push("/course/" + props.course.link)}>
                Resume
            </button>
        </div>
    )
}

export default CourseCard

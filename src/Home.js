import React from 'react'
import CourseCard from "./components/CourseCard"

import "./scss/Home.scss"

function Home() {
    return (
        <div>

            <div className="courses">
                <h1>My Courses</h1>
                <div className="courses-cards">
                <CourseCard heading="HTML/CSS" />
                </div>
            </div>
        </div>
    )
}

export default Home

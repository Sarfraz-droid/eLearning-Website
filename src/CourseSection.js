import React, { useState,useEffect } from "react";
import {useHistory} from "react-router-dom";

import ReactPlayer from "react-player";


import CourseList from "./components/CourseSection/CourseList"



function CourseSection() {

  const history = useHistory();

  const courseData = [
    {
      id: "1",
      name: "Introduction to JavaScript",
      description:
        "JavaScript is a programming language that is used to build web applications. This course will introduce you to the basics of JavaScript.",
      url: "https://www.youtube.com/watch?v=Ia0FSogTRaw",
      completed: false,
    },
    {
      id: "2",
      name: "JavaScript for Web Developers",
      description:
        "JavaScript is a programming language that is used to build web applications. This course will introduce you to the basics of JavaScript.",
      url: "https://www.youtube.com/watch?v=ResWVWI333o",
      completed: false,
    },
  ];

  const [Courseinfo, setCourseinfo] = useState(courseData);

  const [url, setUrl] = useState({
    id: 0,
    url: Courseinfo[0].url,
  });


  return (
    <div className="course">
      <div className="ExitClass">
        <button onClick={() => history.push("/")}>
          Exit Class
        </button>
      </div>
      <div className="course-section">
        <div className="course-left">
          {/* <ul>
            {Courseinfo.map((courseData, i) => 
            {
                console.log(courseData);
                return(
                <li onClick={() => setUrl({id: i,url: courseData.url})} style={{
                    color: courseData.completed? "green": null,
                }}>
                        {courseData.name}
                </li>);

            })}
          </ul> */}
          <CourseList Courseinfo = {Courseinfo} setUrl={setUrl} Url={url} />
        </div>
        <div className="course-content">
          {url !== "" ? <ReactPlayer light width="1000px" height="562.50px" playing={true} controls={true} url={url.url} onStart={() => { courseData[url.id].completed = true
            setCourseinfo(courseData) 
            }}/> : null}
        </div>
      </div>
    </div>
  ); 
}

export default CourseSection;

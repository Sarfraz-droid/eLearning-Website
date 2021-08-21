import React, { useState,useEffect } from "react";
import {useHistory, useParams} from "react-router-dom";
import firebase from "./firebase";
import ReactPlayer from "react-player";


import CourseList from "./components/CourseSection/CourseList"


function CourseSection(props) {
  const id = useParams();
  console.log(id);
  const [Course, setCourse] = useState({});
  const [url, setUrl] = useState({});


  const fetchItems = () => {
    const db = firebase.firestore();

    db.collection(props.user.uid).doc(id.id).get().then((doc) => {
      setCourse(doc.data());
      console.log(Course);
      console.log(doc.data());
      setUrl({
        id: 0,
        url: doc.data().course[0].url,
      })
    })
  };


  useEffect(() =>{
    if(props.user != undefined)
    {
      console.log(props.user.uid + " " + id.id);
      fetchItems();
    }
      
    console.log("Course")
  },[props.user]);
  
  const history = useHistory();




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
          {Course.course !== undefined? <CourseList course = {Course.course} setUrl={setUrl} Url={url} /> : null}
        </div>
        <div className="course-content">
          {url !== "" ? <ReactPlayer light width="1000px" height="562.50px" playing={true} controls={true} url={url.url} /> : null}
        </div>
      </div>
    </div>
  ); 
}

export default CourseSection;

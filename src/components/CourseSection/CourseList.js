import React,{useState} from "react";

import Arrow from "../../images/Arrow.svg"

function CourseList(props) {

    const [Visible, setVisible] = useState(false);

    const styles = {
        window: {
            left: Visible? 0 : "-30%",
        },
        bg: {
            backgroundColor: Visible? null : "transparent"
        },
        button: {
            borderColor: Visible? "transparent" : null,
            transform: Visible? "scaleX(-1)" : null,
        }
    }

  return (
    <div>
      <div className="bg" style = {styles.bg}></div>
      <div className="course-list" style = {styles.window}>
        <button className="toggleBtn" style = {styles.button} onClick={() => setVisible(!Visible)}>
            <img src={Arrow}/>
        </button>
        <ul>
          {props.Courseinfo.map((courseData, i) => {
            console.log(courseData);
            return (
              <li
                onClick={() => props.setUrl({ id: i, url: courseData.url })}
                style={{
                  color: i === props.Url.id ? "#00A0FA" : null,

                }}
              >
                {courseData.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CourseList;

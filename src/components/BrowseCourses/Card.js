import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import firebase from "../../firebase";

function Card(props) {
  //   console.log(props);
  const history = useHistory();

  const [Curr, setCurr] = useState([]);

  useEffect(() => {
    if (props.user != null) {
      const db = firebase.firestore();
      db.collection(props.user.uid).onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          setCurr((info) => [...info, doc.data().link]);
        });
      });
    }
  }, [props.user]);
  console.log(Curr);

  const handleClick = async () => {
    if (props.user !== null) {
      const db = firebase.firestore();
      await fetch("./json/"+ props.data.link +".json")
        .then((response) => response.json())
        .then((data) => {
          db.collection(props.user.uid)
            .doc(props.data.link)
            .set({
              course: data,
              name: props.data.name,
              image: props.data.image,
              link: props.data.link,
            })
            .then(() => console.log("DATABASE UPLOADED"));
        });
      history.push("/");
    }
  };

  return (
    <div className="card">
      <img src={props.data.image} />
      <h2>{props.data.name}</h2>

      {Curr.includes(props.data.link) === true ? (
        <p>Already Enrolled</p>
      ) : (
        <button onClick={handleClick}>Enroll Now</button>
      )}
    </div>
  );
}

export default Card;

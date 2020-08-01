import React, { useState, useEffect } from "react";
import "./App.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const URL = "https://tea-api-vic-lo.herokuapp.com/";

  const fetchData = async () => {
    const res = await fetch(`${URL}tea`);
    const json = await res.json();
    setData(json);
  };

  const postComment = (e) => {
    const tea = e.target.id;
    const inputElem = e.target.parentNode.firstChild;
    if (inputElem.value.trim() === "") {
      alert("There's no comment to post");
    } else {
      inputElem.value = "";
      console.log(`Tea: ${tea} and comment: ${comment}`);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: comment }),
      };
      fetch(`${URL}tea/${tea}`, requestOptions)
        .then((response) => response.json())
        .then(fetchData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadData = (tea) => {
    return (
      <div key={tea._id} className="panel">
        <div className="name">{`#${tea.name}Tea`}</div>
        <img
          className="tea-img"
          src={`${URL}${tea.image}`}
          alt={`${URL}+${tea.image}`}
        />
        <div className="content">
          <p>{tea.description}</p>
          <p>{`Origin: ${tea.origin}`}</p>
          <p>{`Brew Time: ${tea.brew_time}min`}</p>
          <p>{`Temperature: ${tea.temperature}°C`}</p>
          <p>{"Comments: "}</p>
          <p>
            {tea.comments.map((comment) => (
              <p key={comment._id}>{`"${comment.text}"`}</p>
            ))}
          </p>
        </div>
        <div className="form">
          <input
            onChange={(e) => setComment(e.target.value)}
            className="comment"
            placeholder="Add a comment..."
          />
          <button
            id={tea.name}
            className="post"
            onClick={(e) => postComment(e)}
          >
            Post
          </button>
        </div>
      </div>
    );
  };

  return <div className="display-panel">{data.map(loadData)}</div>;
}

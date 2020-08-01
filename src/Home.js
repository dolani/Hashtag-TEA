import React, { useState, useEffect } from 'react';
import './App.css';

export default function Home() {
  const [data, setData] = useState([]);
  const URL = 'https://tea-api-vic-lo.herokuapp.com/'
  const fetchData = async () => {
    const res = await fetch(URL+ "tea");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="display-panel">
      {data.map(tea => (
        <div key={tea._id} className="panel">
          <div className="name">{`#${tea.name}Tea`}</div>
          <img className="tea-img"src = {`${URL}${tea.image}`} alt= {`${URL}+${tea.image}`}/>
          <div className="content">
            <p>{tea.description}</p>
            <p>{`Origin: ${tea.origin}`}</p>
            <p>{`Brew Time: ${tea.brew_time}min`}</p>
            <p>{`Temperature: ${tea.temperature}°C`}</p>
            <p>{"Comments: "}</p>
            <p>{tea.comments.map(comment => <p>{`"${comment.text}"`}</p>)}</p>
          </div>
          <input className = "comment" placeholder="Add a comment..."/>
        </div>
      ))}
      
    </div>
  );
}


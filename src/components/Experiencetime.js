import React from 'react'
import "./experince.scss"

const Experiencetime = ({data}) => {
  return (
    <div>
      {data.map((item) => {
      const descriptions = item.description.split("-").map(description => description.trim()).filter(description => description !== "")
      return (
      <li>
        <div class="content">
          <h3>{item.title}</h3>
          {item.name ? <h4>Work: {item.name}</h4> : <h4>University: {item.school}</h4> }
          <p>{item.date}</p>
          {descriptions.map((description, index) => (
            <p key={index}>- {description}</p>
          ))}
          {item.skills ? <p>Skills: {item.skills}</p>: <p></p>}
        </div>
      </li>
      );
    })}
    </div>
  )
}

export default Experiencetime
import React from 'react'
import "./experince.scss"

const Experiencetime = ({data}) => {
  return (
    <div>
      {data.map((item) => 
      <li>
        <div class="content">
          <h3>{item.title}</h3>
          <h4>{item.name}</h4>
          <p>{item.date}</p>
          <p>{item.description}</p>
          {item.skills ? <p>Skills: {item.skills}</p>: <p></p>}
        </div>
      </li>
    )}
    </div>
  )
}

export default Experiencetime
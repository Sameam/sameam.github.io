import React from 'react'
import "./index.css"


const Vcard = ({data}) => {
  return (
    <div className='row mx-5 px-5'>
      {data.map((item) => {
        return (
        <div className="card" style={{maxWidth: '540px'}}>
          <div className="row d-flex align-items-stretch">
            <div className="col-md-5">
              <img src={item.logo} class="img-fluid rounded-start" alt="Card cap" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p>{item.date}</p>
                <p className="card-text">{item.description}</p>
                {item.task1 ?<p className="card-text">Task 1: {item.task1}</p> : <p></p> }
                {item.task2 ?<p className="card-text">Task 2: {item.task2}</p> : <p></p> }
                <a href={item.url}>Click for More Information</a>
              </div>
            </div>
          </div>  
        </div>
        );
      })}
    </div>
  )
}

export default Vcard
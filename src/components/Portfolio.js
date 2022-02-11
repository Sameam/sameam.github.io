import React from 'react';
import Base from './Base'
import './index.css'
import Card from './Card';
import project from '../project'



const Portfolio = () => {

  return <Base>
    <div className='container-fluid mt-4'>
      <h1 className='text-center text-dark' style={{backgroundColor:"white"}}>Portfolio</h1>
    </div>
    <div className='container-fluid mt-5' style={{backgroundColor:"white"}}>
      <h1 className='text-center text-dark' style={{paddingBottom:"15px"}}>My Projects</h1>
      <div id="multi-item-example" className="carousel slide carousel-fade carousel-multi-item" data-ride="carousel">
        <div className="carousel-indicators">
          <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
          <li data-target="#multi-item-example" data-slide-to="1"></li>
        </div>
        <div className="carousel-inner carousel" role="listbox">
          <div className="carousel-item active">
            <Card className="card-top" data = {project}/>
          </div> 
        </div>  
      </div>   
    </div>
  </Base>;
};

export default Portfolio;

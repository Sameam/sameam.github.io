import React from 'react';
import Base from './Base';
import "../index.css"
import Timeline from './Timeline';
import timelineData from '../timeline';
import myself from "./pictures/myself.jpg";
import {Link} from "react-scroll";
import Resume from "./pictures/Nara_Eam 2.pdf";


const Home = () => {
  return <Base>
    <img className="center-block" src={myself} alt="Myself"/>
    <h1 className='text-center'>Nara Eam</h1>
    <h6 className='text-center'>Artifical/Machine Learning Engineer</h6>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <a href={Resume} target="_blank" rel="noopener noreferrer" download="Nara_Eam.pdf" style={{ marginRight: '20px' }}>
        <button className='btn btn-outline-info text-center'>Download Resume</button>
      </a>
      <Link to="footer" smooth={true}>
        <button className='btn btn-outline-info text-center'>Contact</button>
      </Link>
    </div>
    <div className='container-fluid' style={{
      backgroundColor:"white",color:"black",marginTop:"70px",maxWidth:"100%", paddingTop:"20px", paddingBottom:"20px"}}>
      <h2>Hey !</h2>
      <p>I'm Nara Eam, from Cambodia. </p>
      <p>I'm graduated from Univerity in Western Australia with Master in Information Technology. 
        Currently, I am working as an AI/ML Developer, where I leverage my skills to drive data-driven decision-making and innovation.</p>
      <p>My proficiency extends across several technical languages including Python, R, and C++, 
        and I have significant experience in front-end development using React.js. In my current role, 
        I have utilized these skills to build and implement innovative machine learning models 
        that have significantly improved operational efficiency and business processes.</p>
      <p>Feel free to get contact or take a look at my portfolio for further understanding</p>
    </div>
    <div className='container-fluid my-1' style={{backgroundColor:"white",color:"black"}}>
      <h2 className='text-center text-dark'>TimeLines</h2>
      <Timeline data={timelineData} />
    </div>
  </Base>;
};

export default Home;

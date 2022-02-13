import React from 'react';
import Base from './Base';
import "../index.css"
import Timeline from './Timeline';
import timelineData from '../timeline';
import myself from "./pictures/myself.jpg";
import {Link} from "react-scroll";
import Resume from "./pictures/Resume.pdf"


const Home = () => {
  return <Base>
    <img className="center-block" src={myself} alt="Myself"/>
    <h1 className='text-center'>Nara Eam</h1>
    <h6 className='text-center'>Student, Developer</h6>
    <div className='container-fluid' style={{backgroundColor:"white",color:"black",marginTop:"60px",maxWidth:"100%"}}>
      <h2>Hey !</h2>
      <p>I'm Nara Eam, from Cambodia. </p>
      <p>I'm graduated from Univerity in Western Australia. I love programming, reading books and listening to musics.</p>
      <p>Feel free to get contact or take a look at my portfolio for further understanding</p>
      <Link to="footer" smooth={true}>
        <button className='btn btn-outline-info text-center' style={{marginBottom:'10px'}}>Contact</button>
      </Link>
      <a href={Resume} target="_blank" rel="noopener noreferrer" download="nara_eam_resume.pdf">
        <button className='btn btn-outline-info text-center' style={{marginBottom:'10px',float:"right"}}>Download PDF</button>
      </a>
    </div>
    <div className='container-fluid my-1' style={{backgroundColor:"white",color:"black"}}>
      <h2 className='text-center text-dark'>TimeLines</h2>
      <Timeline data={timelineData} />
    </div>
  </Base>;
};

export default Home;

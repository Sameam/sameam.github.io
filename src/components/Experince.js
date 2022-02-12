import React from 'react';
import Base from './Base';
import "./experince.scss"
import Experiencetime from './Experiencetime';
import {work,education} from "./Experincedata"


const Experince = () => {
  return <Base>
    <section className="block-content t-block-teal l-block-spacing">
					<div className="l-contained row text-left">
						<header className="heading-group col-sm-5">
							<h2>Work Experinces</h2>
							<p class="subtitle">
								Work Background
							</p>
						</header>
            <header className="heading-group col-sm">
							<h2>Education</h2>
							<p class="subtitle">
								Study Background
							</p>
						</header>
						<ul className="timeline-list col-sm-5">
							<Experiencetime data={work}/>
						</ul>
						<ul class="timeline-list col-md-5">
							<Experiencetime data={education} />
						</ul>
					</div>
				</section>
				<div className='mt-1' style={{backgroundColor:"white"}}>
					<h2 className='text-dark text-center'>Professional skills</h2>
					
				</div>
  </Base>;
};

export default Experince;


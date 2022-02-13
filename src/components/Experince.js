import React from 'react';
import Base from './Base';
import "./experince.scss"
import Experiencetime from './Experiencetime';
import {work,education} from "./Experincedata"


const Experince = () => {
  return <Base>
    <section className="block-content t-block-teal l-block-spacing">
					<div className="l-contained row text-left mb-2 d-flex align-items-stretch">
						<header className="heading-group col-lg col-md-6">
							<h2>Experinces</h2>
							<p class="subtitle">
								Work Background
							</p>
							<ul className="timeline-list">
							<Experiencetime data={work}/>
						</ul>
						</header>
            <header className="heading-group col-lg col-md-6">
							<h2>Education</h2>
							<p class="subtitle">
								Study Background
							</p>
							<ul class="timeline-list">
							<Experiencetime data={education} />
						</ul>
						</header>
						
					</div>
				</section>
				<div className='mt-1' style={{backgroundColor:"white"}}>
					<h2 className='text-dark text-center'>Professional skills</h2>

				</div>
  </Base>;
};

export default Experince;


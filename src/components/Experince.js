import React from 'react';
import Base from './Base';
import "./experince.scss"
import Experiencetime from './Experiencetime';
import {work,education} from "./Experincedata"
import Vcard from './Vcard';
import volunteer from './Volunteer';


const Experince = () => {
  return <Base>
    <section className="block-content t-block-teal l-block-spacing">
			<div className="l-contained row text-left mb-2 d-flex align-items-stretch">
				<header className="heading-group col-lg col-md-6">
							<h2>Experiences</h2>
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
		<div className='mt-1 pb-2' style={{backgroundColor:"white"}}>
			<h2 className='text-dark text-center'>Volunteering</h2>
			<Vcard data={volunteer} />
			<h2 className='text-dark text-center'>Professional Skills</h2>
			<div className='container instruction text-dark'>
				<div className='row'>
					<div className='col-lg col-md-5'>
						<h2>Technical Skills</h2>
						<ul>
							<li>Microsoft office: Word, Excel, PowerPoint</li>
							<li>Container: Docker</li>
							<li>Statistical programs: Gretl, Eview, Business Intelligence: Tableau, Power BI</li>
							<li>Programming Languages: Python, Java, R, Swift, C++,</li>
							<li>Database: MySQL, SQLite, MongoDB</li>
							<li>Web Backend development - Django framework, Express framework, Flask framwork</li>
							<li>Web Frontend development - ES6, React.JS</li>
							<li>Machine Learning skill - using Numpy, Pandas, SkLearn, TensorFlow -ANN, CNN,Autoencoder</li>
							<li>Cloud Services : Amazon Web Service - EC2, S3, DynamoDB</li>
						</ul>
					</div>
					<div className='col-lg-4 col-md-6'>
						<h2>Languages</h2>
						<ul>
							<li>English</li>
							<li>Mandarin</li>
							<li>Khmer</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  </Base>;
};

export default Experince;


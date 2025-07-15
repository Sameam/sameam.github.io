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
		<h2 className='text-dark text-center'>Professional Skills</h2>
			<div className='container instruction text-dark'>
				<div className='row'>
					<div className='col-lg col-md-5'>
						<h2>Technical Skills</h2>
						<ul>
							<li><b>Programming Languages</b>: Python, C++, Rust, JavaScript, Java, R</li>
							<li><b>Machine Learning</b>: TensorFlow, Pytorch, Numpy, Pandas, SkLearn, HuggingFace (Transformers), CNN, RNN</li>
							<li><b>Data Management</b>: MySQL, SQLite, Postgres, MongoDB</li>
							<li><b>Web Development Frameworks</b>: FastAPI, Django, Express, </li>
							<li><b>Web Frontend development</b>: HTML, CSS, React</li>
							<li><b>DevOps</b>: Docker, Kubernetes</li>
							<li><b>Business Intelligence</b>: Tableau, Power BI</li>
							<li><b>Web scraping</b>: BeautifulSoup, Selenium</li>
							<li><b>Certificate</b>: AWS Certified Cloud Practitioner</li>
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
			<h2 className='text-dark text-center'>Extra-Curricular Activities</h2>
			<Vcard data={volunteer} />
		</div>
  </Base>;
};

export default Experince;


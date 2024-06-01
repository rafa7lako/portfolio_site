
import mainImage from "/src/assets/VID_20240526_141451.mp4.00_03_42_20.33Still001.png";
import Card from './components/Card'
import "./App.css";

import { motion } from 'framer-motion';
import {useRef, useEffect, useState} from 'react';


const cardData = [
	{
		heading: 'heading',
		paragraph: 'paragraph',
	},
	{
		heading: 'heading2',
		paragraph: 'paragraph2',
	},
	{
		heading: 'heading',
		paragraph: 'paragraph',
	},
	{
		heading: 'heading2',
		paragraph: 'paragraph2',
	},
];



function App() {
	return (
		<>
			<section className="main">
				<nav className="flex">
					<div className="container">
						<div className="navigation flex">
							<p>
								<a className="navigation__logo" href="#">
									Lakomski
								</a>
							</p>
							<div>
								<ul className="nav__second flex">
									<li>
										<a className="nav__second-item" href="#">
											portfolio
										</a>
									</li>
									<li>
										<a className="nav__second-item" href="#">
											blog
										</a>
									</li>
									<li>
										<a className="nav__second-item" href="#">
											contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>

				<div className="hero container">
					{/* <div className="hero__main flex"> */}
						<div className="hero__text">
							<p className="hero__paragraph-one">
								Nice to meet you! I’m Rafał.
							</p>
							<h1 className="hero__heading">let’s design some stories</h1>
							<p className="hero__paragraph-two">
								I’m a Web-Developer and Graphic Designer. View my projects on
								the right!
							</p>
							<div>
								<a className="hero__button" href="#">
									Contact
								</a>
							</div>
						</div>
						<motion.div className="hero__carousel">
							<motion.ul drag='x' dragConstraints={{ right:0}} className="hero__carousel-inner" >
							{cardData.map((card)=>{
								return <Card headingTitle={card.heading} paragraphText={card.paragraph} />;
							})}

							{/* <Card headingTitle= 'eee' paragraphText='rerewh' />; */}
					
						</motion.ul>
						</motion.div>
						
					{/* </div> */}
					<div className="hero__img">
						<img src={mainImage} alt="Rafał Łakomski" />
					</div>
				</div>
			</section>
		</>
	);
}

export default App;

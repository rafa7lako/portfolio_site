import React from "react";

import './Nav.css'

const Nav = () => {
	return (
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
	);
};

export default Nav;
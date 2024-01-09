// import { useState } from "react";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import AboutMe from "./sections/AboutMe";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-light-green">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Body />} />{" "}
						{/* Body component only for homepage */}
						<Route path="/about" element={<AboutMe />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/resume" element={<Resume />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

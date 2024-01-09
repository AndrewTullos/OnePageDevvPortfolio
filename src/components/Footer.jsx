import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="bg-light-green rounded-lg shadow m-4 dark:bg-dark-blue">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span className="text-sm text-mint-green sm:text-center dark:text-gray-400">
					© 2024{" "}
					<a href="https://flowbite.com/" className="hover:underline">
						DrewMadDecent™
					</a>
					. All Rights Reserved.
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-green-blue dark:text-off-white sm:mt-0">
					<li>
						<a href="/about" className="hover:underline me-4 md:me-6">
							About
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/andrewtullos/"
							className="hover:underline me-4 md:me-6"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="https://github.com/AndrewTullos/"
							className="hover:underline me-4 md:me-6"
						>
							GitHub
						</a>
					</li>
					<li>
						<a href="/contact" className="hover:underline">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;

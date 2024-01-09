const projects = [
	{
		id: 1,
		title: "NomNavigator",
		href: "https://github.com/AndrewTullos/NomNavigator",
		description:
			"A web application to explore and discover restaurants based on user preferences. Built with JavaScript, React, and other modern web technologies.",
	},
	{
		id: 2,
		title: "EmployeeManagementSystem",
		href: "https://github.com/AndrewTullos/EmployeeManagementSystem",
		description:
			"The Employee Management System (EMS) is a command-line application designed to help businesses manage their workforce details effortlessly. Developed using Node.js, this tool provides users with options to view details of departments, roles, and employees, and make updates such as adding new entries or modifying existing ones.",
	},
	{
		id: 3,
		title: "Weather Finder",
		href: "https://github.com/AndrewTullos/WeatherDash",
		description:
			"The Weather Finder is a user-friendly web application designed to provide current and five-day weather forecasts for cities around the globe.",
	},
];

export default function Example() {
	return (
		<div className="bg-light-green py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-dark-blue sm:text-4xl">
						Featured Projects
					</h2>
					<p className="mt-2 text-lg leading-8 text-dark-blue">
						Explore my projects and contributions on GitHub.
					</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{projects.map((project) => (
						<article key={project.id} className="flex max-w-xl flex-col">
							<div className="group relative">
								<h3 className="text-lg font-semibold leading-6 text-dark-blue group-hover:text-gray-600">
									<a
										href={project.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="absolute inset-0" />
										{project.title}
									</a>
								</h3>
								<p className="mt-3 text-sm leading-6 text-dark-blue line-clamp-3">
									{project.description}
								</p>
							</div>
							<p className="text-black"> Click above to view</p>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}

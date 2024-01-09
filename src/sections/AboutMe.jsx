const links = [
	{ name: "Contact Me", href: "/contact" },
	{ name: "Research", href: "https://gist.github.com/AndrewTullos" },
	{ name: "LinkedIn", href: "https://www.linkedin.com/in/andrewtullos" },
	{ name: "GitHub", href: "https://github.com/AndrewTullos/" },
];
const stats = [
	{ name: "Projects", value: "28+" },
	{ name: "Technologies", value: "15+" },
	{ name: "Hours per week", value: "40" },
	{ name: "Certificates Received", value: "1" },
];

export default function Example() {
	return (
		<div className="relative isolate overflow-hidden bg-light-green py-24 sm:py-32">
			<div className="relative isolate overflow-hidden bg-light-green px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
				{/* <img
					src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
					alt=""
					className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
				/> */}

				<div
					className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
					aria-hidden="true"
				>
					<div
						className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#05386B] to-[#379683] opacity-20"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div
					className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
					aria-hidden="true"
				>
					<div
						className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#05386B] to-[#379683] opacity-20"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-4xl font-bold tracking-tight text-dark-blue sm:text-6xl">
							About Me
						</h2>
						<p className="mt-6 text-lg leading-8 text-dark-blue">
							Andrew Tullos, an emerging developer from Austin, Texas, is in the
							final stages of his comprehensive bootcamp at the University of
							Texas Austin.
							<br />
							<br />
							Key Learnings and Achievements:
							<br />
							<br />
							Mastery of essential web technologies including HTML5, CSS3,
							JavaScript, jQuery, Bootstrap, and advanced frameworks such as
							Express.js, React.js, Node.js.
							<br />
							<br />
							In-depth understanding of Database Theory, with practical skills
							in MongoDB, MySQL, along with proficiency in Command Line and Git.
							<br />
							<br />
							Collaborative project work, engaging in complex tasks and hands-on
							programming exercises, in partnership with peers and under
							real-world conditions.
							<br />
							<br />
							Development of an extensive portfolio, comprising web
							applications, mobile app coding, and various challenging projects,
							displaying a well-rounded skill set.
							<br />
							<br />
							Receipt of a Certificate of Completion from UT Austin, signifying
							a notable accomplishment and enhancing career prospects.
							<br />
							<br />
							Access to an extensive range of career support services, including
							resume writing, social media profile optimization, technical
							interview preparation, portfolio reviews, soft skills training,
							and more, all designed to strategically position for professional
							success.
						</p>
					</div>
					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-dark-blue sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<a className="animate-bounce" key={link.name} href={link.href}>
									{link.name} <span aria-hidden="true">&rarr;</span>
								</a>
							))}
						</div>
						<dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
							{stats.map((stat) => (
								<div key={stat.name} className="flex flex-col-reverse">
									<dt className="text-base leading-7 text-green-blue">
										{stat.name}
									</dt>
									<dd className="text-2xl font-bold leading-9 tracking-tight text-dark-blue">
										{stat.value}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}

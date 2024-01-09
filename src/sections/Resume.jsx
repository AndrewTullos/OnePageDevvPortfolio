import { CloudArrowUpIcon, ServerIcon } from "@heroicons/react/20/solid";
import assets from "path/to/assets/assets";

export default function Example() {
	return (
		<div className="relative isolate overflow-hidden bg-light-green px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<svg
					className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-mint-green [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="e813992c-7d03-4cc4-a2bd-151760b470a0"
							width={200}
							height={200}
							x="50%"
							y={-1}
							patternUnits="userSpaceOnUse"
						>
							<path d="M100 200V.5M.5 .5H200" fill="none" />
						</pattern>
					</defs>
					<svg x="50%" y={-1} className="overflow-visible fill-off-white">
						<path
							d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
							strokeWidth={0}
						/>
					</svg>
					<rect
						width="100%"
						height="100%"
						strokeWidth={0}
						fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
					/>
				</svg>
			</div>
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="lg:max-w-lg">
							<p className="text-base font-semibold leading-7 text-dark-blue">
								Drew Tullos - Junior Developer
							</p>
							<h1 className="mt-2 text-3xl font-bold tracking-tight text-dark-blue sm:text-4xl">
								Resume
							</h1>
							<p className="mt-6 text-xl leading-8 text-dark-blue">
								Motivated individual with a proven track record in
								problem-solving and a customer-centric approach. With more than
								a decade of experience in customer service and exceptional time
								management abilities, I possess strong communication skills,
								both in collaborating with diverse teams and in building rapport
								with clients. Proficient in resolving complex issues and
								optimizing processes for efficiency, my previous positions have
								equipped me with a solid understanding of quality service and
								agile methodologies. I am excited to apply these valuable skills
								to excel in a call center environment, where I can contribute
								effectively to delivering outstanding customer experiences. I
								look forward to bringing my unique combination of leadership and
								technical skills to an internship opportunity in the call center
								industry.
							</p>
						</div>
					</div>
				</div>
				<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
					<img
						className="w-[48rem] max-w-none rounded-xl bg-dark-blue shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
						src={assets.meImage}
						alt=""
					/>
				</div>
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="max-w-xl text-base leading-7 text-dark-blue lg:max-w-lg">
							{/* <p>
								Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
								risus enim. Mattis mauris semper sed amet vitae sed turpis id.
								Id dolor praesent donec est. Odio penatibus risus viverra tellus
								varius sit neque erat velit. Faucibus commodo massa rhoncus,
								volutpat. Dignissim sed eget risus enim. Mattis mauris semper
								sed amet vitae sed turpis id.
							</p> */}
							<ul role="list" className="mt-8 space-y-8 text-dark-blue">
								<li className="flex gap-x-3">
									<CloudArrowUpIcon
										className="mt-1 h-5 w-5 flex-none text-dark-blue"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold text-dark-blue">
											Technical Skills
										</strong>{" "}
										<ul>
											<li>
												<strong className="bold">Programming</strong>
												<br />
												<li className="italic">JavaScript</li>
												<li className="italic">Java/C# (Introductory)</li>
											</li>
										</ul>
										<ul>
											<li>
												<strong className="bold">Web & Database</strong>
												<br />

												<li className="italic">HTML/CSS</li>
												<li className="italic">Tailwind</li>
												<li className="italic">Bootsrap</li>
												<li className="italic">MySQL</li>
												<li className="italic">MongoDB</li>
											</li>
										</ul>
										<ul>
											<li>
												<strong className="bold">Frameworks & Libraries</strong>
												<br />
												<li className="italic">JQuery</li>
												<li className="italic">React</li>
												<li className="italic">Angular</li>
											</li>
										</ul>
									</span>
								</li>
								{/* <li className="flex gap-x-3">
									<LockClosedIcon
										className="mt-1 h-5 w-5 flex-none text-dark-blue"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold text-dark-blue">
											SSL certificates.
										</strong>{" "}
										Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
										qui lorem cupidatat commodo.
									</span>
								</li> */}
								<li className="flex gap-x-3">
									<ServerIcon
										className="mt-1 h-5 w-5 flex-none text-dark-blue"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold text-dark-blue">
											EDUCATION{" "}
										</strong>{" "}
										<ul>
											<li>BELMONT UNIVERSITY</li>
										</ul>{" "}
										August 2013 – December 2015
										<br />
										Bachelors of Science: Business and Music Business Northwest
										<br />
										<br />
										<ul>
											<li>THE UNIVERSITY OF TEXAS - BOOTCAMP</li>
										</ul>{" "}
										July 2023 – January 2024
										<br />
										Coding bootcamp - Frontend & Backend
									</span>
								</li>
							</ul>
							{/* <p className="mt-8">
								Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
								odio id et. Id blandit molestie auctor fermentum dignissim.
								Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
								et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
								et ut. Ac lorem vel integer orci.
							</p> */}
							<h2 className="mt-16 text-2xl font-bold tracking-tight text-dark-blue">
								Additional{" "}
							</h2>
							<p className="mt-6">
								Data Analysis & Resolutions Data Visualization
								Mentorship/Cultivation of internal talent Relationship/Team
								Building Coaching & Motivating teams
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

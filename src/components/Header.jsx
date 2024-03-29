import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "About Me", href: "/about", current: false },
	{ name: "Portfolio", href: "/portfolio", current: false },
	{ name: "Contact", href: "/contact", current: false },
	{ name: "Resume", href: "/resume", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-dark-blue">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-off-white hover:bg-green-blue hover:text-off-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									{/* <textarea name="ICON" id="Icon" cols="30" rows="10">
										👾
									</textarea> */}
									{/* <img className="h-8 w-auto" src="" alt="Your Company" /> */}
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												to={item.href}
												key={item.name}
												className={classNames(
													item.current
														? "bg-dark-blue text-off-white"
														: "text-off-white hover:bg-green-blue hover:text-off-white",
													"rounded-md px-3 py-2 text-sm font-medium"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="relative rounded-full bg-dark-blue p-1 text-off-white hover:text-off-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark-blue"
								>
									<span className="absolute -inset-1.5" />
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
									<div className="flex flex-shrink-0 items-center">
										<Link to="/" className="flex flex-shrink-0 items-center">
											<img
												className="h-8 w-8 m-2 rounded-full"
												src="https://raw.githubusercontent.com/AndrewTullos/OnePageDevvPortfolio/main/src/assets/ME.jpg"
												alt="Headshot portrait of developer"
											/>
										</Link>
										{/* <Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										></Transition> */}
									</div>
								</div>
								{/* Profile dropdown */}
								{/* <Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="relative flex rounded-full bg-dark-blue text-sm focus:outline-none focus:ring-2 focus:ring-off-white focus:ring-offset-2 focus:ring-offset-dark-blue">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">Open user menu</span>
											<Link to="/">
												<img
													className="h-8 w-8 rounded-full"
													src="./src/assets/ME.jpg"
													alt="Headshot portait of developer"
												/>
											</Link>
										</Menu.Button>
									</div>
									
										<Menu.Items className="absolute right-0 -10 mt-2 w-48 origin-top-right rounded-md bg-off-white py-1 shadow-lg ring-1 ring-dark-blue ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-mint-green" : "",
															"block px-4 py-2 text-sm text-green-blue"
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-mint-green" : "",
															"block px-4 py-2 text-sm text-green-blue"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-mint-green" : "",
															"block px-4 py-2 text-sm text-green-blue"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu> */}
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-dark-blue text-off-white"
											: "text-off-white hover:bg-green-blue hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

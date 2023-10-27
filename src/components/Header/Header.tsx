import React, {useState} from "react";
import s from "./header.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { CgSun } from "react-icons/cg";
import { FaRegMoon } from "react-icons/fa";
interface HeaderProps {
	toggleDarkMode: () => void,
	isDarkMode: boolean,
	chooseNavigation: (nav: string) => void
}
function Header({ toggleDarkMode, isDarkMode, chooseNavigation }: HeaderProps) {
	const [isMenu, setIsMenu] = useState(false);

	const toggleMenu = () => {
		setIsMenu(!isMenu);
		if(isMenu) {
			document.getElementById('menu')?.classList.add('hidden');
		}else{
			document.getElementById('menu')?.classList.remove('hidden');
		}
	};

	return (
		<>
			<div className="h-20 w-full flex fixed md:relative justify-between items-center p-4 z-10 md:bg-gray-100 border-b-2 dark:border-gray-600 bg-gray-100 dark:bg-gray-800">
				<h2 className="text-xl">Search | Job</h2>
				<ul className="menu items-center gap-10 md:gap-20 text-lg flex">
					<li onClick={() => chooseNavigation('home')} className={`${s["menu-item-hover"]} hidden md:block after:bg-gray-800 dark:after:bg-gray-100 hover:cursor-pointer`}>
						<a href="#">Home</a></li>
					<li onClick={() => chooseNavigation('offers')} className={`${s["menu-item-hover"]} hidden md:block after:bg-gray-800 dark:after:bg-gray-100 hover:cursor-pointer`}>
						<a href="#">Offers</a></li>
					<li onClick={() => chooseNavigation('contact')} className={`${s["menu-item-hover"]} hidden md:block after:bg-gray-800 dark:after:bg-gray-100 hover:cursor-pointer`}>
						<a href="#">Contact</a></li>
					<li onClick={toggleDarkMode}
						className="hover:cursor-pointer pl-4 pr-4 pt-2 pb-2 rounded-lg bg-gray-800 dark:bg-gray-100 text-white hover:bg-gray-500 dark:hover:bg-gray-400 transition duration-300">
						{isDarkMode ? <CgSun color='black' size={24}/> : <FaRegMoon color='white' size={24}/>}
					</li>
					<li className="hover:cursor-pointer md:hidden" onClick={toggleMenu}>
						{isDarkMode ? <AiOutlineMenu color='white' size={30}/> :
							<AiOutlineMenu color='black' size={30}/>}
					</li>
				</ul>
			</div>
			<div id="menu" className="p-3 hidden md:hidden fixed w-screen">
				<div className="mr-3 w-fit p-3 mt-20 bg-gray-300 dark:bg-gray-950 rounded-xl right-0 fixed">
					<ul className="flex text-xl flex-col gap-6 pl-3 pr-3">
						<li className="transition-all duration-200 hover:cursor-pointer hover:border-gray-200 dark:hover:border-gray-800 border-2 border-gray-300 dark:border-gray-950 rounded-xl p-3">Projects</li>
						<li className="transition-all duration-200 hover:cursor-pointer hover:border-gray-200 dark:hover:border-gray-800 border-2 border-gray-300 dark:border-gray-950 rounded-xl p-3">Skills</li>
						<li className="transition-all duration-200 hover:cursor-pointer hover:border-gray-200 dark:hover:border-gray-800 border-2 border-gray-300 dark:border-gray-950 rounded-xl p-3">Contact</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Header;

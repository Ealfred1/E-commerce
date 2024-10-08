import { useState } from 'react'
import { MobileNav, Searchbar } from './'

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<>
			<MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
			<nav className="bg-transparent py-2 sticky top-0 z-[30] backdrop-blur-3xl">
				<div className="flex items-center justify-between py-2 mx-auto px-[1.8rem] md:px-[2rem]">
					<div className="text-white text-2xl font-semibold">
						<h1 className="text-primary">RAF<span className="text-grayDark">CART</span></h1>
					</div>

					<ul className="flex items-center gap-2 space-x-10 hidden lg:flex -translate-x-24">
						<li className="navlink"><a href="#home">Home <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
						<li className="navlink"><a href="#services">Shop <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
						<li className="navlink"><a href="#projects">Pages <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
						<li className="navlink"><a href="#projects">Contact</a></li>
					</ul>

					<ul className="flex items-center gap-2 space-x-10 hidden lg:flex">
						<li className="navlink"><a href="#home">Login/Register</a></li>
						<li className="navlink"><a href="#services">Language <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
						<li className="navlink"><a href="#projects">Currency <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
					</ul>
					
					<button className="menu-btn" onClick={toggleMenu}><span className={`pi ${openMenu ? 'pi-times' : 'pi-bars'} text-[1rem]`}></span></button>
				</div>
			</nav>
			<Searchbar />
			<div className="w-full flex items-center justify-center lg:justify-start lg:items-start px-[4rem] py-2">
				<div className="flex gap-3 items-center">
					<i className="pi pi-home text-primary"></i>
					<i className="pi pi-chevron-right text-xs"></i>
					<span className="text-sm translate-y-[1px]">Shop</span>
				</div>
			</div>
		</>
	)
}

export default Navbar
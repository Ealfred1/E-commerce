import { useState } from 'react'

const MobileNav = ({ isOpen, toggleMenu }) => {
	return (
		<>
			<div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
				<div className="w-[60vw] h-screen bg-secondary p-[2rem]">
					<div className="text-white text-2xl font-semibold">
						<h1 className="text-primary mb-16">RAF<span className="text-grayDark">CART</span></h1>
					</div>
					<ul className="flex flex-col gap-4 ml-2 space-y-4">
						<li className="navlink"><a href="#home">Home <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
						<li className="navlink"><a href="#services">Shop <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
						<li className="navlink"><a href="#projects">Pages <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
						<li className="navlink"><a href="#projects">Contact</a></li>
						<li className="navlink"><a href="#home">Login/Register</a></li>
						<li className="navlink"><a href="#services">Language <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
						<li className="navlink"><a href="#projects">Currency <i className="pi pi-chevron-down text-grayLight translate-y-0.5"></i></a></li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default MobileNav
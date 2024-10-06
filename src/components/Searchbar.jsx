import React from 'react'

const Searchbar = () => {
	return (
		<nav className="bg-primary py-2 sticky top-0 z-[30]">
			<div className="max-w-7xl flex items-center justify-between py-2 mx-auto px-4">
			<button className="bg-black text-secondary rounded-lg h-10 w-[15%] py-1"><i className="pi pi-bars"></i> All categories</button>

			<div className="w-[50%] border border-grayDark">
				
			</div>

			<div className="text-white text-2xl">
				<button className=""><i className="pi pi-heart"></i></button>
				<button className=""><i className="pi pi-cart-plus"></i></button>
				<button className=""><i className="pi pi-user"></i></button>
			</div>
			</div>
		</nav>
	)
}

export default Searchbar
import React from 'react'

const Searchbar = () => {
	return (
		<nav className="bg-primary py-2 sticky top-0 z-[30]">
			<div className="max-w-7xl flex items-center justify-between py-2 mx-auto px-4">
			<button className="bg-black text-secondary rounded-lg h-12 w-[15%] py-1"><i className="pi pi-bars"></i> All categories</button>

			<div className="w-[50%] border border-grayDark h-12 rounded-lg flex">
				<button className="w-[25%] bg-white border-r  border-r-grayDark text-sm flex items-center justify-center gap-3">All Category <i className="pi pi-chevron-down"></i></button>
				<input type="text" id="" className="w-[55%] border-l border-l-grayDark px-4 text-sm outline-none" placeholder="Search products..." />
				<button className="bg-black text-secondary rounded-r-lg outline-none w-[20%] text-sm">Search</button>
			</div>

			<div className="text-white text-2xl flex gap-5">
				<button className="hover:scale-[1.2] transition-all duration-200 flex items-center flex-col relative"><p><i className="pi pi-heart"></i></p>
					<p className="text-[11px] -mt-3">
						Wish List
					</p>
					<span className="top-dot">6</span>
				</button>
				<button className="hover:scale-[1.2] transition-all duration-200 flex items-center flex-col relative"><p><i className="pi pi-cart-plus"></i></p>
					<p className="text-[11px] -mt-3">
						 Cart
					</p>
					<span className="top-dot translate-x-2">8</span>
				</button>
				<button className="hover:scale-[1.2] transition-all duration-200 flex items-center flex-col"><p><i className="pi pi-user"></i></p>
					<p className="text-[11px] -mt-3">
						 Account
					</p>
				</button>
			</div>
			</div>
		</nav>
	)
}

export default Searchbar
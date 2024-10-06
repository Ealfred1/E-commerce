import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Navbar } from './'

const Layout = () => {
	return (
		<div>
			<Outlet />
		</div>
	)
}

export default Layout
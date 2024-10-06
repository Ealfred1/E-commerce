import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Navbar, MobileNav } from './'

import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MobileNav from './MobileNav'
import Logo from '../assets/arklogo.svg'

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const year = new Date().getFullYear()

  const location = useLocation()
  const isActive = (path) => {
      return location.pathname === path ? 'link' : 'text-white'
    }


  return (
    <div>
      <Navbar />
      <section className="mt-48">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;

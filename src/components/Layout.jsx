import { Navbar, MobileNav } from './'
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const year = new Date().getFullYear()

  const location = useLocation()
  const isActive = (path) => {
      return location.pathname === path ? 'link' : 'text-black'
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

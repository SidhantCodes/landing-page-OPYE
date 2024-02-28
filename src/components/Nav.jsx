"use client"
import Link from "next/link"
import Login from "./Login"
import { Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import styles from "../styles/Nav.module.css"
const Nav = () => {
  return (
    <Popover className={`${styles.navbar}`}>
      <h1 className={`${styles.navbarLogo}`}>LOGO</h1>
      <div className={`${styles.navItems}`}>
        <div className={`${styles.navItemsLi}`}>
          <Link href="home">Home</Link>
          <Link href="packages">Packages</Link>
          <Link href="bookonline">Book Online</Link>
          <Link href="contactus">Contact Us</Link>
        </div>
      </div>
      <div className={`${styles.popover}`}>
        <Popover.Button className={`${styles.popoverPanel}`}>
          {/* <span className={`${styles.srOnly}`}>Open Menu</span> */}
          <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
        </Popover.Button>
      </div>
      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opactiy-100 scale-100" leaveTo="opactiy-0 scale-95">
      <Popover.Panel
        focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition sm:hidden"
      >
        <div 
          className={`rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50`}
        >
          <div className={`px-5 pt-5 pb-6`}>
            <div className={`flex items-center justify-between`}>
              <h1 className={`font-bold`}>LOGO</h1>
              <div className={`-mr-2`}>
                <Popover.Button className={`inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}>
                  <span className={`sr-only`}>Close Menu</span>
                  <XMarkIcon className={`h-6 w-6`} aria-hidden="true"/>
                </Popover.Button>
              </div>
            </div>
            <div className={`mt-6`}>
              <nav className={`grid gap-y-8`}>
                <Link href="home" className={`focus:outline-none focus: ring-2 focus: ring-inset focus:ring-gray-500`}>Home</Link>
                <Link href="packages" className={`focus:outline-none focus: ring-2 focus: ring-inset focus:ring-gray-500`}>Packages</Link>
                <Link href="bookonline" className={`focus:outline-none focus: ring-2 focus: ring-inset focus:ring-gray-500`}>Book Online</Link>
                <Link href="contactus" className={`focus:outline-none focus: ring-2 focus: ring-inset focus:ring-gray-500`}>Contact Us</Link>
              </nav>
            </div>
            <div className={`mt-6 flex flex-col items-center gap-2`}>
              <Link href="login">
                <Login/>
              </Link>
            </div>
          </div>
        </div>

      </Popover.Panel>
      </Transition>
      <div className={`loginbtn hidden sm:block`}>
        <Link href="login">
          <Login/>
        </Link>
      </div>
    </Popover>
  )
}

export default Nav

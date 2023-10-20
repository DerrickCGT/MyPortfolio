'use client'

import React, { useState } from 'react';
import { Link } from "react-scroll"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Portfolios",
    page: "portfolio",
  },
]


const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <header 
      className={`
        w-full 
        mx-auto 
        px-4              
        fixed 
        top-0 
        z-50 
        border-b
        bg-white
        sm:px-20
        dark:border-stone-600
        dark:bg-stone-800
        
      `}>
      <div className='md:flex md:items-center justify-between'>
        <div>
          <div className='flex items-center justify-between py-1'>
            <Link to="home" offset={-100}>
              <div className='md:py-4 md:block cursor-pointer'>
                <h2 className='text-2xl font-bold hover:text-neutral-700'>
                  Derrick Choong
                </h2>
              </div>
            </Link>
            <div className='md:hidden'>
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={25}/> : <IoMdMenu size={25} />}
              </button>
            </div>
          </div>          
        </div>
        <div>
          <div className={`
            flex-1 
            justify-self-center 
            pb-3 
            mt-8 
            md:block 
            md:pb-0
            md:mt-0
            ${navbar ? "block" : "hidden"}
            `}
          >
            <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                  key={idx}
                  to={item.page}
                  className={
                    "block lg:inline-block cursor-pointer text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-400"
                  }
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
                )               
              })}
              {
                currentTheme === "dark" ? (
                  <button 
                    onClick={() => setTheme("light")} 
                    className='bg-slate-100 p-2 rounded-xl'>
                      <RiSunLine size={25} color="black"/>
                  </button>
                ) : (
                  <button 
                    onClick={() => setTheme("dark")}
                    className='bg-slate-100 p-2 rounded-xl'>
                    <RiMoonFill size={25} color="black"/>
                  </button>
                )
              }
            </div>
          </div>
        </div>
                
      </div>
    </header>   
  )
}

export default Navbar

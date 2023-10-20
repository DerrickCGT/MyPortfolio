'use client'

import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll"
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home">
			<div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left '>
				<div className='md:mt-2 md:w-1/2'>
					<Image src="/ProfilePhoto.jpg" alt='' width={330} height={330}
						className='rounded-full shadow-2xl'
					/>
				</div>
				<div className='md:mt-2 md:w-3/5'>
					<h1 className='font-bold text-4xl mt-6 md:text-6xl md:mt-0'>Hi, I&#39;m Derrick!</h1>
					<p className='text-lg mt-4 mb-6 md:text-2xl'>
						I am a 
						<span className='teal-hover'>
						{" "} Software Developer	{" "}
						</span>
						based in perth, WA. Driven by a passion to shape technology through innovation and entrepreneurial spirit.
					</p>
					<div className='flex justify-center items-center md:mr-16'>
						<Link
							to="portfolio"
							className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-lg shadow hover:bg-teal-700 cursor-pointer"
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-100}
							duration={800}
						>
							Portfolios
						</Link>		
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center text-center justify-center ">
				<Link
					to="about"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					<HiArrowDown size={35} className="animate-bounce cursor-pointer" />
				</Link>
			</div>
    </section>
  )
}

export default Hero
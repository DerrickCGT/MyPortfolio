import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'


const portfolios = [
  {
    name: "Airbnb-Clone Web Application",
    description:
      "A precise clone of Airbnb's platform, showcasing my adeptness in web development and meticulous attention to detail.",
    image: "/AirbnbClone_portfolio.png",
    github: "https://github.com/DerrickCGT/airbnb-dup",
    link: "https://clone-home-rent-project.vercel.app/",
  },
  {
    name: "Portfolio 2",
    description: "Portfolio 2 description",
    image: "/abc.png",
    github: "https://github.com/DerrickCGT/",
    link: "https://github.com/DerrickCGT/",
  },
  {
    name: "Web API",
    description:
      "Portfolio 2 description",
    image: "/Coming_Soon.jpg",
    github: "https://github.com/DerrickCGT/",
    link: "https://github.com/DerrickCGT/",
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="text-center font-bold text-4xl"> 
				Portfolio
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded animate-bounceX"></hr>
			</h1>
      <div className='flex flex-col space-y-28'>
        {portfolios.map((item, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className='flex flex-col animate-slideUpCubiBezier delay-300 md:flex-row md:space-x-12'>
                  <div className='mt-8 md:w-1/2'>
                    <Image
                      src={item.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className='rounded-xl shadow-xl hover:opacity-70'
                    />
                  </div>
                  <div className='mt-12 md:w-1/2'>
                    <h1 className='text-4xl font-bold mb-6'>
                      {item.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                        <Link href={item.github} target="_blank">
                          <AiOutlineGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                        <Link href={item.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                    </div>                  
                  </div>
                </div> 
              </SlideUp>            
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
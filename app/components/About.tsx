import React from 'react'
import Image from "next/image"

const skills = [
  "HTML", 
  "CSS", 
  "JavaScript", 
  "TypeScript", 
  "Python", 
  "React", 
  "Next.js", 
  "Tailwind CSS", 
  "C#", 
  ".NET", 
  "GitHub"
];


const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded animate-bounceX"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              A little bit about me...
            </h1>
            <p>
              I am a{" "}
              <span className="teal-hover">{" highly motivated"}</span> and
              <span className="teal-hover">{" dedicated"}</span> software developer
              based in Perth, WA. Holding a B.Eng in Chemical Engineering from Curtin University, I&#39;m currently advancing my tech skills with a Diploma in Information Technology at South Metro Tafe.
            </p>
            <br />
            <p>              
              My journey in the renewable sector as a Business Development and Project Manager has been nothing short of enlightening. It was during this time that I discovered my true passion for tech. 
              The world of digital innovation has captivated me, and I&#39;m wholeheartedly committed to transitioning my career to make a tangible impact in the tech landscape.              
              {/* Having accumulated extensive experience as a Business Development and Project Manager in the renewable sector, I&#39;ve discovered a profound passion for technology. 
              I am deeply committed to transitioning my career, with a goal to bring digital innovations to life in the tech landscape. */}
            </p>
            <br />
            <p>
              My technical interests span across 
              <span className='teal-hover'>{" web development"}</span>,
              <span className='teal-hover'>{" data science"}</span>,
              <span className='teal-hover'>{" machine learning"}</span>,
              <span className='teal-hover'>{" UI/UX"}</span>, and
              <span className='teal-hover'>{" DevOps"}</span>{". "}            
              Beyond the realm of work, I find joy in indulging in movies, gaming, travel, and trading. 
              However, what truly fascinates me is the boundless potential of the web3 space, where the future of technology is being shaped.
              {/* I&#39;m especially intrigued by the potential of the web3 space. */}
            </p>
            <br />
            <p>
            <span className="font-bold text-teal-600">Life is fleeting, and pursuing a passion is invaluable.</span> {" "} I&#39;m grateful for the courage to pivot into a tech and challenge myself. 
            With an insatiable passion for technology and a unwavering drive to push boundaries, I am always on the lookout for fresh challenges and exciting opportunities."              
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-600 hover:bg-gray-300 rounded font-semibold"
                  >
                    {item}
                  </p>
                )
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
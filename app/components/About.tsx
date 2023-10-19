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
              <span className="font-bold">{" result-driven"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" self-taught full stack"}</span> software developer
              based in Perth, WA. After years as a Business Development and Project Manager in renewables, I&#39;ve gathered vast expertise. But it&#39;s in technology where my true passion lies, and I&#39;m driven to bring digital ideas to life.
            </p>
            <br />
            <p>
            I earned my BChe in Chemical Engineering from Curtin University and am now pursuing a Diploma of Information Technology at South Metro Tafe. My plan is to delve deeper into Computer Science and secure in software development role.            
            </p>
            <br />
            <p>
            My technical interests span across web development, data science, machine learning, UI/UX, and DevOps. Outside of work, I enjoy movies, gaming, travel, and trading. I&#39;m especially intrigued by the potential of the web3 space.
            </p>
            <br />
            <p>
            <span className="font-bold text-teal-500">Life is fleeting, and pursuing a passion is invaluable.</span> {" "} I&#39;m grateful for the courage to pivot into a new industry and challenge myself. With an insatiable passion for technology and a constant drive to push boundaries, I am always on the lookout for fresh challenges and opportunities."
              
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
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
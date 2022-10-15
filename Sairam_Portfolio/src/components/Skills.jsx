import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import {SiCss3, SiAdobephotoshop, SiTailwindcss} from 'react-icons/si'
import {DiJavascript1, DiGit, DiLinux} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {FiFigma} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
const Skills = () => {
  const skills = [
    {
      logo: <AiFillHtml5 />, level: 'Advance', count: 90, title: 'HTML' 
    },
    {
      logo: <SiCss3 />, level: 'Medium', count: 75, title: 'CSS' 
    },
    {
      logo: <DiJavascript1 />, level: 'Medium', count: 65, title: 'JavaScript' 
    },
    {
      logo: <FaReact />, level: 'Medium', count: 70, title: 'React Js'
    },
    {
      logo: <FiFigma />, level: 'Advance', count: 90, title: 'Figma'
    },
    {
      logo: <SiAdobephotoshop />, level: 'Medium', count: 60, title: 'Photoshop'
    },
    {
      logo: <DiGit />, level: 'Advance', count: 90, title: 'Git'
    },
    {
      logo: <BsGithub />, level: 'Advance', count: 90, title: 'GitHub'
    },
    {
      logo: <SiTailwindcss />, level: 'Medium', count: 75, title: 'Tailwind CSS'
    },
    {
      logo: <DiLinux />, level: 'Medium', count: 75, title: 'Linux'
    },
  
  ]
  return (
    <section id='skills' className='py-10 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>My <span className='text-cyan-600'>Skills</span></h3>
        <p className='text-gray-400 mt-3 text-lg'>My knowledge</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {
            skills?.map((skill,i) =>(
              <div key={i} className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div style={{
              background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`
            }} 
            className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
                {skill.logo}
              </div>
            </div>
            <p className='text-xl mt-2'>{skill.title}</p>
            <p className='text-xl mt-3 '>{skill.level}</p>
          </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills

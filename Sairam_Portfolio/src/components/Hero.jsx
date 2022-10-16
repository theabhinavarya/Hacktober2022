import React from 'react'
import Typed from 'react-typed'
import hero from '../assests/images/hero.png'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
const Hero = () => {
  return (
    <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
        <div className='flex-1 flex item-center justify-center h-full'>
            <img src={hero} alt="image" className='md:w-8/12 h-full object-cover mt-24' />
        </div>
        <div className='flex-1'>
          <div className='md:text-left text-center mt-5'>
              <h1 className='md:text-6xl text-2xl md:leading-normal leading-10 text-white font-bold'>
                <span className='text-cyan-600 md:text-6xl text-5xl'>
                  Hello!
                  <br />
                </span>
                My Name is <span className='text-orange-300'>Sairam Kaushik</span>
              </h1>
              <div className='md:text-4xl text-lg md:leading-normal leading-5 mt-4 font-bold text-orange-500 '>
              <Typed
                strings={[
                    'Web Developer',
                    'Graphic Designer',
                    'Cyber Security Enthusiast']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
              </div>
              <a href='https://drive.google.com/file/d/1x1XTr52CcsFyAqKVas7ZfuORUg6t_ybR/view?usp=sharing' target={'_blank'}><button className='btn-primary mt-4'>Download Resume</button></a>
              <div className='mt-8 text-5xl flex items-center md:justify-start justify-center text-gray-600  cursor-pointer gap-8'>
                  <a href='https://github.com/sai-ram-kaushik' target={'_blank'}><AiFillGithub className='hover:text-white'/></a>
                  <a href='https://www.linkedin.com/in/sairam-kaushik-711a40210/'target={'_blank'}><span className='hover:text-white'><AiFillLinkedin /></span></a>
                  <a href='https://twitter.com/SairamKaushik'target={'_blank'}><span className='hover:text-white'><AiFillTwitterCircle /></span></a>
                  <a href='https://www.instagram.com/sairamkaushik/'target={'_blank'}><span className='hover:text-white'><AiFillInstagram/></span></a>
                  <a href='https://www.youtube.com/channel/UCXbU2mvUwhNnIAEQg2X7uPA'target={'_blank'}><span className='hover:text-white'><AiFillYoutube /></span></a>
              </div>
          </div>
        </div>

    </section>
  )
}

export default Hero
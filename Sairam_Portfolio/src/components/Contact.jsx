import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='py-19 px-3 text-white'>
        <div className='text-center mt-8'>
            <h3 className='text-4xl font-semibold'>Contact <span className='text-cyan-600'>Me</span></h3>
            <p className='text-gray-400 mt-3 text-lg'>Get in Touch</p>

            <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto'>
                <form className='flex flex-col flex-1 gap-5'>
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                    <textarea placeholder='Your Message' cols="30" rows="10"></textarea>
                    <button className='btn-primary w-fit  '>Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
'use client';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';




const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-600'>Hello, I `&apos;` m {''}</span>
                      <br/>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Kürşat',
                                1000, // wait 1s before replacing 'Mice' with 'Hamsters'
                                'Frontend Developer',
                                1000,
                                
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper='span'
                            speed={50}
                           
                            repeat={Infinity}
                        />


                    </h1>
                    <p className='text-[#ADB7BE] sm:text-lg lg:text-xl mb-6 text-base '>I `&apos;`m interested in Web development since second year of the university. I started to develop projects with Javascript and React. I developed myself in terms of research, self-motivation and acquiring different abilities. I `&apos;` m a team player, willing to be trained for growth. I `&apos;` m believe that everyday is a new start.</p>
                    <div>
                        <Link href='/contact' className='px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white w-full sm:w-fit'>Hire Me</Link>
                        <button className='px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3 w-full sm:w-fit'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image src='/images/heroProfile.png' alt='hero Image' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

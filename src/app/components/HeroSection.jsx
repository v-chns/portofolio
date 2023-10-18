"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0081A7] via-[#FED9B7] to-[#9C6DB0]">
                            Hello! I&lsquo;m Vanessa,
                        </span>
                        <br></br>
                        a {" "}
                        <TypeAnimation
                            sequence={[
                                'Student',
                                1000,
                                'Data Enthusiast',
                                1000,
                                'Web Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Welcome, stay as long as you want;)
                    </p>

                    {/* buttons */}
                    <div>
                        <a href="https://v-chns.github.io/portofolio/cv/Resume - Vanessa Chans.pdf"
                            download="Resume - Vanessa Chans.pdf"
                            target="_blank">
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#0081A7] via-[#FED9B7] to-[#9C6DB0] hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#1d1d1d] hover:bg-gradient-to-br from-[#0081A7] via-[#FED9B7] to-[#9C6DB0] hover:text-black hover:font-semibold rounded-full px-5 py-2">Download CV</span>
                            </button>
                        </a>
                    </div>

                </motion.div>

                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <Image
                        src="https://v-chns.github.io/portofolio/images/hero-image.png"
                        alt="3d-profile"
                        width={300}
                        height={300}
                        className="w-[250px] lg:w-[340px] relative"
                    />
                </motion.div>

            </div>
        </section>

    )
}

export default HeroSection
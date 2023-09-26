"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* text */}
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
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
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#0081A7] via-[#FED9B7] to-[#dd83e0] hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#1f1f1f] hover:bg-slate-900 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>

                </div>

                {/* image */}
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <Image
                        src="https://v-chns.github.io/portofolio/images/hero-image.png"
                        alt="3d-profile"
                        width={300}
                        height={300}
                        className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
                    />
                </div>

            </div>
        </section>

    )
}

export default HeroSection
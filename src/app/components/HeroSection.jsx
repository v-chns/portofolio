import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* text */}
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I&lsquo;m Vanessa</h1>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        Welcome, stay as long as you want;)
                    </p>
                    {/* buttons */}
                    <div>
                        <button className="px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-black">Download CV</button>
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
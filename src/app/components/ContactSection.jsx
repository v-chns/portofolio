import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
    return (
        <section className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative" id='contactme'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#753e8d] to-transparent rounded-full h-[25rem] w-[25rem] z--10 blur-2xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2">
            </div>
            {/* text */}
            <div className="pl-20 mt-4 md:mt-0 text-left flex flex-col h-full justify-center z-10">
                <h5 className="text-4xl font-bold text-white my-3">Get In Touch</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md text-base lg:text-lg">
                    {" "}
                    I&rsquo;m currently looking for new opportunities and experiences:)
                    Feel free to reach me here, whether you have a question or just want to say hi.
                    I&rsquo;ll try my best to get back to you!
                </p>

                <Link href="mailto:chansvanessa@gmail.com">
                    <button className="px-0.5 py-0.5 w-full sm:w-fit md:w-fit rounded-full bg-gradient-to-br from-[#0081A7] via-[#FED9B7] to-[#9C6DB0] hover:bg-slate-800 text-white mt-3 mb-6">
                        <span className="block bg-[#1d1d1d] text-white hover:text-u rounded-full px-10 py-2">
                            <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#0081A7] via-[#FED9B7] to-[#9C6DB0] font-mono font-bold">
                                Say Hello!
                            </span>
                        </span>
                    </button>
                </Link>

                <div className="socials flex flex-row gap-4 justify-center sm:justify-start md:justify-start sm:ml-1">
                    <Link href="https://github.com/v-chns" target="_blank">
                        <Image src="/images/github-icon.svg" width={45} height={45} alt='Github Icon' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/vanessa-chans/" target="_blank">
                        <Image src="/images/linkedin-icon.svg" width={45} height={45} alt='LinkedIn Icon' />
                    </Link>
                    <Link href="https://www.instagram.com/vanessachns/" target="_blank">
                        <Image src="/images/insta-icon.svg" width={45} height={45} alt='Insta Icon' />
                    </Link>
                </div>
            </div>

            {/* image */}
            <div className="relative z-10">
                <Image src="https://v-chns.github.io/portofolio/images/about-image-2.png" width={500} height={500} />
            </div>
        </section>
    )
}

export default ContactSection
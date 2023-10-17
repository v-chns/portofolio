"use client";
import React, {useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
           <ul className="list-disc pl-2">
                <li><b>Database:</b> MySQL, MSSQL</li>
                <li><b>Data Analytics:</b> Python, R, Apache Spark, Hadoop, Tableau</li>
                <li><b>Website Development:</b> React, HTML, CSS, JavaScript</li>
                <li><b>UI/UX Design:</b> Figma, Axure</li>
           </ul> 
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
           <ul className="list-disc pl-2">
                <li><b>BINUS University</b> - Computer Science Major (2021-2025)</li>
                <li><b>SMA Athalia</b> - Science Major (2018-2021)</li>
           </ul> 
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
           <ul className="list-disc pl-2">
                <li>Part-time Software Laboratory Assistant (February 2023 - Present)</li>
                <li>Scholarship Mentor (February 2023 - Present)</li>
           </ul> 
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className="text-white pt-10" id='aboutme'>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            {/* image */}
            <Image src="https://v-chns.github.io/portofolio/images/about-image.png" width={700} height={700} className="" />

            {/* tabs */}
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg text-[#e0dbe7]">Hi! My name is <b>Vanessa Chans</b>, a third-year Computer Science student majoring in Database Technology. I&lsquo;m enthusiastic about data-driven solutions and web/app development. Currently open to exploring internship opportunities and eager to connect with individuals who share my excitement for technology and data.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    {/* Skills */}
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>

                    {/* Education */}
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>

                    {/* Experience */}
                    <TabButton
                        selectTab={() => handleTabChange("experience")}
                        active={tab === "experience"}
                    >
                        {" "}
                        Experience{" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection

"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "Portofolio Website\n",
        description: "Made using NextJs",
        image: "https://v-chns.github.io/portofolio/images/projects/project1.png",
        tag: ["All", "Web"],
        codelink: "https://github.com/v-chns/portofolio",
        previewlink: "https://v-chns.github.io/portofolio/"
    },
    {
        id: 2,
        title: "Customer Insights: Analyzing Coffee Shop Reviews Data",
        description: "Data pre-processing using Python, and an interactive dashboard made with Tableau.",
        image: "https://v-chns.github.io/portofolio/images/projects/project2.png",
        tag: ["All", "Data Analytics"],
        codelink: "https://github.com/v-chns/ristek-final-project",
        previewlink: "https://drive.google.com/file/d/1LKTBKG0HVSNOl46iwjLm1Qz2ysmrHQ53/view?usp=sharing"
    },
    {
        id: 3,
        title: "TECHNO 2022 Website\n",
        description: "Landing page for HIMTI BINUS' event to welcome freshmen. Made using Bootstrap.",
        image: "https://v-chns.github.io/portofolio/images/projects/project3.png",
        tag: ["All", "Web"],
        codelink: "https://github.com/v-chns/TECHNO-2022",
        previewlink: "https://fluffy-custard-ef38b3.netlify.app/"
    },
    {
        id: 4,
        title: "Diabetes Prediction and Visualization using Spark’s Random Forest Classification",
        description: "Made as a final project for Big Data Processing course (2023)",
        image: "https://v-chns.github.io/portofolio/images/projects/project4.png",
        tag: ["All", "Data Analytics"],
        codelink: "https://github.com/v-chns/diabetes-prediction-model",
        previewlink: "https://drive.google.com/file/d/14YgOer3i9JTkbuCRX53dxBipjf-cKClk/view?usp=sharing"
    },
    {
        id: 5,
        title: "ASAP - Assistance against Sexual Assault for Pedriatics-disability",
        description: "Mobile App Prototype, made as a solution to educate and help children with disabilities regarding sexual assault",
        image: "https://v-chns.github.io/portofolio/images/projects/project5.png",
        tag: ["All", "Prototype"],
        codelink: "https://www.canva.com/design/DAFpiNayDGw/o7pqtyLJHD1PXNmY1xngGA/view?utm_content=DAFpiNayDGw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
        previewlink: "httphttps://www.figma.com/proto/nPsHWgjrtTAMxJyGGPEZeA/Venn---HackHerThon?type=design&node-id=2-10&t=oHxUCOl6erKE5e0O-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A10&mode=designs://www.canva.com/link?target=https%3A%2F%2Fwww.figma.com%2Ffile%2FnPsHWgjrtTAMxJyGGPEZeA%2FVenn---HackHerThon%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D6GjnKHNK4mi8N1rh-1&design=DAFpiNayDGw&accessRole=owner&linkSource=document"
    },
    {
        id: 6,
        title: "BeeLive",
        description: "Made using Figma",
        image: "https://v-chns.github.io/portofolio/images/projects/project1.png",
        tag: ["All", "Prototype"],
        codelink: "/",
        previewlink: "/"
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filterProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects" className='pt-20'>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-5 md:mb-5">
                My Projects
            </h2>

            {/* filter */}
            <div className="text-white flex flex-row justify-center items-center gap-2 py-4 flex-wrap">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Prototype"
                    isSelected={tag === "Prototype"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Data Analytics"
                    isSelected={tag === "Data Analytics"}
                />
            </div>

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filterProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration: 0.5, delay: index*0.4}}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            codelink={project.codelink}
                            previewlink={project.previewlink}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection
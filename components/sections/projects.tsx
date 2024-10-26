import Image from "next/image"
import { projects } from "@/constants"

import { IoCheckmarkCircleOutline } from "react-icons/io5"
import { GoArrowUpRight } from "react-icons/go"

import SectionHeader from "@/components/section-header"
import Card from "@/components/card"

const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences!" />
                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    {projects.map((project, index) => (
                        <Card key={index} className="pb-0 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-indigo-400 to-sky-300 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.results.map((result, index) => (
                                            <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                                                <IoCheckmarkCircleOutline className="size-5 md:size-6" />
                                                <span>{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.link}>
                                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8">
                                            <span>Visit Live Site</span>
                                            <GoArrowUpRight className="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image src={project.image} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" alt={project.title} />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
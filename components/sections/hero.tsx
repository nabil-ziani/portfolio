import Image from "next/image";

import memojiImage from "@/assets/images/memoji-computer.png"
import grainImage from "@/assets/images/grain.jpg"
import { IoArrowDown } from "react-icons/io5";
import HeroOrbit from "../hero-orbit";
import { LuSparkle } from "react-icons/lu";

const HeroSection = () => {
    return (
        <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />

                <div className="size-[620px] hero-ring" />
                <div className="size-[820px] hero-ring" />
                <div className="size-[1020px] hero-ring" />
                <div className="size-[1220px] hero-ring" />

                <HeroOrbit size={800} rotation={-72}>
                    <LuSparkle fill="#818cf8" className="size-28 text-indigo-400 -top-10 -left-10" />
                </HeroOrbit>
                <HeroOrbit size={550} rotation={20}>
                    <LuSparkle fill="#818cf8" className="size-12 text-indigo-400 -top-10 -left-10" />
                </HeroOrbit>
                <HeroOrbit size={590} rotation={98}>
                    <LuSparkle fill="#818cf8" className="size-8 text-indigo-400 -top-10 -left-10" />
                </HeroOrbit>

                <HeroOrbit size={430} rotation={-14}>
                    <LuSparkle fill="rgb(129 140 248 / 0.2)" className="size-8 text-indigo-400/20 -top-10 -left-10" />
                </HeroOrbit>
                <HeroOrbit size={440} rotation={79}>
                    <LuSparkle fill="rgb(129 140 248 / 0.2)" className="size-5 text-indigo-400/20 -top-10 -left-10" />
                </HeroOrbit>
                <HeroOrbit size={530} rotation={178}>
                    <LuSparkle fill="rgb(129 140 248 / 0.2)" className="size-10 text-indigo-400/20 -top-10 -left-10" />
                </HeroOrbit>
                <HeroOrbit size={710} rotation={144}>
                    <LuSparkle fill="rgb(129 140 248 / 0.2)" className="size-14 text-indigo-400/20 -top-10 -left-10" />
                </HeroOrbit>

                <HeroOrbit size={720} rotation={85}>
                    <div className="size-3 bg-indigo-400/20 rounded-full" />
                </HeroOrbit>
                <HeroOrbit size={520} rotation={-41}>
                    <div className="size-2 bg-indigo-400/20 rounded-full" />
                </HeroOrbit>
                <HeroOrbit size={650} rotation={-5}>
                    <div className="size-3 bg-indigo-400/20 rounded-full" />
                </HeroOrbit>
            </div>

            <div className="flex flex-col items-center">
                <Image src={memojiImage} className="size-[100px]" alt='Person peeking from behind laptop' />
                <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                    <div className="bg-green-500 size-2.5 rounded-full"></div>
                    <div className="text-sm font-medium">Available for new projects</div>
                </div>
            </div>
            <div className="max-w-lg mx-auto">
                <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                    Building Exceptional User Experiences
                </h1>
                <p className="mt-4 text-center text-white/60 md:text-lg">
                    I specialize in creating modern, responsive websites and web applications
                    that are both visually appealing and user-friendly. Let&apos;s discuss your next project!
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                    <span className="font-semibold">Explore My Work</span>
                    <IoArrowDown className="size-4" />
                </button>
                <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
                    <span>👋</span>
                    <span className="font-semibold">Let&apos;s Connect</span>
                </button>
            </div>
        </div>
    )
}

export default HeroSection
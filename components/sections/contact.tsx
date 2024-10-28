import { GoArrowUpRight } from "react-icons/go"
import grainImage from "@/assets/images/grain.jpg"

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container">
                <div className="bg-gradient-to-r from-indigo-400 to-sky-300 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0 overflow-hidden">
                    <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
                            <p className="text-sm md:text-base mt-2">
                                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
                            </p>
                        </div>
                        <div>
                            <a href="mailto:ziani_nabil@outlook.com">
                                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                                    <span className="font-semibold">
                                        Contact Me
                                    </span>
                                    <GoArrowUpRight className="size-4" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
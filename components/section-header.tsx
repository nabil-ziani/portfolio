
interface SectionHeaderProps {
    eyebrow: string
    title: string
    description: string
}

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-indigo-400 to-sky-300 text-transparent bg-clip-text">{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
            <p className="text-center md:text-lg max-w-md mx-auto text-white/60 mt-4">{description}</p>
        </>
    )
}

export default SectionHeader
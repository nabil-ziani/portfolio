import { LuSparkle } from "react-icons/lu"
import { twMerge } from "tailwind-merge"

interface CardHeaderProps {
    title: string
    description: string
    className?: string
}

const CardHeader = ({ title, description, className }: CardHeaderProps) => {
    return (
        <div className={twMerge("flex flex-col", className)}>
            <div className="inline-flex items-center gap-2">
                <LuSparkle fill="#818cf8" className="size-9 text-indigo-400" />
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">{description}</p>
        </div>
    )
}

export default CardHeader
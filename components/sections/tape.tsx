import { tape } from "@/constants"

import { LuSparkle } from "react-icons/lu";

const TapeSection = () => {
    return (
        <div className="py-16 lg:py-24 overflow-x-clip">
            <div className="bg-gradient-to-r from-indigo-400 to-sky-300 -rotate-3 -mx-1">
                <div className="flex justify-evenly [mask-image:linear-gradient(to_right,transparent,black_10%,black,90%,transparent)]">
                    <div className="flex flex-none gap-4 py-3">
                        {tape.map((word, index) => (
                            <div key={index}>
                                <div className="inline-flex gap-4 items-center">
                                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                                    <LuSparkle fill="#111827" className="size-6 text-[#111827] -rotate-12" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TapeSection
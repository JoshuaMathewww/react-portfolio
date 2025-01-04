import { RiReactjsLine } from "react-icons/ri"
import { RiJavascriptFill } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiLua } from "react-icons/si";
import { motion } from "framer-motion";
import { AniHighlight } from "../components/Hero.jsx";

const iconVariants = (duration) => ({
    inital: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})
const Technologies = () => {
    return (
        <div className="border-b border-neutral-800">
            <div className="flex justify-center">
                <AniHighlight>
                    <h1 className="my-20 text-center text-4xl">
                        Languages & Technologies
                    </h1>
                </AniHighlight>
            </div>
            <div className="flex justify-center">
                <AniHighlight>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.div
                            variants={iconVariants(2.5)}
                            inital="inital"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                            <RiReactjsLine className="text-7xl text-cyan-400" />
                        </motion.div>
                        <motion.div
                            variants={iconVariants(1.5)}
                            inital="inital"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                            <RiJavaFill className="text-7xl text-red-400" />
                        </motion.div>
                        <motion.div
                            variants={iconVariants(2)}
                            inital="inital"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                            <RiJavascriptFill className="text-7xl text-white-400" />
                        </motion.div>
                        <motion.div
                            variants={iconVariants(1.5)}
                            inital="inital"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                            <SiCplusplus className="text-7xl text-sky-600" />
                        </motion.div>
                        <motion.div
                            variants={iconVariants(3)}
                            inital="inital"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                            <FaPython className="text-7xl text-yellow-200" />
                        </motion.div>
                        <motion.div
                            variants={iconVariants(3.5)}
                            inital="inital"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                            <FaSwift className="text-7xl text-orange-400" />
                        </motion.div>
                        {/* <motion.div 
            variants={iconVariants(2)}
            inital="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-200"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            inital="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-blue-300"/>
            </motion.div> */}
                        <motion.div
                            variants={iconVariants(2.25)}
                            inital="inital"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                            <SiLua className="text-7xl text-blue-800" />
                        </motion.div>
                    </div>
                </AniHighlight>
            </div>
        </div>
    )
}

export default Technologies
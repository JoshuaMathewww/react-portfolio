import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/joshuaMathewProfile.jpeg"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


export function AniHighlight({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 100 },
                    visible: {opacity: 1, y: 0 },
              }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}> 
            {children}
            </motion.div>
            <motion.div
            
                variants={{
                    hidden: { right: 0 },
                    visible: { right: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to right, #252a33, #1d2128, #181b20)",
                    zIndex: 20,
                }}
            />
        </div>
    );
}

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <AniHighlight>
                            <h1 className="pb-16 text-6xl font tracking-tight lg;mt-16 lg;text-8xl">
                                Joshua Mathew
                            </h1>
                        </AniHighlight>
                        <AniHighlight>
                            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                                Full Stack Developer
                            </span>
                        </AniHighlight>
                        <AniHighlight>
                            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                                {HERO_CONTENT}
                            </p>
                        </AniHighlight>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <AniHighlight>
                            <img width="400" height="500" src={profilePic} alt="Joshua Mathew" />
                        </AniHighlight>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero


import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/joshuaMathewProfile.jpeg"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const PopupImage = ({ source, altText, ...rest }) => {
    return (
      <img
        src={source}
        alt={altText}
        {...rest}
        className="transition-all duration-500 hover:translate-x-[-7px] hover:translate-y-[-7px] hover:shadow-[12px_12px_4px_rgba(229,231,235,0.65)]"
        // active:translate-x-[0px] active:translate-y-[0px] active:shadow-none
        style={{ borderRadius: '20px' }}
      />
    );
  };

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
        <div ref={ref} style={{ position: "relative", width: "fit-content", height: "fit-content"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 100 },
                    visible: {opacity: 1, y: 0 },
              }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}> 
            {children}
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
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to right, #252a33, #1d2128, #181b20)",
                    zIndex: 20,
                }}
            />
            </motion.div>
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
                        {/* classNameabsolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full
                        <span className="  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"> */}
                                <PopupImage src={profilePic} alt="Joshua Mathew" width="400" height="500"> 
                                </PopupImage>
                        </AniHighlight>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero


import React from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import traveling from "../assets/traveling.jpeg"
import sports from "../assets/sports.jpeg"
import cooking from "../assets/cooking.jpeg"
import gaming from "../assets/gaming.jpeg"

const DURATION = 0.25
const STAGGER = 0.025

const About = () => {
  return (
    <div className="relative w-full" >
      <Cards />
    </div>
  );
};


export const Cards = () => {
  return (
    <motion.div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      <ParallaxImg start={-800} end={-800} className="self-start">
        <Card
          title="Traveling"
          image={traveling}
          description="After COVID, I really wanted to travel and explore new places. This year, I had the chance to visit San Francisco with friends and traveled to Texas and London with my family, creating many unforgettable memories together."
        />
      </ParallaxImg>
      <ParallaxImg start={800} end={800} className="self-end">
        <Card
          title="Sports"
          image={sports}
          description="I enjoy playing sports as a way to express myself and unwind. Badminton and ping pong are my favorites, as they let me stay active while having fun with friends. Whether it's a friendly match or a competitive game, I enjoy the energy and teamwork."
        />
      </ParallaxImg>
      <ParallaxImg start={-800} end={-800} className="self-start">
        <Card
          title="Cooking"
          image={cooking}
          description="My friends and I love cooking together whenever we find the time. We enjoy experimenting with new dishes, especially Asian. It's fun connecting over food and overall therapeutic cooking homemade meals together."
        />
      </ParallaxImg>
      <ParallaxImg start={800} end={800} className="self-end">
        <Card
          title="Gaming"
          image={gaming}
          description="Gaming has always been a big part of my life, as it has been an outlet to unwind while also bringing a competitive aspect. I first got into gaming through fast-paced FPS titles, but shifted towards strategic, single-player, story-driven games for a richer experience."
        />
      </ParallaxImg>
    </motion.div>
  )
}


const FlipLink = ({ children }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const Card = ({ title, image, description }) => {
  return (
    <motion.div
      className="relative group w-full aspect-[16/9] overflow-hidden rounded-lg cursor-pointer"
      whileHover={{ scale: 1.07 }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500 flex flex-col justify-end p-8">
        <h2 className="text-white text-3xl font-bold">
          <FlipLink>{title}</FlipLink>
        </h2>
        <p className="text-white text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

const ParallaxImg = ({ className, start, end, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start end`, `end start`],
  });
  const x = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [start, 0, 0, end]);
  const transform = useMotionTemplate`translateX(${x}px)`;

  return (
    <motion.div
      style={{ transform }}
      ref={ref}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  )
}


export default About;


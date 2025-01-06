import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";



const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-77%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};
const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[700px] w-[550px] overflow-hidden rounded-lg shadow-lg"
            style={{ fontFamily: '"Inter", sans-serif' }}>

            <div
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center text-left bg-black/50 backdrop-blur-md p-8 space-y-4">
                <p className="text-white text-4xl font-extrabold uppercase">
                    {card.title}
                </p>

                <p className="text-white text-2xl font-semibold">{card.role}</p>

                <p className="text-white text-lg font-light">{card.date}</p>

                <p className="text-white text-base font-light leading-relaxed">
                    {card.description}
                </p>
            </div>

            <div className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/50 transition-colors duration-300"></div>
        </div>
    );
};


const cards = [
    {
        title: "LEXHACK",
        role: "MARKETING DIRECTOR",
        date: "JANUARY-MAY 2022",
        description: "Organized a hackathon for middle and high schoolers with multiple workshops run by professional speakers. 240+ students registered for the 2-day hackathon. Raised over $7,500 in funding and sponsorship from MITRE, Wolfram Alpha, EA Education, echo3D, AoPS, PLE, and AICS.",
        id: 1,
    },
    {
        title: "AI SCHOLAR",
        role: "ASSOCIATE DEVELOPER",
        date: "AUGUST 2022",
        description: "Analyzed financial news sentiment, assessed NLP, and designed a model that evaluates news articles to deduce whether it has positive or negative connotations. I worked alongside three high school students and an undergraduate, who introduced ML with Python libraries.",
        id: 2,
    },
    {
        title: "CODE NINJAS",
        role: "EMPLOYEE",
        date: "FEBRUARY 2021 - SEPTEMBER 2024 ",
        description: "Served as a coding instructor to hundreds of elementary students, providing them with an introduction to coding using educational tools such as Scratch and JavaScript. Finding inventive ways to communicate difficult coding ideas in manageable chunks. Discovered the value of flexibility and patience when working with young students.",
        id: 3,
    },
    {
        title: "CS DEVELOPMENT",
        role: "Independent",
        date: "2021-2024",
        description: "IOS Developer- Created classic games using Swift and Xcode for the iPhone. Unity Game Development - Used C# and Godot to create games/apps and design workflows. Explored and developed a compatible user-friendly interface and level progression. Hackathons (High Tech Hacks 2.0, FreyHacks, NeoHack 2.0 Devpost) - Was responsible for constructing backend code for a website purposed to serve and promote general wellness. ",
        id: 4,
    },
    {
        title: "CE DEVELOPMENT",
        role: "Independent",
        date: "2021-2024",
        description: "Wheeled Robot (Independent & Boston Leadership Institute) - Arduino-based robot capable of autonomously navigating its environment using sensors such as photoresistor, ultrasonic sensor, and gyroscopes. Iota Division - An ankle attachment that alerts nearby guardians when elderly adult falls. Technology includes PCB Board, Serial Transceiver, Microcontroller, and more. ",
        id: 5,
    }, 
    {
        title: "HARVARD MEDICAL RESEARCH",
        role: "INTERN",
        date: "JULY-AUGUST 2023",
        description: "Studied approaches to tune encapsulation, release kinetics, and cytotoxicity to improve an intranasal drug delivery system; showcased results. Administered an independent project to see the encapsulation and release kinetics of a drug with varying levels of gellan in a nasal formulation. Co-authored a paper.",
        id: 6,
    },
    {
        title: "L-MIT BIOTECH",
        role: "Virtual Lab Participant",
        date: "OCTOBER-DECEMBER 2022",
        description: "Used virtual labs, online learning, and real-time conversations with employees of both Biogen and MIT to learn all about biotechnology and invention with a focus on Alzheimer’s and Digital Medicine. Created an innovative solution via apps to aid patients suffering from neurodegenerative diseases.",
        id: 7,
    },
];

export default HorizontalScrollCarousel
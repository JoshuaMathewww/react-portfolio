import logo from "../assets/joshuaMathewLogo.png";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

const OutlineOnButton = ({ children, color, ...rest }) => {
    const colorMap = {
        linkedin: "hover:text-blue-500 bg-blue-500",
        github: "hover:text-gray-500 bg-gray-500",
        instagram: "hover:text-pink-500 bg-pink-500",
        facebook: "hover:text-blue-600 bg-blue-600"
    };
    const selectedColor = colorMap[color]
    return (
        <button
            {...rest}
            className={`group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] ${selectedColor.split(" ")[0]}`}
        >
            <span>{children}</span>
            <span className={`absolute left-0 top-0 h-[2px] w-0 ${selectedColor.split(" ")[1]} transition-all duration-100 group-hover:w-full`} />
            <span className={`absolute right-0 top-0 h-0 w-[2px] ${selectedColor.split(" ")[1]} transition-all delay-100 duration-100 group-hover:h-full`} />
            <span className={`absolute bottom-0 right-0 h-[2px] w-0 ${selectedColor.split(" ")[1]} transition-all delay-200 duration-100 group-hover:w-full`} />
            <span className={`absolute bottom-0 left-0 h-0 w-[2px] ${selectedColor.split(" ")[1]} transition-all delay-300 duration-100 group-hover:h-full`} />
        </button>
    );
};


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/yourprofile">
                    <OutlineOnButton color="linkedin">
                        <FaLinkedin />
                    </OutlineOnButton>
                </a>
                <a href="https://github.com/JoshuaMathewww">
                    <OutlineOnButton color="github">
                        <FaGithub />
                    </OutlineOnButton>
                </a>
                <a href="https://www.instagram.com/joshuamathewww/">
                    <OutlineOnButton color="instagram">
                        <FaInstagram />
                    </OutlineOnButton>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100075200019841">
                    <OutlineOnButton color="facebook">
                        <FaFacebook />
                    </OutlineOnButton>
                </a>
            </div>
        </nav>
    );
};



export default Navbar
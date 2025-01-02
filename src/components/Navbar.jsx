import logo from "../assets/joshuaMathewLogo.png";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

const Navbar = () => {
  return ( 
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/joshua-mathew-ab246825a/">
                <FaLinkedin />
            </a>
            <a href="https://github.com/JoshuaMathewww">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/joshuamathewww/">
            <FaInstagram /> 
            </a>
            <a href="https://www.facebook.com/profile.php?id=100075200019841">
            <FaFacebook />
            </a>
        </div>
    </nav>
  )
};

export default Navbar
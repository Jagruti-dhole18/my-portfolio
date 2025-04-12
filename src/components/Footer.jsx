import { motion } from "framer-motion";
import { Link } from "react-scroll";

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

const Footer = () => {
  return (
    <footer className="text-cyan-50 mb-20 py-6 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <p className="text-xl font-semibold">Jagruti Dhole</p>
          <p className="mt-2 text-sm font-light">Frontend Developer</p>
          <p className="mt-4 text-sm font-light">© 2025 All Rights Reserved</p>
        </motion.div>

        <motion.div
          variants={footerVariants}
          initial="hidden"
          animate="visible"
          className="flex space-x-6 justify-end mt-6 lg:mt-0"
        >
          <Link to="hero" smooth={true} duration={1000}>
            <span className="hover:text-pink-500 transition duration-300 cursor-pointer">
              Home
            </span>
          </Link>
          <Link to="aboutme" smooth={true} duration={1000}>
            <span className="hover:text-pink-500 transition duration-300 cursor-pointer">
              About Me
            </span>
          </Link>
          <Link to="projects" smooth={true} duration={1000}>
            <span className="hover:text-pink-500 transition duration-300 cursor-pointer">
              Projects
            </span>
          </Link>
          <Link to="technologies" smooth={true} duration={1000}>
            <span className="hover:text-pink-500 transition duration-300 cursor-pointer">
              Technologies
            </span>
          </Link>
          <Link to="experience" smooth={true} duration={1000}>
            <span className="hover:text-pink-500 transition duration-300 cursor-pointer">
              Experience
            </span>
          </Link>
          <Link to="coding" smooth={true} duration={1000}>
            <span className="hover:text-pink-500 transition duration-300 cursor-pointer">
              Coding-Platform
            </span>
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            <span className="hover:text-pink-500 transition duration-300 cursor-pointer">
              Contact
            </span>
          </Link>
        </motion.div>
      </div>
      <p className=" text-pink-700">Made with &hearts;</p>
    </footer>
  );
};

export default Footer;

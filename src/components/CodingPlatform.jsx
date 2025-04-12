import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";
import resume from "../assets/resume.jpg";

const codingPlatforms = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Jagruti_Dhole/",
    icon: <SiLeetcode className="text-yellow-500 text-5xl" />,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/jagrutid9d33/",
    icon: <SiGeeksforgeeks className="text-green-600 text-5xl" />,
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/jagrutidhole18",
    icon: <FaHackerrank className="text-green-500 text-5xl" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Jagruti-dhole18",
    icon: <FaGithub className="text-white text-5xl" />,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/jagruti_18",
    icon: <SiCodechef className="text-purple-600 text-5xl" />,
  },
  {
    name: "Resume",
    url: resume,
    icon: (
      <span className="text-white text-lg font-medium border border-white rounded px-3 py-1 hover:bg-white hover:text-black transition">
        View Resume
      </span>
    ),
  },
];

const CodingPlatforms = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="coding">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-cyan-50"
      >
        Coding Profiles
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {codingPlatforms.map((platform, index) => (
          <motion.a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -30 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="transition-transform duration-300"
          >
            <div className="flex flex-col items-center space-y-2">
              {platform.icon}
              <p className="text-sm text-white">{platform.name}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default CodingPlatforms;

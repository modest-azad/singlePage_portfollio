import {
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";

export const Layout = () => {
  return (
    <main className="px-[5%]">
      <Hero />
      <Footer />
    </main>
  );
};

function Hero() {
  return (
    // hero section
    <section className="h-[90vh] grid place-content-center space-y-4">
      <div className="hero_content  space-y-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="tittle"
        >
          <p>
            Hello, My name is <span className="text-sky-600">Azad</span>
          </p>
        </motion.div>

        <div className=" overflow-hidden">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1, ease: "esanseInOut" }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <h1 className="text-8xl font-semibold">UI/UX Designer</h1>{" "}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay:2.6 }}
          className="tittle"
        >
          <h2 className="text-4xl lg:text-6xl">and Frontend Developer</h2>{" "}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay:3 }}
          className="tittle"
        >
        <p className="work_field">
          Mobile<span className="text-sky-600"> | </span>Desktop
        </p>
        </motion.div>
      </div>

      <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1, ease: "esanseInOut" }}
            transition={{ duration: 1.5, delay: 1 }}
          >
      <div className="icons flex  items-center space-x-4 text-2xl">
        <a className="hover:text-red-600" href="https://www.youtube.com/channel/UCR3l9YtaVJPu5LH15tXaFLQ" target="_blank">
          <FaYoutube />
        </a>

        <a
          className="hover:text-red-500"
          target="_blank"
          href="https://www.instagram.com/the_mdazad/"
        >
          <FaInstagram />
        </a>
        
        <a className="hover:text-blue-500" href="https://www.linkedin.com/in/modest-azad/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/modest-azad/" target="_blank">
          <FaGithub />
        </a>
      </div>
      </motion.div>
    </section>
  );
}

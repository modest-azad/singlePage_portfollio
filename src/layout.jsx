import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Footer } from "./components/Footer";

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
        <p className="tittle">
          Hello, My name is <span className="text-sky-600">Azad</span>
        </p>
        <h1 className="text-8xl font-semibold">
          UI/UX Designer
        </h1>
        <h2 className="text-4xl lg:text-6xl">and Frontend Developer</h2>
        <p className="work_field">
          Mobile<span className="text-sky-600"> | </span>Desktop
        </p>
      </div>

      <div className="icons flex  items-center space-x-4 text-2xl">
        <a className="hover:text-red-600" href="http://" target="_blank">
          <FaYoutube />
        </a>

        <a
          className="hover:text-red-500"
          target="_blank"
          href="https://www.instagram.com/the_mdazad/"
        >
          <FaInstagram />
        </a>
        <a className="hover:text-sky-500" href="http://" target="_blank">
          <FaTwitter />
        </a>
        <a className="hover:text-blue-500" href="http://" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="http://" target="_blank">
          <FaGithub />
        </a>
      </div>
      
    </section>
  );
}

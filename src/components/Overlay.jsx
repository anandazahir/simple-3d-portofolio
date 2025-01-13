import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Github, Linkedin, Instagram, Globe } from "lucide-react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-4 md:p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
      id={props.id}
    >
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-4 py-6 md:px-8 md:py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: false, // Auto-play the carousel
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          arrows: false, // Hide arrows on mobile
          dots: true, // Keep dots visible
        },
      },
    ],
  };

  return (
    <Scroll html>
      <div className="w-screen h-full overflow-y-auto">
        <Section opacity={opacityFirstSection} id="about">
          <Slider {...settings}>
            {/* Slide 1: Introduction */}
            <div>
              <h1 className="font-semibold font-serif text-xl md:text-2xl">
                Hello, I'm Nanda
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                Welcome to my beautiful portfolio
              </p>
              <p className="mt-3 text-sm md:text-base">
                I am a fresh graduate from South Tangerang, Indonesia. I am a
                Front-End Developer who prioritizes authentic work ethic. I have
                experience working on various projects using the following tech
                stack:
                <b className="underline ml-1  hover:text-red-700">Next.js,</b>
                <b className="underline ml-1 hover:text-red-700">React.js,</b>
                <b className="underline ml-1 hover:text-red-700">
                  Tailwind CSS,
                </b>
                <b className="underline ml-1 hover:text-gray-800">TypeScript</b>
              </p>
              <a
                href="/CV_Ananda Muhammad Zahir.pdf" // Replace with the actual path to your resume file
                download="Nanda_Resume.pdf" // Name of the downloaded file
                className="inline-block mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                📄 Download Resume
              </a>
              <p className="animate-bounce mt-4 md:mt-6">↓</p>
            </div>

            {/* Slide 2: Work Experience */}
            <div>
              <h1 className="font-semibold font-serif text-xl md:text-2xl">
                Work Experience
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                Here's a summary of my professional journey:
              </p>
              <ul className="mt-3 text-sm md:text-base">
                <li>
                  <b>Frontend Developer</b> at PT Garbantara Depo (Jun 2023 -
                  Aug 2024)
                </li>
                <li>
                  <b>Internship Network Field Engineer</b> at Jakarta Smart City
                  (Des 2022 - Feb 2023)
                </li>
              </ul>
              <p className="animate-bounce mt-4 md:mt-6">↓</p>
            </div>
          </Slider>
        </Section>
        <Section right opacity={opacitySecondSection} id="projects">
          <h1 className="font-semibold font-serif text-xl md:text-2xl">
            Here are my Projects 🔥
          </h1>
          <p className="text-gray-500 text-sm md:text-base">PS: hehehe</p>
          <div className="flex flex-col gap-5 mt-3">
            <a
              className="group text-sm md:text-base w-full cursor-pointer hover:bg-gray-500"
              href="https://simg-garbantara.com/login"
              target="_blank"
            >
              <b className="group-hover:text-white">SIMGD</b>
              <hr className="border-t border-gray-300 group-hover:border-white" />
            </a>

            <a
              className="group text-sm md:text-base w-full cursor-pointer hover:bg-gray-500"
              href="https://github.com/anandazahir/ZooPedia"
              target="_blank"
            >
              <b className="group-hover:text-white">ZooPedia</b>
              <hr className="border-t border-gray-300 group-hover:border-white" />
            </a>
            <a
              className="group text-sm md:text-base w-full cursor-pointer hover:bg-gray-500"
              href="https://template-portofolio-nanda.vercel.app/"
              target="_blank"
            >
              <b className="group-hover:text-white">Template Portofolio</b>
              <hr className="border-t border-gray-300 group-hover:border-white" />
            </a>
            <a
              className="group text-sm md:text-base w-full cursor-pointer hover:bg-gray-500"
              href="https://ui-nanda.vercel.app/"
              target="_blank"
            >
              <b className="group-hover:text-white">UI Nanda</b>
              <hr className="border-t border-gray-300 group-hover:border-white" />
            </a>
          </div>

          <p className="animate-bounce mt-4 md:mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection} id="contact">
          <h1 className="font-semibold font-serif text-xl md:text-2xl">
            Contact Me 📞
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            I'm so quick to respond to you.
          </p>
          <p className="mt-4 md:mt-6 p-2 md:p-3 bg-slate-200 rounded-lg text-sm md:text-base">
            📧{" "}
            <a href="mailto:anandazahir12@gmail.com">anandazahir12@gmail.com</a>
          </p>
          <div className="flex mt-3">
            <a
              href="https://github.com/anandazahir"
              target="_blank"
              className="text-black hover:bg-black/10 rounded-full p-2"
            >
              <Github></Github>
            </a>
            <a
              href="https://linkedin.com/in/anandazahir/"
              target="_blank"
              className="text-black hover:bg-black/10 rounded-full p-2"
            >
              <Linkedin></Linkedin>
            </a>
            <a
              href="https://Instagram.com/ananda.zahir"
              target="_blank"
              className="text-black hover:bg-black/10 rounded-full p-2"
            >
              <Instagram></Instagram>
            </a>
            <a
              href="https://portofolio-nandazahir.vercel.app"
              target="_blank"
              className="text-black hover:bg-black/10 rounded-full p-2"
            >
              <Globe></Globe>
            </a>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};

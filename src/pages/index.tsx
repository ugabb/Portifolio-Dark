import Head from "next/head";
import Link from "next/link";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// Components
import About from "components/About";
import Header from "components/Header";
import Hero from "components/Hero";
import Experiencie from "components/Experience";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ContactMe from "components/ContactMe";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
      <Head>
        <title>uGab Portifolio 😁</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section className="snap-center" id="about">
        <About />
      </section>

      <section className="snap-center" id="experience">
        <Experiencie />
      </section>

      <section className="snap-start" id="skills">
        <Skills />
      </section>

      <section className="snap-start" id="projects">
        <Projects />
      </section>
      {/* Contact Me */}
      <section className="snap-start" id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 rounded-full cursor-pointer opacity-25 hover:opacity-100 transition delay-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  );
}

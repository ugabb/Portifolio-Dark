import Head from "next/head";
import Link from "next/link";
// Components
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
// import Projects from "components/Projects";
import ContactMe from "@/components/ContactMe";

//motion
import { motion } from "framer-motion";
import Mouse from "@/components/Mouse";
import { usePathname } from "next/navigation";
import Timeline from "@/components/Vertical Time Line/Timeline";

export default function Home() {
  return (
    <div className="bg-[rgb(22,22,22)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#45c7e5]/80 scrollbar-thin">
      <Head>
        <title>uGab Portfolio  😁</title>
      </Head>

      <div className="hidden lg:block w-screen overflow-hidden">

        <Mouse />
      </div>

      <Header />

      <section id="hero" >
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section className="my-20" id="timeline">
        <Timeline />
      </section>

      <section id="skills">
        <Skills />
      </section>

      {/* <section className="snap-center" id="projects">
        <Projects />
      </section> */}

      {/* Contact Me */}
      <section id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <motion.footer
          initial={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          animate={{ y: -30 }}
          className="sticky bottom-5 cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 rounded-full cursor-pointer opacity-25 hover:opacity-100 hover:animate-bounce transition delay-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </div>
        </motion.footer>
      </Link>
    </div>
  );
}

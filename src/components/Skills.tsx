import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="lg:h-screen flex relative flex-col text-center md:text-left  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        <Skill title="Next" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" directionLeft={true} />
        <Skill title="React" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" directionLeft={true} />
        <Skill title="Angular" icon="https://www.alura.com.br/artigos/assets/novidades-angular-17/imagem1.gif" directionLeft={true} />
        <Skill title="Spring Boot" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" directionLeft={false} />
        <Skill title="NodeJS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" directionLeft={true} />
        <Skill title="Tailwindcss" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" directionLeft={false} />
        <Skill title="Saas" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" directionLeft={false} />
        <Skill title="HTML5" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" directionLeft={false} />
        <Skill title="Typescript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" directionLeft={true} />
        <Skill title="Javascript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" directionLeft={true} />
        <Skill title="CSS3" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" directionLeft={true} />
        <Skill title="Java" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" directionLeft={false} />

        <Skill title="MongoDB" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" directionLeft={true} />
        <Skill title="PostgreSQL" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" directionLeft={false} />
        <Skill title="Firebase" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" directionLeft={false} />


        <Skill title="Git" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" directionLeft={false} />
      </div>
    </motion.div>
  );
};

export default Skills;

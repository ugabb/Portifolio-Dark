import { IProject } from "./IProjects";

const projects: IProject[] = [
  {
    name: "Dev Spotlight",
    photo: "/dev-spotlight.png",
    description: "",
    technologies: [
      {
        name: "Next.js",
        imageUrl: "/nextjs-logo.png",
      },
      {
        name: "React",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Spring Boot 3",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Typescript",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "TailwindCSS",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "PostgresSQL",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    repo: "https://github.com/ugabb/dev-spotlight",
    more: "TodoApp"
  },
  {
    name: "Geprod",
    photo: "/geprod.png",
    description: "",
    technologies: [
      {
        name: "Angular",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
      },
      {
        name: "Spring Boot 3",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "PostgresSQL",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    repo:"",
    deploy: "https://geprod.mma.gov.br/homepage",
    more: "projects-details/Portifolio"
  },
  {
    name: "Twenty One Pilots",
    photo: "/21pilots.png",
    description:
      "Landing Page about Twenty one Pilots",
    technologies: [
      {
        name: "React",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "NodeJS",
        imageUrl: "//cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
    repo: "https://github.com/ugabb/Twenty-One-Pilots-",
    deploy:"https://twenty-one-pilots-uslv.vercel.app/",
    more: "projects-details/ImageGenerator"
  },
  {
    name: "Taugor employee management",
    photo: "/taugor-site.png",
    description: "",
    technologies: [
      {
        name: "Next.js",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "NodeJS",
        imageUrl: "//cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Typescript",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "TailwindCSS",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    repo: "https://github.com/ugabb/taugor-gestao-de-funcionarios",
    deploy: "https://taugor-gestao-de-funcionarios.vercel.app/",
    more: "projects-details/TodoApp"
  },
];

export default projects;

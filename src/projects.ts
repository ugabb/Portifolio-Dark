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
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "PostgresSQL",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    repo: "https://github.com/ugabb/dev-spotlight",
    deploy: "https://dev-spotlight-nine.vercel.app/",
    more: "TodoApp"
  },
  {
    name: "Connect Chat", 
    photo: "/connect-chat.png",
    description: "Real time chat application with rooms and private messages.",
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
        name: "Typescript",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "TailwindCSS",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Prisma",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
      {
        name: "MongoDB",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
    repo: "https://github.com/ugabb/connect-chat",
    deploy: "https://connect-chats.vercel.app/",
    more: "projects-details/fintalk-chat"
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
    repo: "",
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
        name: "HTML",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Bootstrap",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
    repo: "https://github.com/ugabb/Twenty-One-Pilots-",
    deploy: "https://twenty-one-pilots-uslv.vercel.app/",
    more: "projects-details/ImageGenerator"
  },
];

export default projects;

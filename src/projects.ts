import { IProject } from "./IProjects";

const projects: IProject[] = [
  {
    name: "Connect Chat",
    photo: "/connect-chat.png",
    description: [
      "Real-time chat application with rooms and private messages.",
      "User Registration and Authentication: The application allows users to create accounts easily and securely, as well as efficiently log in using NextAuth.",
      "Authentication with credentials or with Google is available.",
      "Creation and Management of Chat Rooms: ability to create custom chat rooms, giving users the flexibility to name, describe, and control access to their rooms/groups. Management includes advanced functionalities such as the ability to restrict access through invitations at the time of creation, defining as public or private.",
      "Sending and Receiving Real-Time Messages: application simulates real-time communication. Using Pusher for this purpose, it communicates the client with the server, enabling messages to be sent and received in real-time.",
    ],
    technologies: [
      {
        name: "Next.js",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Typescript",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "TailwindCSS",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Prisma",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
      {
        name: "MongoDB",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
    repo: "https://github.com/ugabb/connect-chat",
    deploy: "https://connect-chats.vercel.app/",
    more: "projects-details/fintalk-chat",
  },
  {
    name: "Geprod",
    photo: "/geprod.png",
    description: [
      "Geprod is a project developed for the Ministry of Environment. ",
      "Responsável por gerenciamento de projetos ambientais para +20 departamentos.",
    ],
    technologies: [
      {
        name: "Angular",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
      },
      {
        name: "SASS",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      },
      {
        name: "Bootstrap",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Spring Boot 3",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "PostgresSQL",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    repo: "",
    deploy: "https://geprod.mma.gov.br/homepage",
    more: "projects-details/Portifolio",
  },
  {
    name: "Dev Spotlight",
    photo: "/dev-spotlight.png",
    description: [
      "Dev-Spotlight is an online platform developed to provide developers and creators from around the world a space to showcase their coding skills, development projects, and design. It functions as a connection hub where technology enthusiasts, programmers, and designers can meet, collaborate, and highlight their talents.",
      "In progress...",
    ],
    technologies: [
      {
        name: "Next.js",
        imageUrl: "/nextjs-logo.png",
      },
      {
        name: "React",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Spring Boot 3",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Typescript",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "TailwindCSS",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "PostgresSQL",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    repo: "https://github.com/ugabb/dev-spotlight",
    deploy: "https://dev-spotlight-nine.vercel.app/",
    more: "TodoApp",
  },
  {
    name: "Twenty One Pilots",
    photo: "/21pilots.png",
    description: [
      "Landing Page about Twenty One Pilots",
      "Introduction to the Band: Learn about the history, music, and members of Twenty One Pilots.",
      "Media Gallery: Explore photos, videos, and interviews featuring Twenty One Pilots.",
    ],
    technologies: [
      {
        name: "HTML",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Bootstrap",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
    repo: "https://github.com/ugabb/Twenty-One-Pilots-",
    deploy: "https://twenty-one-pilots-uslv.vercel.app/",
    more: "projects-details/ImageGenerator",
  },
];

export default projects;

import React from "react";

import HeaderSecondary from "@/components/HeaderSecondary";
import ReactPlayer from "react-player";

import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

import { motion } from "framer-motion";
import ProjectDetails from "@/components/ProjectDetails";
type Props = {};

const TodoApp = (props: Props) => {
  return (
    <div className="h-full">
      <ProjectDetails />
    </div>
  );
};

export default TodoApp;

import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";
import { PiFlyingSaucerThin  } from "react-icons/pi";

type Props = {};

const Mouse = (props: Props) => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <motion.div
      ref={ref}
      className="z-20 absolute rounded-full pointer-events-none"
      animate={{ x, y}}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 50,
        restDelta: 0.001,
      }}
    >
      <PiFlyingSaucerThin className="w-8 h-8" />
    </motion.div>
  );
};

export default Mouse;

import { motion } from "framer-motion";
import React from "react";

interface Props {
  data: string[];
  controls: any;
  sticky: boolean;
}

const Dropdown = ({ data, controls, sticky }: Props) => {
  return (
    <motion.ul
      variants={{
        hidden: { opacity: [0, 0.5], y: [50, 20] },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ delay: 0.1, duration: 0.8 }}
      tabIndex={0}
      className={`absolute p-4 text-base font-semibold text-blue-900 bg-white border-t-2 w-60 border-blue-950  ${
        sticky ? "mt-3" : null
      }`}
    >
      {data.map((value: string, index: number) => (
        <li className="py-2" key={index}>
          <a className="hover:text-red-500">{value}</a>
          <hr className="mt-2" />
        </li>
      ))}
    </motion.ul>
  );
};

export default Dropdown;

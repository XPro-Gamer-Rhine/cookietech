import images from "@/config/images";
import { motion } from "framer-motion";
import React from "react";

const Slide = () => {
  return (
    <section className="relative bg-white">
      <div className="flex items-center justify-center bg-cyan-50">
        <div className="flex flex-col max-w-xl space-y-8">
          <motion.p
            className="font-semibold text-blue-800"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            IT Solutions For Easy Integration
          </motion.p>
          <motion.p
            className="text-5xl text-black font-base"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Deliver Inovative <strong>IT Solution</strong> for Technology
            Insight
          </motion.p>
          <motion.p
            className="font-semibold text-black"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Building a relationship between IT companies & experts
          </motion.p>
          <motion.div
            className="flex space-x-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <button className="py-4 text-base font-semibold text-white bg-pink-500 px-7 hover:bg-zinc-800">
              More Details
            </button>
            <button className="py-4 text-base font-semibold text-white bg-purple-950 px-7 hover:bg-zinc-800">
              Our Services
            </button>
          </motion.div>
        </div>
        <div>
          <motion.img
            src={images.carouselImage2}
            className="absolute"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          />
          <motion.img
            src={images.carouselImage1}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </div>
      </div>
      <img src={images.carouselBottom} className="absolute bottom-5" />
    </section>
  );
};

export default Slide;

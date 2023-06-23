import images from "@/config/images";
import Slide from "./Slide";
import Carousel from "framer-motion-carousel";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const slides = [0, 1, 2];

const CarouselSlider = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay={true}
        interval={4000}
        loop={true}
        renderArrowLeft={() => null}
        renderArrowRight={() => null}
        renderDots={() => null}
      >
        {slides.map((item, i) => (
          <Slide key={i} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;

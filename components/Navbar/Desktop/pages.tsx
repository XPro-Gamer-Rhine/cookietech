import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import images from "@/config/images";
import Image from "next/image";
import data from "@/config/data";
import Dropdown from "../Dropdown/page";

const DesktopNavbar = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const ref = useRef(null);
  const controls = useAnimation();
  const animateControl = useAnimationControls();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (pos) => {
    if (pos < 0.9) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  useEffect(() => {
    if (sticky) {
      animateControl.start({ opacity: [0, 0.5, 1], y: [-50, -20, 0] });
    }
  }, [sticky]);

  useEffect(() => {
    if (hover) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [hover]);

  return (
    <section className="hidden w-full md:block lg:block xl:block" ref={ref}>
      <motion.div
        className={`flex justify-center text-sm text-black bg-white  w-full  ${
          sticky ? "sticky top-0" : null
        }`}
        animate={animateControl}
        transition={{
          delay: 0.2,
          duration: 0.7,
        }}
      >
        <div className="flex items-center justify-between lg:space-x-36 md:space-x-32 xl:space-x-[40vh]">
          <img
            src={images.logo}
            alt=""
            className={`${sticky ? "h-16" : "h-20"}`}
          />

          <ul className="flex lg:space-x-14 md:space-x-4">
            {Object.entries(data.navbar).map((value, index) => (
              <li
                className={`${sticky ? "mt-3" : "mt-7"}`}
                onMouseEnter={() => {
                  setHover(true);
                  setTitle(value[0]);
                }}
                onMouseLeave={() => setHover(false)}
                key={index}
              >
                <label
                  tabIndex={0}
                  className="text-xs font-semibold transition duration-300 lg:text-lg group md:text-sm hover:text-red-500"
                >
                  {value[0]}
                  {sticky ? null : (
                    <div className="block h-[0.2rem] mt-8 transition-all duration-500 bg-red-500  max-w-0 group-hover:max-w-full" />
                  )}
                </label>

                {hover &&
                title.toLowerCase() === String(value[0]).toLowerCase() ? (
                  <Dropdown
                    data={value[1]}
                    controls={controls}
                    sticky={sticky}
                  />
                ) : null}
              </li>
            ))}

            {sticky ? null : (
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="lg:mt-9 md:mt-8"
              />
            )}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default DesktopNavbar;

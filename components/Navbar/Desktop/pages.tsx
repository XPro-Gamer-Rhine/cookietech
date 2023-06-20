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
    if (hover) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    if (sticky) {
      animateControl.start({ opacity: [0, 0.5, 1], y: [-50, -20, 0] });
    }
  }, [hover]);

  return (
    <section className="h-[200vh] relative w-full" ref={ref}>
      {sticky ? (
        <motion.div
          className={`flex justify-center text-sm text-black bg-white sticky top-0 w-full`}
          animate={{ opacity: [0, 0.5, 1], y: [-50, -20, 0] }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <div className="flex justify-between space-x-[40vh] items-center">
            <img src={images.logo} className="h-16" />

            <ul className="flex space-x-14">
              {Object.entries(data.navbar).map((value, index) => (
                <li
                  onMouseEnter={() => {
                    setHover(true);
                    setTitle(value[0]);
                  }}
                  onMouseLeave={() => setHover(false)}
                  key={index}
                >
                  <label
                    tabIndex={0}
                    className="text-lg font-semibold transition duration-300 group"
                  >
                    {value[0]}
                  </label>

                  {hover &&
                  title.toLowerCase() === String(value[0]).toLowerCase() ? (
                    <div className="absolute mt-5">
                      <Dropdown data={value[1]} controls={controls} />
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className={`flex justify-center p-3 text-sm text-black bg-white w-full
        }`}
          animate={animateControl}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <div className="flex justify-between space-x-[40vh]">
            <Image src={images.logo} width={170} height={150} alt="" />

            <ul className="flex space-x-14">
              {Object.entries(data.navbar).map((value, index) => (
                <li
                  className="-mb-3 mt-7"
                  onMouseEnter={() => {
                    setHover(true);
                    setTitle(value[0]);
                  }}
                  onMouseLeave={() => setHover(false)}
                  key={index}
                >
                  <label
                    tabIndex={0}
                    className="text-lg font-semibold transition duration-300 group"
                  >
                    {value[0]}
                    <div className="block h-[0.2rem] mt-8 transition-all duration-500 bg-red-500  max-w-0 group-hover:max-w-full" />
                  </label>

                  {hover &&
                  title.toLowerCase() === String(value[0]).toLowerCase() ? (
                    <Dropdown data={value[1]} controls={controls} />
                  ) : null}
                </li>
              ))}

              <FontAwesomeIcon icon={faMagnifyingGlass} className="mt-9" />
            </ul>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default DesktopNavbar;

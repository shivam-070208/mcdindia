import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const Heroic = () => {
  const [current, setcurrent] = useState(1);
  const [instant, setinstant] = useState(false);
  const [lerp, setlerp] = useState(0);
  const [animating, setanimating] = useState(false);
  const containeref = useRef(null);
  const slides = [
    {
      slideNo: 1,
      text: "The",
      ReferenceImage:
        "https://mcdindia.com/wp-content/uploads/2025/06/new_banner_rs.jpg",
      subText: "Ranveer Singh Meal",
      class: "prevwait",
    },

    {
      slideNo: 3,
      text: "McCrispy",
      ReferenceImage: "https://mcdindia.com/wp-content/uploads/2022/04/img.jpg",
      subText: "Taste the Shordaar Crunch",
      class: "first",
    },
    {
      slideNo: 4,
      text: "Veg Surprise",
      ReferenceImage: "https://mcdindia.com/wp-content/uploads/2022/04/img.jpg",
      subText: "Your favourite is back!",
      class: "next",
    },
    {
      slideNo: 5,
      text: "Breakfast Menu",
      ReferenceImage: "https://mcdindia.com/wp-content/uploads/2022/04/img.jpg",
      subText: "Start your day with McDonald’s Breakfast",
      class: "nextwait",
    },
    {
      slideNo: 6,
      text: "Happy Birthday",
      ReferenceImage: "https://mcdindia.com/wp-content/uploads/2022/04/img.jpg",
      subText: "Celebrate your child's birthday with us",
      class: "",
    },
    {
      slideNo: 7,
      text: "Happy Meal",
      ReferenceImage: "https://mcdindia.com/wp-content/uploads/2022/04/img.jpg",
      subText: "Wholesome Meal & Adventure, all in one",
      class: "",
    },
    {
      slideNo: 8,
      text: "Notice",
      ReferenceImage:
        "https://mcdindia.com/wp-content/uploads/2021/07/slide-2-new.jpg",
      subText: "Beware of Scams",
      class: "",
    },
  ];
  const changeslide = (no) => {
    if (animating) return;
    setanimating(true);
    setcurrent((prev) => (prev + no * 1) % (slides.length + 2));
  };
  const { scrollYProgress } = useScroll({
    target: containeref,
    offset: ["start start", "end start"],
  });

  const scrolllerp = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]));
  useMotionValueEvent(scrolllerp, "change", (latest) => setlerp(latest));
  useEffect(() => {
    const time = setTimeout(() => {
      setanimating(false);
      if (!(current == 0 || current == slides.length + 1)) return;
      setinstant(true);
      setcurrent(Math.abs(slides.length - current));

      setTimeout(() => setinstant(false), 10);
    }, 1400);
    return () => {
      clearTimeout(time);
    };
  }, [current]);
  return (
    <motion.div
      ref={containeref}
      className="flex min-h-screen w-screen maskit relative flex-col items-center gap-2 bg-[#FFBC0D] pt-29 pb-7 pr-3 md:pr-0 md:flex-row md:pt-0 md:pb-0"
    >
      <motion.div
        animate={{ y: -lerp }}
        transition={{ duration: 0 }}
        className="flex h-fit w-full flex-col justify-center gap-4 overflow-hidden md:h-full md:w-[40%]"
      >
        <motion.div
          animate={{
            transform: `translateX(${-current * 100}%)`,
          }}
          transition={{ duration: instant ? 0 : 1.4, ease: "circInOut" }}
          className="relative flex max-w-full"
        >
          <motion.div className="block min-w-full px-7 text-5xl font-bold text-red-600 lg:px-28">
            {!!slides[slides.length - 1].text && (
              <>
                <span className="text-5xl font-bold text-transparent [-webkit-text-stroke:1px_red]">
                  {slides[slides.length - 1].text}
                </span>
                <br />

                {slides[slides.length - 1].subText}
              </>
            )}
          </motion.div>
          {slides.map((slides, index) => (
            <motion.div
              key={index}
              animate={{ opacity: current == index + 1 ? 1.0 : 0.1 }}
             transition={{duration:instant?0:1.4}}
              className="block min-w-full px-7 text-5xl font-bold text-red-600 lg:px-28"
            >
              {!!slides.text && (
                <>
                  <span className="text-5xl font-bold text-transparent [-webkit-text-stroke:1px_red]">
                    {slides.text}
                  </span>
                  <br />

                  {slides.subText}
                </>
              )}
            </motion.div>
          ))}
          <div className="block min-w-full px-7 text-5xl font-bold text-red-600 lg:px-28">
            {!!slides[0].text && (
              <>
                <span className="text-5xl font-bold text-transparent [-webkit-text-stroke:1px_red]">
                  {slides[0].text}
                </span>
                <br />

                {slides[0].subText}
              </>
            )}
          </div>
        </motion.div>
        <div className="slide-change-arrow ml-4 flex h-fit w-fit scale-90 items-center gap-4 font-sans md:ml-30 md:scale-100">
          <div
            onClick={() => changeslide(-1)}
            className="grid h-12 w-12 cursor-pointer rounded-full border border-red-600 text-center text-4xl text-red-800 transition-all outline-none hover:bg-red-600 hover:text-white"
          >
            &lt;
          </div>
          <div
            onClick={() => changeslide(1)}
            className="cursor-pointer rounded-full bg-white px-5 py-2 pb-4 text-center text-4xl text-red-800 transition-all hover:bg-red-600 hover:text-white"
          >
            &gt;
          </div>
        </div>
      </motion.div>
      <motion.div  className="mx-auto heroicimage relative max-w-[93vw] flex-1 overflow-hidden md:h-screen md:w-full">
        <motion.div
          animate={{ transform: `translateX(${-current * 100}%) ` }}
          transition={{ duration: instant ? 0 : 1.4, ease: "circInOut" }}
          className="flex h-full"
        >
          <img
            src={slides[slides.length - 1].ReferenceImage}
            className="h-full min-w-[93vw] object-fill object-center md:min-w-full"
          />
          {slides.map((slides, index) => (
            <motion.img
              animate={{
                filter: current == index + 1 ? "blur(0px)" : "blur(5px)",
              }}
              transition={{ duration: instant ? 0 : 1.4 }}
              key={index}
              src={slides.ReferenceImage}
              className="h-full min-w-[93vw] object-fill object-center md:min-w-full"
            />
          ))}
          <img
            src={slides[0].ReferenceImage}
            className="h-full min-w-[93vw] object-fill object-center md:min-w-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Heroic;

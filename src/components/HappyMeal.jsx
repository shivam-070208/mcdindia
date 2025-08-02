import React, { useRef, useState } from "react";
import {
  Appdownloadvedio,
  AppStore,
  HappyMealLogo,
  PlayStore,
} from "../assets";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Happy1, Happy2, Happy3, Happy4, Happy5 } from "../assets/happymeal";

const HappyMeal = () => {
  const containerref = useRef(null);
  const HappyMealData = [
    {
      Image: Happy1,
      Text: (
        <div className="text-xl text-red-600 font-semibold">
          Discover your kid’s
          <br /> <span className="text-yellow-500">musical talent</span>
        </div>
      ),
    },
    {
      Image: Happy2,
      Text: (
        <div className="text-xl font-semibold text-red-600">
          <span className="text-yellow-500">Create</span> happy <br />  moments with<br/>  <span className="text-yellow-500">
            your little ones
            </span>
        </div>
      ),
    },
    {
      Image: Happy3,
      Text: (
         <div className="text-xl font-semibold text-red-600">
          <span className="text-yellow-500">Create</span> happy <br />  moments with<br/>  <span className="text-yellow-500">
            your little ones
            </span>
        </div>
      ),
    },
    {
      Image: Happy4,
      Text: (
       <div className="text-xl font-semibold text-red-600">
          <span className="text-yellow-500">Create</span> happy <br />  moments with<br/>  <span className="text-yellow-500">
            your little ones
            </span>
        </div>
      ),
    },
    {
      Image: Happy5,
      Text: (
        <div className="text-xl font-semibold text-red-600">
          <span className="text-yellow-500">Create</span> happy <br />  moments with<br/>  <span className="text-yellow-500">
            your little ones
            </span>
        </div>
      ),
    },
  ];
  const { scrollYProgress } = useScroll({
    target: containerref,
    offset: ["start end", "end start"],
    axis: "y",
  });
  const [lerp, setlerp] = useState(0);
  const transformedvalue = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [-150, 0, 150]),
    {
      stiffness: 50,
    },
  );
  useMotionValueEvent(transformedvalue, "change", (latest) => setlerp(latest));

  return (
    <section
      ref={containerref}
      id="happymeal relative"
      className="bg-[url('/happymealbg.webp')]"
    >
      <motion.div
        animate={{ y: lerp+1.4 }}
        transition={{ duration: 0 }}
        className="flex min-h-screen w-screen flex-wrap items-center justify-center gap-14 px-5 md:px-40"
      >
        <div className="h-fit w-fit space-y-4 py-10 text-center">
          <img src={HappyMealLogo} className="mx-auto h-40 w-40" />
          <video
            src={Appdownloadvedio}
            autoPlay={true}
            muted
            loop
            playsInline
            className="h-90 w-70 rounded-lg object-fill shadow-lg"
          ></video>
          <p className="text-xl font-bold text-red-600">Download App From</p>
          <div>
            <div className="mx-auto flex w-fit gap-3">
              <img src={AppStore} className="w-30" />
              <img src={PlayStore} className="w-30" />
            </div>
          </div>
        </div>
        <div className="flex min-w-60 flex-1 flex-wrap justify-center gap-14">
          {HappyMealData.map((value, idx) => (
            <motion.div
              animate={{ y: -lerp * 2.0 }}
              key={idx}
              className="space-y-3 text-center"
            >
              <img src={value.Image} className="h-60 w-60" />
              {value.Text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HappyMeal;

import { useState } from "react";
import { Logo, Menu } from "../assets";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [fixednav, setfixednav] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) setfixednav(true);
    else setfixednav(false);
  });

  const Navlinks = {
    Menu: "#Menu",
    "Happy Meal": "#happymeal",
    Restaurants: "#Restraunts",
    McDeleivery: "#Mcdeleivery",
    News: "#News",
    "Birthday Party": "#",
    Careers: "#",
  };
  const [Open, setopen] = useState(false);
  return (
    <motion.div
      animate={{ y: fixednav && [-100, 0] }} transition={{duration:0.2}}
      className={`w-screen origin-top ${fixednav ? "fixed top-0 bg-white" : "absolute bg-[#ffffff4c]"} z-10 flex items-center justify-between px-4 py-4 backdrop-brightness-100 md:px-30 shadow-md`}
    >
      <div>
        <img src={Logo} />
      </div>
      <div className="hidden gap-6 text-lg font-[100] lg:flex">
        {Object.entries(Navlinks).map(([keyframes, values]) => (
          <a href={values} key={keyframes} className="group">
            {keyframes}
            <div className="block h-[2px] origin-left scale-x-0 bg-yellow-400 transition-all group-hover:scale-x-100" />
          </a>
        ))}
      </div>
      <div
        onClick={() => setopen(!Open)}
        className="cursor-pointer p-1 bg-red-600 px-3 text-center lg:hidden"
      >
        <img src={Menu} className="mx-auto w-7" />
        <span className="mt-1 text-sm text-white">
          {Open ? "Close" : "Open"}
        </span>
      </div>
    </motion.div>
  );
};

export default Navbar;

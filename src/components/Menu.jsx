import { motion } from "motion/react";
import React, { useState } from "react";

const Menu = () => {
  const MenuNav = ["Burger & Wraps", "Snacks & Sides", "Desserts", "Beverages"];
  const [checked, setchecked] = useState("Burger");
  const MenuItems = {
    "Cold Cofee": {
      Tagline: "Familiarity breeds confidence.",
      Description:
        "Batter & breaded chicken patty containing green peas, carrots, green beans, onion, potatoes, rice and spices, served in a bun with eggless mayonnaise and lettuce.",
      Size: "173g",
      Allergen: "Cereal containing gluten, Milk, Soya",
    },
  };

  return (
    <section id="Menu" className="min-h-screen w-screen p-20">
      <main>
        <div className="flex flex-wrap gap-5 divide-x-4 divide-neutral-300">
          {MenuNav.map((elm, index) => (
            <div
              key={index}
              onClick={() => setchecked(elm.split(" ")[0])}
              className={`cursor-pointer px-5 py-2 text-xl font-semibold transition-all ${checked == elm.split(" ")[0] ? "text-red-600" : "text-neutral-300"}`}
            >
              {elm}
              {checked == elm.split(" ")[0] && (
                <motion.div
                  layoutId="navinstance"
                  className="mx-auto mt-2 h-1 w-full bg-red-600"
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Menu;

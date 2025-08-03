import React from "react";
import Select from "../ui/Select";

const Restaurant = () => {
  return (
    <div
      className='h-screen w-screen bg-[url("Restraunantbg.webp")] bg-no-repeat'
      style={{ backgroundSize: "100% 110%" }}
    >
      <div className="h-screen w-fit md:w-full max-w-lg bg-white flex flex-col">
        <Select />
      </div>
    </div>
  );
};

export default Restaurant;

import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import sql from "../assets/mysql.png";
import php from "../assets/PHP.png";
import laravel from "../assets/laravel.png";
const Skills = () => {
  return (
    <div
      className="border border-grey-600 rounded-3xl bg-black text-green-400 max-w-[1200px] mx-auto
       grid grid-cols-5 place-items-center sm:mt-14 md:justify-between md:items-center md:h-[285px]"
    >
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={html} alt="HTML" width={80} height={80} />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={css} alt="CSS" width={80} height={80} />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={javascript} alt="JavaScript" width={80} height={80} />
        <p className="mt-2">JavaScript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={bootstrap} alt="Bootstrap" width={80} height={80} />
        <p className="mt-2">Bootstrap</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={tailwind} alt="Tailwind" width={80} height={80} />
        <p className="mt-2">Tailwind</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={react} alt="React" width={80} height={80} />
        <p className="mt-2">React</p>
      </div><div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={sql} alt="React" width={80} height={80} />
        <p className="mt-2">MySql</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={php} alt="PHP" width={80} height={80} />
        <p className="mt-2">PHP</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={laravel} alt="Laravel" width={80} height={80} />
        <p className="mt-2">Laravel</p>
      </div>
    </div>
  );
};
export default Skills;

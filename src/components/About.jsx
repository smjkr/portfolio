import React from "react";
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] ms-auto my-12 " id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-lg lg:text-xl">
              I am a Full Stack Developer. I am a student of MBA ( Management ) in
              National University of Bangladesh. I am a practical Muslim.
              I love hardly learn about Web Development.
              Because, I always try to my best production for my happy clint.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImage}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;

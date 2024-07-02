import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I am Namra Mahak, a front-end developer absed in United Kingdom.
            <br className="hidden lg:inline-block" />I build functional and scalable front-end products with exceptional user experience.
          </h1>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex text-[#fff] bg-[#111] border-0 py-2 px-6 focus:outline-none rounded text-lg backdrop-blur-sm">
              View Resume
            </a>
          </div>
          <div>
            <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Stack</p>
            <div className="bg-[#f5f5f5] rounded shadow-md">
            <i class="ri-tailwind-css-line text-[#282828] p-2"></i>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}

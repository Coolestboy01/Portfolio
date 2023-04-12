import React from "react";
import image11 from "../assets/images/image11.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold md: mb-8">
          About <span className="text-cyan-600">Me</span>
        </h3>
        {/* <p className="text-gray-400 my-3 text-lg">My introduction</p> */}
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a creative and detail-oriented Frontend Software Developer with a background in developing responsive, high-performance, reliable React-based web applications targeting both mobile devices and desktops. I have experience in testing and debugging code, and developing front-end logic. I have also been recognized by senior leadership for the passion for quality, eye for detail and always ready to dive in and tackle problems head-on.  
              </p>
              <div className="flex mt-10 items-center gap-7 md:justify-center sm:justify-center">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Ojo Kayode CV.pdf" download>
                <button className="btn-primary ">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={image11}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

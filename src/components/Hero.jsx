import React from "react";
import coolestboy from "../assets/images/coolestboy.png";
const Hero = () => {
  const social_media = [
    {
      name: "logo-github",
      live_link: "https://github.com/Coolestboy01",
    },
    {
      name: "logo-linkedin",
      live_link: "https://www.linkedin.com/in/kayode-ojo-7663b599/",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-teal-500 rounded-full w-auto h-auto overflow-hidden mx-7">
        <img src={coolestboy} alt="" className=" w-44 h-auto md:w-11/12" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Kayode Ojo</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Frontend Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.live_link} target="_blank"><ion-icon name={icon.name}></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

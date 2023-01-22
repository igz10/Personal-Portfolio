import React from 'react';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

import spotifyCapsule from '../assets/portfolio/spotifyCapsule.jpg';
import olympicAnalysis from '../assets/portfolio/olympicAnalysis.jpg';
import websharer from '../assets/portfolio/websharer.jpg';
import mazes from '../assets/portfolio/mazes.jpg';
import mountain from '../assets/portfolio/mountain.jpg';



const Portfolio = () => {

    const portfolios = [
        {
          id: 1,
          src: spotifyCapsule,
          name: "Spotify Capsule",
          demo_href: "https://www.youtube.com/watch?v=ymCf9nR-5Xc&ab_channel=Cuadompto",
          code_href: "https://github.com/info441-au22/info441-finalproject",
          alt: "spotify capsule demo screen shot",
        },
        {
          id: 2,
          src: olympicAnalysis,
          name: "Olympic Analysis",
          demo_href: "https://isaacgaribayz.shinyapps.io/project-groupF6/",
          code_href: "https://github.com/info-201a-sp21/project-groupF6",
          alt: "olympic analysis screen shot",
        },
        {
          id: 3,
          src: websharer,
          name: "Websharer",
          demo_href: "",
          code_href: "",
          alt: "web sharer demo screen shot",
        },
        {
          id: 4,
          src: mazes,
          name: "Mazes",
          demo_href: "",
          code_href: "",
          alt: "mazes gui screen shot",
        },
        {
          id: 5,
          src: mountain,
          name: "Mountain Stop",
          demo_href: "https://mountainstop-6cc61.web.app/",
          code_href: "https://github.com/info340-au21/project-asingh0725",
          alt: "mountain stop weather api page",
        },
        // {
        //   id: 6,
        //   src: reactWeather,
        //   name: "Building Database Backend",
        //   demo_href: "",
        //   code_href: "",
        //   alt: "database backend screen shot",
        // },
      ];

   return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-40">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, demo_href, code_href, alt }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="pb-1">{name}</p>
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo_href}>
                  {(demo_href !== "") && (
                    <button className="w-1/2 px-7 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  )}
                </a>
                {(demo_href === "") && (
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      No Demo
                    </button>
                  )}
                <a href={code_href}>
                  {(code_href !== "" ) && (
                    <button className="w-1/2 px-7 py-3 m-4 duration-200 hover:scale-105">
                        Code
                    </button>
                  )}
                </a>
                  {(code_href === "") && (
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        No Code
                    </button>
                  )}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
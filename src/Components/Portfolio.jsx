/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/cup.jpg";

const imageAltText = "laptop and cup";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "QUIZ GAME CPP PROJECT",
    description:
      "This project is about a simple quiz game. It involves three criteria of quiz. The user has to answer some multiple-choice questions to win the quiz game.",
    url: "https://github.com/emaanfatymah/quiz-game-cpp-project",
  },
  {
    title: "QUIZ GAME JAVA PROJECT",
    description:
      "This Project is designed to enhance the knowledge of the user in which he/she can answer to some multiple choice questions of specific topics.",
    url: "https://github.com/emaanfatymah/quiz-game-java-project",
  },
  {
    title: "CAR SHOWROOM CPP PROJECT",
    description:
      "This Car Showroom system is designed for the users who are interested in cars and are wanting to buy them. This system keeps track of all the cars along with their details.",
    url: "https://github.com/emaanfatymah/car-showroom-cpp",
  },
  {
    title: "CALCULATOR TS PROJECT",
    description:
      "Basic Calculator using TS",
    url: "https://github.com/emaanfatymah/Calculator_TypeScript",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

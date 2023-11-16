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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Photo Gallery for A.J Vierci",
    description:
      "Small project for A.J Vierci, a company that needed this for human resources. This project was made with Jquery, HTML, PHP, CSS and MySql.",
    url: "https://github.com/kuuukooo/Galeria5-AJAX",
  },
  {
    title: "Personal Portfolio",
    description:
      "Personal portfolio from FreeCodeCamp's Responsive Portfolio Tutorial. It helped me to learn the basics of HTML and CSS.",
    url: "https://kuuukooo.github.io/kuuuko.github.io/",
  },
  {
    title: "Codespaces Microsoft Learn Path",
    description:
      "Codespaces Microsoft Learn Path. This project taught me how to use Codespaces and how to use it with Github.",
    url: "https://github.com/kuuukooo/skills-code-with-codespaces",
  },
  {
    title: "Introduction to Github",
    description: "Introduction to Github. This project taught me the basics of Github.",
    url: "https://github.com/kuuukooo/skills-introduction-to-github",
  }
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

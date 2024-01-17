import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    // const spotlightProjects = {
    //   "No Man's Land": {
    //     title: "no man's land",
    //     desc:
    //       "A third-person survival-mode game where you battle against time and space to return to Earth.",
    //     techStack: "C# (UNITY)",
    //     link: "https://github.com/slakh96/no-mans-land",
    //     open: "https://gazijarin.itch.io/no-mans-land",
    //     image: "/assets/nomansland.png"
    //   },
    //   Truth: {
    //     title: "truth",
    //     desc:
    //       "A three.js simulation of the planet system revolving around a monolith.",
    //     techStack: "JAVASCRIPT (THREE.JS)",
    //     link: "https://github.com/gazijarin/truth",
    //     open: "https://gazijarin.github.io/Truth/",
    //     image: "/assets/truth.png"
    //   },
    //   "Tall Tales": {
    //     title: "tall tales",
    //     desc:
    //       "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
    //     techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
    //     link: "https://github.com/gazijarin/TallTales",
    //     open: "https://talltales.herokuapp.com/",
    //     image: "/assets/talltales.png"
    //   },
    //   Portfolio: {
    //     title: "portfolio.js",
    //     desc:
    //       "A small JS library that helps with clear and succinct data presentation.",
    //     techStack: "NODE.JS (EXPRESS.JS)",
    //     link: "https://github.com/gazijarin/Portfolio.js",
    //     open: "https://afternoon-ocean-92382.herokuapp.com/",
    //     image: "/assets/portfolio.png"
    //   }
    // };
    const projects = {
      "FASHIONSCAPE MERN Web Application": {
        desc:
          "Designed and implemented a Pinterest inspired website with a focus on fashion and design. Utilized OpenAI to create a custom stylist chatbot," 
          + " leveraged React for a dynamic frontend and Express backend to architect a robust, scalable platform. Leveraged Amazon S3 and MongoDB Atlas for cloud storage. "
          + "Integrated Firebase for secure user authentication.",
        techStack: "MongoDB Atlas, Express, React, Node, AWS, OPENAI, Firebase",
        link: "https://github.com/john-antony/fashionscape",
        open: "https://fashionscape.onrender.com/"
      },
      "AI Q Learning Agent": {
        desc:
          "Implemented a Q learning agent using a feed-forward neural network with customizable network" 
          + " architecture, activation functions, and hidden layers.",
        techStack: "Java, Neural Networks, Artifical Intelligence, Sepia, Eclipse",
        link: "https://github.com/john-antony/CS440/tree/main/CS440_Sepia/src/hw3"
      },
      "KashKoala": {
        desc:
          "Java-based financial app similar to Venmo and Cash App, offering account creation, money transactions,"
          + " and a stock tracking feature using Yahoo Finance API integration, with user data stored in separate files.",
        techStack: "Java, Java Swing, Maven, Yahoo Finance API",
        link: "https://github.com/john-antony/KashKoala"
      },
      "Fake Job Postings Dataset Final Project": {
        desc:
          "An in-depth analysis of a fake job posting Kaggle dataset as part of a machine learning final project, "
          + "employing data exploration, feature engineering, and model evaluation techniques.",
        techStack: "Python, Jupyter, sklearn",
        link:
          "https://github.com/john-antony/BA476"
      },
      "Medibank Breach Security News Project": {
        desc:
          "Conducted comprehensive analysis of a high-profile cyber attack on a hospital within a 4-person team,"
          + " including examination of mainstream press coverage, technical issues, preventive measures, and ethical implications.",
        techStack: "Information Security, Cybersecurity, Research",
        link: "https://github.com/john-antony/CS357/tree/main/Security%20News%20Project"
      },
      "CVE Vulnerability Project": {
        desc:
          "Identified and reported vulnerabilities in AVideo video sharing platform."
          + " Demonstrated the potential for XSS attacks, session cookie theft, and unauthorized account access."
          + " Proposed fixes including implementing HttpOnly and Secure flags for cookies and enhancing password authentication.",
        techStack: "Information Security, Cybersecurity, Research",
        link: "https://github.com/john-antony/CS357/tree/main/CVE%20Project",
        open: ""
      },
      "Session State Shopping Cart": {
        desc:
          "Created a user interface with ASP.NET and leveraged data binding to display items and manage the cart.",
        techStack: ".NET Framework, ASP.NET, C#, SQL Server, Session State",
        link: "https://github.com/john-antony/EC512/tree/main/EC512/Lab6",
        
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        {/* <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

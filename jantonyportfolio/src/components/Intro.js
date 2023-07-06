import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        {/* <FractalTree></FractalTree> */}
        <div className="introtop-spacing" />
        <Typist avgTypingDelay={110}>
          <span className="intro-title">
            <span className="intro-name">{"["}</span>
            <span className="intro-name">{"John"}</span>
            {" has entered the chat."}
            <span className="intro-name">{"]"}</span>

          </span>
        </Typist>
        <div className="intro-spacing" />
        <FadeInSection>
          <div className="intro-subtitle">explore my digital world.</div>
        </FadeInSection>
        <div className="intro2-spacing" />
        <FadeInSection>
          <div className="intro-desc">
            I'm a software engineer based in West Hartford, CT. I am
            interested in full-stack development, artificial intelligence, machine
            learning, and everything in between.
          </div>
          <a href="mailto:jantony@bu.edu" className="intro-contact">
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Email"}
          </a>
          <div className="intro-buttonspace" />
          <a href="https://drive.google.com/file/d/1NnUHPFtsB9hsYolLy2j8NolCAyaDxC6X/view?usp=sharing" target="_blank" className="intro-contact">
            <DescriptionRoundedIcon></DescriptionRoundedIcon>
            {"  " + "Resume"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;

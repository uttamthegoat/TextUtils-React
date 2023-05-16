import React from "react";
import styles from "./About.module.css";

export default function About(props) {
  let myStyle={
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"#313954":"white"
  }
  return (
    <div className="container my-3">
      <h1
        className={styles.about_header}
        style={myStyle}
      >
        About
      </h1>
      <div className={styles.aboutTextUtils} style={myStyle}>
        <p>
          Word Counter is an easy to use online tool for counting words,
          characters, sentences, paragraphs and pages in real time, along with
          spelling and grammar checking. Get started by typing directly into the
          text area above or pasting in your content from elsewhere. Word and
          character counts will display at the top, any writing mistakes will be
          underlined and your most frequently used keywords will appear to the
          right.
        </p>
        <hr className={styles.divider}/>
        <ul className={styles.listProperties}>
          <li>
            <h3>Analyze your text</h3>
            <p>
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count or reading speed.
            </p>
          </li>
          <li>
            <h3>Free to Use</h3>
            <p>
              TextUtils is a free character Counter tool that provides character
              or word count, statistics for a given text. TextUtils reports the
              number of words and characters. Thus it is suitable for writing
              text with word /character limit.
            </p>
          </li>
          <li>
            <h3>Browser Compatible</h3>
            <p>
              This word counter software works on any web browser such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in FaceBook, Blog, Excel document, pdf document,
              essays, etc
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

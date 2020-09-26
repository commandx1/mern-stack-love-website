import React from "react";
import "./heading.css";
import ReactHtmlParser from 'react-html-parser'

const Heading = (props) => {
  const char = props.title;

  const arr = char.split("");
  let html = '<div class="customHeader-div">'; 
  arr.map((a, index) => {
    if(a !== ' ') {
      html += `<span
      style="
        animation-delay: ${index / 4}s;
        animation-duration: ${0.25 * arr.length}s;
      "
    >
      ${a}
    </span>`
    } 
    if(a === ' ') {
      html += '</div><div class="customHeader-div">'
    } 
    if(index + 1 === arr.length) {
      html += '</div>'
    }
  })

  return <h1 id="myH1">{ReactHtmlParser(html)}</h1>;
};

export default Heading;

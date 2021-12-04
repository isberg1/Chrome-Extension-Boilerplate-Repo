import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

console.log("Hello from contentScript");

function ContentScript() {
  return <div className="hello">Hello from contentScript</div>;
}

const body = document.getElementsByTagName("body")[0];
if (body) {
  const div = document.createElement("div");
  div.id = "reactAttachmentPointContentScript";
  body.appendChild(div);
  const reactDiv = document.getElementById(div.id);
  if (reactDiv) {
    ReactDOM.render(<ContentScript />, reactDiv);
  }
}

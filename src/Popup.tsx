import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Popup = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="hello">Base chorme extention repo with TS and React</h1>
    </div>
  );
};

const body = document.getElementsByTagName("body")[0];
if (body) {
  const div = document.createElement("div");
  div.id = "reactAttachmentPoint";
  body.appendChild(div);
  const reactDiv = document.getElementById(div.id);
  if (reactDiv) {
    ReactDOM.render(<Popup />, reactDiv);
  }
}

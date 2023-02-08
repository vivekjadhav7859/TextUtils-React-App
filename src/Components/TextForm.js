import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("you have clicked handleupstate");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase"," success");
  };

  const handleClrClick = () => {
    // console.log("you have clicked handleupstate");

    setText("");
    props.showAlert("Text Cleared"," success");

  };

  const handleLoClick = () => {
    // console.log("you have clicked handleupstate");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase"," success");

  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra sapeces handled"," success");

  }

  const handleCopy = ()=>{
    console.log("copy button clicked")
    var text = document.getElementById("myBox")
    text.select();
    // text.setSelectRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard"," success");

  }
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3" style={{color : props.mode ==='dark'?'white':'black'}}>
          <h1>{props.heading} </h1>
          <label htmlFor="myBox"></label>
          <textarea
            className="form-control"
            style={{backgroundColor : props.mode ==='dark'?'black':'white', color : props.mode ==='dark'?'white':'black'}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-outline-success mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-outline-danger mx-2" onClick={handleClrClick}>
          Clear
        </button>
        <button className="btn btn-outline-dark mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={handleExtraSpaces}>
          Handle Extra Spaces
        </button>
      </div>

      <div className="container my-2" style={{color : props.mode ==='dark'?'white':'black'}}>
        <h2>The summary</h2>
        <p>
          <b>
            {text.split(" ").length} words and {text.length} letters
          </b>
        </p>
        <p>
          <b>{0.008 * text.split(" ").length} Minutes Read</b>
        </p>
        <div id="preview" className="container">
          {/* <p> */}
            <h2>Preview</h2>
          {/* </p> */}
          {text.length>0?text:"Enter Some text To preview"}
        </div>
      </div>
    </>
  );
}

import React, { useState } from 'react'
const TextForm = (props) => {
    const handleLpClick = () => {
        console.log("Lowercase was clicked" + text);
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        console.log("on change");
    setText(event.target.value);
    }
    const handleClear = () => {
        setText('');
    }
    const handleUpClick = () => {
         console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
    }   
    const [text, setText] = useState(' ');
    //setText('helloooooo');
    return (
        <>
            <div className="container">
            <h1>{props.heading} - </h1>
            <div className="mb-3">

                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLpClick}>     Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
        </div><div className="container my-3">
                <h3>Text Summary</h3>
                <p> {text.split(" ").length} words and {text.length} charcters</p>
                <p> {0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div></>
    )

};
export default TextForm;
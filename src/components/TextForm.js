import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log('on change');
    setText(event.target.value);
  };

  const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary: </h2>
        <p>
          {' '}
          {text.split(' ').length} words and {text.length} characters{' '}
        </p>
        <p> {0.008 * text.split(' ').length} minutes read </p>
        <h3> Preview: </h3>
        <p> {text} </p>
      </div>
    </>
  );
}

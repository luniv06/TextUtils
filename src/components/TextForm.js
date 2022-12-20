import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log('on change');
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  };

  const [text, setText] = useState('');
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'black',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <h2>Your Text Summary: </h2>
        <p>
          {' '}
          {text.split(' ').length} words and {text.length} characters{' '}
        </p>
        <p> {0.008 * text.split(' ').length} minutes read </p>
        <h3> Preview: </h3>
        <p>
          {' '}
          {text.length > 0
            ? text
            : 'Enter text in the box above to preview it'}{' '}
        </p>
      </div>
    </>
  );
}

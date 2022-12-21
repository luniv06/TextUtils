import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success');
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success');
  };
  const handleOnChange = (event) => {
    console.log('on change');
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied to clipboard', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Removed extra spaces', 'success');
  };
  const handleClearText = () => {
    setText('');
    props.showAlert('Text cleared', 'success');
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
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearText}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <h2>Your Text Summary: </h2>
        <p>
          {' '}
          {text.split(' ').filter((word) => word !== '').length} words and{' '}
          {text.length} characters{' '}
        </p>
        <p>
          {' '}
          {0.008 * text.split(' ').filter((word) => word !== '').length} minutes
          read{' '}
        </p>
        <h3> Preview: </h3>
        <p> {text.length > 0 ? text : 'Nothing to preview'} </p>
      </div>
    </>
  );
}

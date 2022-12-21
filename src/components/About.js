import React, { useState } from 'react';

export default function About(props) {
  // const [btnText, setBtnText] = useState('Enable Dark Mode');

  // //   const [bgColor, setBgColor] = useState('white');
  // const [customStyle, setCustomStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // });
  // const handleBtnClick = () => {
  //   if (!btnText.localeCompare('Enable Dark Mode')) {
  //     setBtnText('Disable Dark Mode');
  //   } else {
  //     setBtnText('Enable Dark Mode');
  //   }
  //   if (!customStyle.backgroundColor.localeCompare('white')) {
  //     setCustomStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //     });
  //   } else {
  //     setCustomStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //     });
  //   }
  // };

  const customStyle = {
    backgroundColor: props.mode === 'light' ? 'white' : 'black',
    color: props.mode === 'light' ? 'black' : 'white',
  };

  return (
    <div className="container" style={customStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample" style={customStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={customStyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={customStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={customStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={customStyle}>
              Textutils is a free characyer counter tool that provides instant
              character count and word count statistics for a given text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={customStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={customStyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Edge, Opera, Safari.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={handleBtnClick}
        >
          {btnText}
        </button>
      </div> */}
    </div>
  );
}

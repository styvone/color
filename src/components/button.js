import React, { Component } from "react";

/* 

relevant props:
  -ImgSrc = rel. address of button image
  -OnClick = function to run on click
  -ButtonText = text of button
  -OnMouseEnter = function to run on mouse over
  -OnMouseLeave = function to run on mouse exit

*/

class Button extends Component {
  render() {
    const {
      ImgSrc,
      OnClick,
      ButtonText,
      OnMouseEnter,
      OnMouseLeave
    } = this.props;

    return (
      <button
        type="button"
        onClick={OnClick}
        onMouseEnter={OnMouseEnter}
        onMouseLeave={OnMouseLeave}
      >
        <img src={ImgSrc} />
        {ButtonText}
      </button>
    );
  }
}

export default Button;

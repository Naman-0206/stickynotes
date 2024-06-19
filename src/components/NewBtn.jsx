import React from "react";
import "./style.css";

function NewBtn({ onClickHandler }) {
  return (
    <button className='newBtn' onClick={onClickHandler}>
      New Note
    </button>
  );
}

export default NewBtn;

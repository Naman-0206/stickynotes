import React from "react";

const buttonStyle = {
  position: "fixed",
  top: "20px",
  right: "20px",
  zIndex: "9999",
  padding: "10px 20px",
  backgroundColor: "lightyellow",
  color: "black",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.3s ease-in-out",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
};

function NewBtn({ onClickHandler }) {
  return (
    <button style={buttonStyle} onClick={onClickHandler}>
      New Note
    </button>
  );
}

export default NewBtn;

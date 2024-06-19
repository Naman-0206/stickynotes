import React from "react";
import "./style.css";
import { noteThemes } from "./constants";

function titleCase(st) {
  return st
    .toLowerCase()
    .split(" ")
    .reduce((s, c) => s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), "");
}

const ColorBtn = ({ theme, themeChangeHandler, textareaRef }) => {
  return (
    <div
      title={titleCase(theme.name)}
      className='color'
      style={{
        backgroundColor: theme.secondryBackgroundColor,
      }}
      onClick={(e) => {
        textareaRef.current.focus();
        themeChangeHandler(theme);
      }}
    />
  );
};

const DeleteBtn = ({ deleteNoteHandler }) => {
  return (
    <div title='Delete Note' onClick={deleteNoteHandler} className='deleteBtn'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='16px'
        height='16px'
        fill='rgba(31, 31, 31, 0.5)'
      >
        <path d='M21 4h-4.2l-.7-1.4C16.1 1.2 15.5 1 15 1h-6c-.5 0-1.1.2-1.3.6L7.2 4H3c-.6 0-1 .4-1 1s.4 1 1 1h1v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h1c.6 0 1-.4 1-1s-.4-1-1-1zM9.5 3h5l.5 1H9l.5-1zM18 20H6V6h12v14zm-6-5c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1s-1-.4-1-1v-3zm-4-1h2v4H8v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z' />
      </svg>
    </div>
  );
};

const CloseMenuBtn = ({ onClickHandler }) => {
  return (
    <div title='Close Menu' onClick={onClickHandler} className='deleteBtn'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='16px'
        height='16px'
        fill='rgba(31, 31, 31, 0.5)'
      >
        <path d='M 10.585938 12 L 5.292969 6.7070312 C 4.902344 6.3164062 4.902344 5.6835938 5.292969 5.2929688 C 5.683594 4.9023438 6.3164062 4.9023438 6.7070312 5.2929688 L 12 10.585938 L 17.292969 5.2929688 C 17.683594 4.9023438 18.316406 4.9023438 18.707031 5.2929688 C 19.097656 5.6835938 19.097656 6.3164062 18.707031 6.7070312 L 13.414062 12 L 18.707031 17.292969 C 19.097656 17.683594 19.097656 18.316406 18.707031 18.707031 C 18.316406 19.097656 17.683594 19.097656 17.292969 18.707031 L 12 13.414062 L 6.7070312 18.707031 C 6.3164062 19.097656 5.683594 19.097656 5.2929688 18.707031 C 4.9023438 18.316406 4.9023438 17.683594 5.2929688 17.292969 Z' />
      </svg>
    </div>
  );
};

function NoteMenu({ deleteNoteHandler, theme, themeChangeHandler, closeMenu, onClick, textareaRef }) {
  return (
    <div
      className='menu'
      onClick={onClick}
      style={{
        backgroundColor: theme.secondryBackgroundColor,
      }}
    >
      {noteThemes.map((theme) => {
        return (
          <ColorBtn
            theme={theme}
            key={theme.name}
            themeChangeHandler={themeChangeHandler}
            textareaRef={textareaRef}
          />
        );
      })}
      <DeleteBtn deleteNoteHandler={deleteNoteHandler} />
      <CloseMenuBtn onClickHandler={closeMenu} />
    </div>
  );
}

export default NoteMenu;

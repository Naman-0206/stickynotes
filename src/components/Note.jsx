import React, { forwardRef, useRef, useState, useEffect } from "react";
import "./style.css";
import NoteMenu from "./NoteMenu";

// forwardRef(({...props}, ref)=>{})
const Note = forwardRef(
  (
    {
      initialPos = { x: 0, y: 0 },
      onMouseDown,
      rotation,
      content = "Take a Note...",
      contentChangeHandler,
      deleteNoteHandler,
      theme,
      themeChangeHandler,
    },
    ref
  ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableContent, setEditableContent] = useState(content);
    const textareaRef = useRef(null);

    const handleDoubleClick = () => {
      setIsEditing(true);
    };

    const handleBlur = () => {
      if (textareaRef.current) {
        textareaRef.current.scrollTop = 0;
      }
      setIsEditing(false);
      contentChangeHandler && contentChangeHandler(editableContent);
    };

    const handleChange = (e) => {
      setEditableContent(e.target.value);
    };

    useEffect(() => {
      if (isEditing && textareaRef.current) {
        textareaRef.current.focus();
      }
    }, [isEditing]);

    // const wrapperRef = useRef(null);/

    return (
      <div
        className='noteWrap'
        style={{
          top: initialPos.y,
          left: initialPos.x,
        }}
        // ref={wrapperRef}
      >
        <div
          ref={ref}
          className='note'
          style={{
            top: initialPos.y,
            left: initialPos.x,
            maxHeight: isEditing ? "225px" : "200px",
            backgroundColor: theme.primaryBackgroundColor,
            color: theme.color,
            transform: `rotate(${isEditing ? 0 : rotation}deg)`,
          }}
          // onBlur={handleBlur}
        >
          <div>
            {isEditing && (
              <NoteMenu
                theme={theme}
                deleteNoteHandler={deleteNoteHandler}
                themeChangeHandler={themeChangeHandler}
                closeMenu={handleBlur}
                textareaRef={textareaRef}
              />
            )}
          </div>
          <textarea
            ref={textareaRef}
            readOnly={!isEditing}
            // onBlur={handleBlur}
            maxLength={180}
            value={editableContent}
            placeholder='Take a Note...'
            onChange={handleChange}
            autoFocus={isEditing}
            style={{
              backgroundColor: theme.primaryBackgroundColor,
              color: theme.color,
              userSelect: isEditing ? "auto" : "none",
            }}
            onDoubleClick={handleDoubleClick}
            onMouseDown={(e) => {
              if (!isEditing) {
                e.preventDefault();
              }
            }}
          />
          <div
            title='Move Note'
            onMouseDown={onMouseDown}
            className='cornerFold'
            style={{
              borderTopColor: theme.secondryBackgroundColor,
              borderLeftColor: theme.secondryBackgroundColor,
            }}
          ></div>
        </div>
      </div>
    );
  }
);

export default Note;

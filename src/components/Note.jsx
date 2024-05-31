import React, { forwardRef, useRef, useState } from "react";

const Note = forwardRef(
  (
    {
      content = "Take a Note...",
      initialPos = { x: 0, y: 0 },
      onMouseDown,
      contentChangeHandler,
      deleteNoteHandler,
      ...props
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

    return (
      <div
        {...props}
        ref={ref}
        style={{
          backgroundColor: "#ffea78",
          position: "absolute",
          top: initialPos.y,
          left: initialPos.x,
          color: "black",
          maxWidth: "200px",
          maxHeight: "200px",
          minWidth: "200px",
          minHeight: "100px",
          // padding: "1em",
          overflow: "hidden",

          userSelect: "none",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          zIndex: 0,
          transition: "box-shadow 1s ease-in-out",
        }}
      >
        <textarea
          ref={textareaRef}
          readOnly={!isEditing}
          maxLength={180}
          value={editableContent}
          placeholder='Take a Note...'
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          style={{
            padding: "1em",
            width: "100%",
            height: "200px",
            border: "none",
            resize: "none",
            outline: "none",
            backgroundColor: "#ffea78",
            color: "black",
            font: "inherit",
            overflow: "hidden",
            textOverflow: "ellipsis",
            userSelect: isEditing ? "auto" : "none",
          }}
          onClick={handleDoubleClick}
          onMouseDown={(e) => {
            if (!isEditing) {
              e.preventDefault();
            }
          }}
        />

        <div
          onMouseDown={onMouseDown}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 0,
            height: 0,
            borderTop: "10px solid #ffae46",
            borderLeft: "10px solid #ffae46",
            borderBottom: "10px solid rgb(18, 18, 18)",
            borderRight: "10px solid rgb(18, 18, 18)",
            borderRadius: "5px 0px 0px 0px",
            cursor: "move",
          }}
        ></div>
        <div
          onClick={deleteNoteHandler}
          style={{
            position: "absolute",
            top: "3px",
            right: "3px",
            width: "20px",
            height: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
      </div>
    );
  }
);

export default Note;

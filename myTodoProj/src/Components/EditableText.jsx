import React, { useState } from 'react';

const EditableText = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Save the changes or perform any required actions here
  };

  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          className="appearance-none outline-none font-[Nunito] "
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <span className='font-[Nunito] '>{text}</span>
      )}
    </div>
  );
};

export default EditableText;
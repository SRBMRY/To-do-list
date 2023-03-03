import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.func(props.id);
      }}
cursor="pointer"
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;

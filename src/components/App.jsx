import React, { useRef, useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [list, createList] = useState("");
  const [toDoList, setItem] = useState([]);
  const ref = useRef(null);

  function handleChange(event) {
    createList(event.target.value);
  }

  function handleClick() {
    setItem((prevValue) => {
      return [...prevValue, list];
    });
    createList("");
    ref.current.focus();
  }

  function hTouch(id) {
    setItem((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
    ref.current.focus();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input ref={ref} onChange={handleChange} type="text" value={list} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((doItem, index) => (
            <ToDoItem key={index} id={index} func={hTouch} text={doItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React from "react";

function handleCheck() {
  console.log("Clicked!");
}

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" onChange={handleCheck} />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;

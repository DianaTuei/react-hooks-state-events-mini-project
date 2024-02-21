import React from "react";

function Task({text, category, handleDelClick}) {


  return (
    <div className="task" key={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=> handleDelClick(text)} className="delete">X</button>
    </div>
  );
}

export default Task;

import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelClick}) {
  // const[tasksList, setTasksList]= useState(tasks)
  

 
  // console.log(tasksList)

  
  return (
    <div className="tasks">
      {tasks.map((task)=> (
      <Task key={task.text}  handleDelClick= {handleDelClick} text={task.text} category={task.category}/>))}
      
    </div>
  );
}

export default TaskList;

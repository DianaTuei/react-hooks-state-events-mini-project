import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [selectedCategory, setSelectedCategory]= useState(TASKS)
  

  function handleDelClick(taskName){
    console.log(taskName)
    const remainingTasks = selectedCategory.filter((task)=>task.text !== taskName)
    setSelectedCategory(remainingTasks)
  }

  


 function onTaskFormSubmit(formData){
    setSelectedCategory([...selectedCategory, formData])
    console.log(formData)
 }


 function handleFilterCategory(clickedCategory){
    const selectedItem= TASKS.filter((task)=>{
      if(clickedCategory !== "All"){
        return task.category === clickedCategory
      } else {
        return task
      }
    })
    setSelectedCategory(selectedItem)
 }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilterCategory={handleFilterCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={selectedCategory} handleDelClick={handleDelClick} />
    </div>
  );
}

export default App;

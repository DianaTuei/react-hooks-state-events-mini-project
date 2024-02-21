import {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formData, setFormData]= useState({})

  function handleItemAdd(event){
    const name = event.target.name
    const value = event.target.value
    setFormData({...formData, [name]:value})
  }
  console.log(formData)

  return (
    <form className="new-task-form" onSubmit={(e)=> { e.preventDefault(); onTaskFormSubmit(formData)}}>
      <label>
        Details
        <input type="text" name="text" onChange={handleItemAdd}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleItemAdd}>
          {categories.map((category)=> {
            if(category !== "All"){
              return (
                <>
                <option key={category} value={category}>{category}</option>
                </>
              )
            }
          })}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

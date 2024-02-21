import React, { useState } from "react";


function CategoryFilter({categories, handleFilterCategory}) {
  const[selected,setSelected]=useState("")
 
  function handleCategoryClick(clickedCategory){
    setSelected(clickedCategory)
    handleFilterCategory(clickedCategory)
}



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>(
        <button key={category} className={selected === category ? "selected" : ""} onClick={()=> handleCategoryClick(category)}>{category}</button>
      ))}

      {/* render <button> elements for each category here */}
    
    </div>
  );
}

export default CategoryFilter;

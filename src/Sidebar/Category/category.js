import React from "react";
import Input from "../../Components/input";


function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value={""} name="category"/>
          <span className="select"></span>All
        </label>
        <Input
         handleChange={handleChange}
        value={"wool"}
        title={"Woolen"}
        name={"category"}
        />
           <Input
         handleChange={handleChange}
        value={"leather"}
        title={"Leather"}
        name={"category"}
       
        />
           <Input
         handleChange={handleChange}
        value={"cotton"}
        title={"Cotton"}
        name={"category"}
        />
           <Input
         handleChange={handleChange}
        value={"silk"}
        title={"Silk"}
        name={"category"}
        />
      </div>
    </div>
  );
}

export default Category;

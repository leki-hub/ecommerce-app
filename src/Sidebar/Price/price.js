import React from "react";
// import "./price.css";
import Input from "../../Components/input";

export default function Price({ handleChange }) {
  return (
    <div className="price-container">
      <h2 className="sidebar-title price-title"> Price </h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value={""} name="price" />
        <span className="select"></span>All
      </label>
      <Input
       handleChange={handleChange} 
        value={60}
        title={"$0-$70"}
        name={"price"}
      
      />
       <Input
       handleChange={handleChange} 
        value={100}
        title={"$70-120"}
        name={"price"}
      
      />
       <Input
       handleChange={handleChange} 
        value={150}
        title={"$120-$170"}
        name={"price"}
      
      />
       <Input
       handleChange={handleChange} 
        value={200}
        title={"Over $170"}
        name={"price"}
      
      />
    </div>
  );
}

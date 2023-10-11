import React from 'react'
import Input from '../../Components/input';

export default function Colors ({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="color" />
          <span className="select all"></span>
          All
        </label>

  
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="color"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="color"
          color="green"
        />
              <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="color"
          color="black"
         
        />
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="color"
          />
          <span
            className="select"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};


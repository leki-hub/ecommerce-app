import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

export default function Navigation ({ handleInputChange, query })  {
    return (
      <nav>
        <div className="search-container">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search."
          />
        </div>
        <div className="nav-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href='#'>
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </nav>
    );
  };
  
  

import Card from "./Components/card";
import Navigation from "./Navigation/nav";
import Products from "./Products/products";
import Recommended from "./Recommended/recommended";
import Sidebar from "./Sidebar/sidebar";
import { useState } from "react";
import products from "./ItemsDatabase/data"
import uuid from 'react-uuid';
import "./index.css"
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

// input filter
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  //Radio Filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //Button Filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, search) {
    let filteredProducts = products;

    // Filtering Input Items
    if (search) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          company === selected ||
          newPrice === selected ||
          category === selected ||
          color === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ image, title, star, starHalf,reviews, oldPrice, newPrice }) => (
        <Card
          key={uuid()}
          img={image}
          title={title}
          star={star}
          HalfStar ={starHalf}
          reviews={reviews}
          oldPrice={oldPrice}
          newPrice={newPrice}
         
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, search);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={search} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
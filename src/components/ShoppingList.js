import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState('')

  
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearchQuery(event.target.value)
  }

  
 
  const search = items.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const itemsToDisplay = search.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

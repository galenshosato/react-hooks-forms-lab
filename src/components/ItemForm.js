import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState('Name:')
  const [itemCategory, setNewCategory] = useState("Produce")

  function onNameChange (event) {
    setItemName(event.target.value)
  }

  function onFormCategoryChange (event) {
    setNewCategory(event.target.value)
  }


  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory
  }

  function createNewItem(event) {
    event.preventDefault()
    setItemName(event.target.name.value)
    setNewCategory(event.target.category.value)
    onItemFormSubmit(newItem)
  }
  


  return (
    <form className="NewItem" onSubmit={createNewItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onFormCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

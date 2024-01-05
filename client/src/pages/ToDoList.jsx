import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    // Fetch items when the component mounts
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch('http://localhost:8080/getitems')
      .then(response => response.json())
      .then(data => {
        if (data.items) {
          setItems(data.items);
        } else {
          console.error('Error getting items:', data.error);
        }
      })
      .catch(error => console.error('Error getting items:', error));
  };

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = async () => {
    try {
      const response = await fetch('http://localhost:8080/additem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newItem }),
      });

      if (response.ok) {
        console.log('Item added successfully');
        // Fetch the updated items after adding a new item
        fetchItems();
        // Clear the input field
        setNewItem('');
      } else {
        const errorMessage = await response.text();
        console.error('Error adding item:', errorMessage);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="todo-container">
      <h1>To Do</h1>
      <p>This is the to-do list page</p>

      <ul className="todo-list">
        {items.map((item, index) => (
          <li key={index} className="todo-list-item">{item.task}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={handleNewItemChange}
          placeholder="Add a new item"
          className="todo-form"
        />
        <button onClick={handleAddItem} className="todo-button">Add</button>
      </div>
    </div>
  );
};

export default ToDoList;


import React, { useState, useEffect } from 'react';


const myAPI = 'https://jsonplaceholder.typicode.com/users'
export default function MyComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://my-api.com/items')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const editItem = (index, item) => {
    const newItems = [...items];
    newItems[index] = item;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={() => addItem({ name: 'New Item' })}>Add Item</button>
      <table>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                <button
                  onClick={() => editItem(index, { name: 'Edited Item' })}
                >
                  Edit
                </button>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

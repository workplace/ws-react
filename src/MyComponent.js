import React, { useState, useEffect } from 'react';

const myAPI = 'https://jsonplaceholder.typicode.com/users';

export default function MyComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(myAPI)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {items?.map((item, id) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client"
import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Öğe 1', condition: true },
    { id: 2, name: 'Öğe 2', condition: false },
    { id: 3, name: 'Öğe 3', condition: true },
    // ... diğer veri öğeleri
  ]);

  const handleClick = (id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, condition: !item.condition };
        }
        return item;
      });
    });
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleClick(item.id)} disabled={!item.condition}>
            {item.condition ? 'Açık' : 'Kapalı'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;

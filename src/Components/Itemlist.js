import React from 'react';

export default function Itemlist(props) {
  
  return (
  
    <div>
      <h1>List Items</h1>
      {props.data.map(candy => (
        <ul key={candy.id}>
        <li> 
        {candy.name}
        {candy.price}
        {candy.descri}
        </li>
        <button>Add 1</button>
        <button>Add 2</button>
        <button>Add 3</button>
        </ul>
      ))}
    </div>
  );
}

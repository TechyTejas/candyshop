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
        </ul>
      ))}
    </div>
  );
}
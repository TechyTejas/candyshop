import React from 'react';

export default function Itemlist(props) {
    const candylist = props.data.map(candy => (
        <li key={candy.id}>
        {candy.name} - {candy.price} - {candy.descri}
      </li> 
    ));

    return (
        <div>
            <h1>List Items</h1>
            <ul>{candylist}</ul>

            {props.data.length > 0 && (
                <div>
                    <button>Add 1</button>
                    <button>Add 2</button>
                    <button>Add 3</button>
                </div>
            )}
        </div>
    );
}

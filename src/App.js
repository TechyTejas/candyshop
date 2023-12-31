import React,{useState} from "react"
import './App.css';
import Structure from './Components/Structure';
import Itemlist from './Components/Itemlist';


function App() {
  const[getdata,setGetdata]=useState([]);

  function addCandyHandler (name,descri,price,id){
    console.log(name,descri,price)
    setGetdata ( prevData =>{
              return [...prevData,
                {id : Math.random().toString(),
                  name: name,
                 price : price,
                 descri: descri
              }]
        })    
  }


  return (
    <div >    
      <Structure onAdd={addCandyHandler}/>
      <Itemlist data={getdata}/>
     
    </div>
  );
}

export default App;

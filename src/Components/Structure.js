import React,{useState} from "react";
import classes from './Structure.module.css'
import Modal from "../UI/Modal";

export default function Structure(props) {
  const[candyName,setCandyName]=useState("");
  const[description,setDescription]=useState("");
  const[enterPrice,setEnterPrice]=useState("");

  function CandyHandler (event){
   setCandyName(event.target.value)
  }
  function PriceHandler (event){
   setEnterPrice(event.target.value)
}
function DescriHandler (event){
  setDescription(event.target.value)
}

  function submitHandler(event){
    event.preventDefault();
    
    const OrderDetails={   
      name:candyName,
      price:enterPrice,
      descri:description
    }
    props.onAdd(OrderDetails.name,OrderDetails.price,OrderDetails.descri);  // we lift state here :}

  
    setCandyName("")
    setDescription("")
    setEnterPrice("") 
  }

  const[open,setOpen]=useState(false);
  function modalHandler(){
       setOpen(true);
  }
 
  return (
    <React.Fragment>
      <div className={classes.navbar}>
      <form className={classes.navbar__form} onSubmit={submitHandler}> 
        <label>Enter Candy Name</label>
        <input value={candyName} onChange={CandyHandler} />

        <label>Enter Description</label>
        <input value={description} onChange={DescriHandler}/>

        <label>Enter Price</label>
        <input type="number" value={enterPrice} onChange={PriceHandler}/>

        <button type="submit">Add</button>
        <button className={classes.button} onClick={modalHandler}>Show Cart</button>
        {open &&(<Modal />)}  
      </form>
      </div>
    </React.Fragment>
  );
}



//modal is opening here itself
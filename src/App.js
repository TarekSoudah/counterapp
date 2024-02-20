import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  
  const [shoppingItems, setShoppingItems] = useState ([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputeChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if(inputValue.trim() !== "")
    {
      setShoppingItems([...shoppingItems, {id: Date.now(), text: inputValue }]);
    }
    setInputValue("");

  };

  const handleDelete = (id) => {
    const filterShoppingItems = shoppingItems.filter(shoppingItem => shoppingItem.id !== id);
    setShoppingItems(filterShoppingItems);
  };



  const [number, setNumber] = useState(0);

  function increment(){
    setNumber((previousValue) => previousValue +1)
  }

  function reset(){
    setNumber(0)
  }

  function decrement(){
    setNumber((previousValue) => previousValue -1)
  }
  return (
    <div className="App">
      <header>
        <h3>Shopping Cart</h3>
        
        <br></br>
        <hr></hr>
        <br></br>
        
        </header>

        <div className="wrapper">
          <input 
          type='text' 
          placeholder='Enter new item' 
          value={inputValue} 
          onChange={handleInputeChange}/>
          <button onClick={handleAdd}>Add</button>
          

          <br></br>
          <br></br>
          <hr></hr>
        
          <ul>
            {shoppingItems.map(shoppingItem => (
              <li key={shoppingItem.id}>
                
                <span>Item Name : {shoppingItem.text}</span>
                <p>Quantity : {number}</p>
                
                
                <br></br>
                <button onClick={increment}>+</button>
                <button onClick={reset}>reset</button>
                <button onClick={decrement}>-</button>
                <button onClick={() => handleDelete(shoppingItem.id)}>Delete</button>
                <br></br>
                <br></br>
                <hr></hr>
              </li>
              
            ))}
            
          </ul>

          </div>
          
    </div>
  );

  /*return (
    <div className="App">
      <header>
        <h3>Shopping Cart</h3>
        <p>Total Number : {number}</p>
        <br></br>
        <hr></hr>
        <br></br>
        
        </header>

        <div className="wrapper">
          <input 
          type='text' 
          placeholder='Enter new item' 
          value={inputValue} 
          onChange={handleInputeChange}/>
          <button onClick={handleAdd}>Add</button>
          <button onClick={reset}>reset</button>

          <br></br>
          <br></br>
          <hr></hr>
        
          <ul>
            {shoppingItems.map(shoppingItem => (
              <li key={shoppingItem.id}>
                
                <span>Item Name : {shoppingItem.text}</span>
                
                
                <br></br>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={() => handleDelete(shoppingItem.id)}>Delete</button>
                <br></br>
                <br></br>
                <hr></hr>
              </li>
              
            ))}
            
          </ul>

          </div>
          
    </div>
  );*/



}

export default App;

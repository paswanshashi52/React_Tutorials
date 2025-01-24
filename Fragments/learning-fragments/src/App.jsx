import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Fruits"];

if (foodItems.length==0){
  return <h1>Food List is empty</h1>
} 


  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group ">
        {foodItems.map((item) => (
          <li key={item}className="list-group-item">{item} </li>
        ))}
      </ul>
    </>
  );
}

export default App;

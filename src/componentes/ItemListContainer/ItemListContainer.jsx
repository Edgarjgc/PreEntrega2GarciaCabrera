import React from "react";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div class="ItemListContainer">
      <h1>{props.greeting}</h1>
    </div>
  );
}

export default ItemListContainer;
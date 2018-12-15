import React, {Component} from 'react';

const Card = (props) => {
  let className = 'card-link';
  const handleClick = (event) => {
  }
  const handleHover = (event) => {
  }
  const handleDragStart = (event) => {
    event.currentTarget.classList.add("card-link--dragging");
    event.dataTransfer.setData("card", JSON.stringify(props.card));
  }
  const handleDragEnd = (event) => {
    event.currentTarget.classList.remove("card-link--dragging");
  }
  return (
    <li className={className}
      onClick={handleClick}
      onPointerOver={handleHover}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable
    >
      {props.card.name}
    </li>
  )
}

export default Card;
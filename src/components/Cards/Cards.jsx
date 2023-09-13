/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleAddPlayer}) => {
   const [cards, setCards] = useState([]);

   useEffect(()=>{
      fetch ('data.json')
      .then(res => res.json())
      .then(data => setCards(data))
   },[])


   return (
      <div className="md:w-[70%] p-4">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{cards.map(card => <Card card={card} key={card.id} handleAddPlayer={handleAddPlayer}></Card>)}</div>
      </div>
   );
};

export default Cards;
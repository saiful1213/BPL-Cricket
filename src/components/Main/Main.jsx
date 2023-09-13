/* eslint-disable react/jsx-key */
import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";

const Main = () => {

   const [selectedPlayers, setSelectedPlayers] = useState([]);
   const [cost, setCost] = useState(0);

   const handleAddPlayer = card => {
      const isExist = selectedPlayers.find(element => element.id === card.id);

      let cost = card.salary;

      if (isExist) {
         return alert('player exist')
      } else {
         selectedPlayers.forEach(player => {
            cost += player.salary;
         })
         if(cost > 4000){
            return alert('you dont have enough money');
         }
         setCost(cost);
         setSelectedPlayers([...selectedPlayers, card]);
      }
   }

   return (
      <div className='flex flex-col sm:flex-row justify-around'>
         <Cards handleAddPlayer={handleAddPlayer}></Cards>
         <Cart selectedPlayer={selectedPlayers} cost={cost}></Cart>
      </div>
   )
}

export default Main;
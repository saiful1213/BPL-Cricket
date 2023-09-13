/* eslint-disable react/prop-types */

import Players from "../Players/Players";

const Cart = ({selectedPlayer, cost}) => {
  
   return (
      <div className="md:w-[30%] text-center p-4">
         <h2 className="text-green-500 font-bold text-2xl mb-2">Total Budget: $4000</h2>
         <h2 className="text-red-500 font-bold text-2xl">Total Cost: ${cost}</h2>

         <div className="mt-16">{selectedPlayer.map((player, idx) => <Players key={player.id} idx={idx} player={player}></Players>)}</div>
      </div>
   );
};

export default Cart;
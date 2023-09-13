/* eslint-disable react/prop-types */

const Card = ({ card, handleAddPlayer }) => {
   const {name, country, salary, age, image } = card;
   return (
      <div className="text-white border border-gray-500 py-3 rounded-lg space-y-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">

         <img src={image} className="w-1/2 rounded-full h-36 mx-auto" />
         <div className="pl-8 space-y-1">
            <h2 className="text-xl font-bold">Name: {name}</h2>
            <p className="font-semibold">Age: {age}</p>
            <p className="font-semibold">Country: {country}</p>
            <p className="font-semibold">Base Price: ${salary}</p>
         </div>
         <button className="btn bg-gradient-to-r from-red-700 to-green-700 text-white border-0 mx-auto block" onClick={()=>{handleAddPlayer(card)}}>Add Player</button>
      </div>
   );
};

export default Card;
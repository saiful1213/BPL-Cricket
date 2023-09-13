/* eslint-disable react/prop-types */
const Players = ({player, idx}) => {
   const {name} = player
   return (
      <div className="text-white bg-green-600 mt-3 rounded-lg py-1">
         <h2><span>{idx+1}. </span>{name}</h2>
      </div>
   );
};

export default Players;
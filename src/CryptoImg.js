import React from "react";

const ImgCard = (props) => {
  return (
    <div className="img">
      <img src={props.url} alt={props.name} height="50px" width="50px" />
      <p>Name:{props.name}</p>
      <p>Rank:{props.rank}</p>
      <p>Price:{props.price}</p>
      <p>MarketCap:{props.marketCap}</p>
    </div>
  );
};

export default ImgCard;

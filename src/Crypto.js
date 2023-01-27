import React, { useState } from "react";
import "./Crypto.css";
import axios from "axios";
import CryptoImg from "./CryptoImg";

const Crypto = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  React.useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100")
      .then((res) => setData(res.data.coins));
  }, []);
  return (
    <div className="crypto-price">
      <center>
        <h1>Cryptocurrency</h1>
        <input
          type="text"
          value={search}
          placeholder="search"
          onChange={handleChange}
        />
      </center>
      {data.length > 0 && (
        <div className="crypto">
          {data
            .filter((crypto) =>
              crypto.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((crypto) => (
              <div className="rowimage">
                <center>
                  <CryptoImg
                    name={crypto.name}
                    rank={crypto.rank}
                    price={crypto.price}
                    marketCap={crypto.marketCap}
                    key={crypto.id}
                    url={crypto.icon}
                  />
                </center>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Crypto;

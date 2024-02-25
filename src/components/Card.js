import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-green dib pa3 ma2 grow br2 shadow-5">
      <img src={`https://robohash.org/${id}?200*200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

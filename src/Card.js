import './Card.css';
// import React, {Fragment} from "react";


const Card = ({name, email,id}) => {
  return(
    <div className="Card tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src= {`https://robohash.org/${id}`} alt="robots" srcSet="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>

  );
}



export default Card;

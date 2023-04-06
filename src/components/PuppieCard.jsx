import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const PuppieCard = (pup) => {
    const nav = useNavigate();
    return (
        <div className="fullCard">
        <div className="MainCard">
            <div className="img">
                <img src={pup.imageUrl} alt="image" />
                </div>
                <div className="nameId">
                <h1 className="Name">{pup.name}</h1>
                <h1 className="Id">Id: {pup.id}</h1>
                </div>           
            <div>
                <h3 className="Breed">{pup.breed}</h3>
            </div>
            <button className="seeDetails" onClick={() => nav(`/${pup.id}`)}>See Details</button>
        </div>
    </div>
    );
};

export default PuppieCard;
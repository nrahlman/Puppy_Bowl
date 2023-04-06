import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const URL = "https://fsa-puppy-bowl.herokuapp.com/api/2303-ftb-mt-web-ft";
import { Link } from "react-router-dom";

const SingleDog = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        const fetchPuppy = async () => {
            const response = await fetch(`${URL}/players/${id}`);
            console.log(response);
            const { data: { player } } = await response.json();
            setPlayer(player);
        }
        fetchPuppy();
    }, []);
    return (
        <div className="singlePage">
            <div>
                <Link to="/" className="homeLink">Home</Link>
            </div>
            <div className="singlePuppieCard">
                <img className="pic" src={player.imageUrl} />
                <h3 className="name">{`Name: ${player.name}`}</h3>
                <h4 className="breed">{`Breed: ${player.breed}`}</h4>
                <h5 className="id">{`Player Id: ${player.id}`}</h5>
                <h5 className="teamId">{`Team Id: ${player.teamId}`}</h5>

            </div>
        </div>
    );

};

export default SingleDog;
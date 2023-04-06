import { React, useEffect, useState } from "react";
import { fetchAllPuppies } from "../API/FetchPuppies";
import PuppieCard from "./PuppieCard";
import "../style.css"
import SearchBar from "./Search";

const Home = () => {
    const [players, setPlayers] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getAllPuppies = async () => {
            const players = await fetchAllPuppies();
            setPlayers(players);
        };
        getAllPuppies();
    }, [])
    const mapPuppy = players.map((pup) => {
        return (
            <div className="AllPuppies" key={pup.id}>
                <PuppieCard
                    id={pup.id}
                    name={pup.name}
                    imageUrl={pup.imageUrl}
                    breed={pup.breed}
                    
                />
            </div>
        )
    })
    return (<>
    <SearchBar players={players} setPlayers={setPlayers} search={search} setSearch={setSearch}/>
    <button className="refresh" onClick={() => window.location.reload(false)}>Refresh</button> {/*to reset page after searching for a dog */}
    {mapPuppy}
        </>)
}

export default Home;
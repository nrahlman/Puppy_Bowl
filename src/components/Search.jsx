import { fetchAllPuppies } from "../API/FetchPuppies";
import { useEffect } from "react";

import React from 'react';

const SearchBar = ({ players, setPlayers, search, setSearch }) => {
    
    useEffect(() => {
        setSearch(search)
    }, [players])

    return (
        <div className="searchBar">
            <input className="search" type="text" placeholder="Search" onChange={(event) => {
                setSearch(event.target.value)

                let filterPlayers = players.filter((player) => {
                    if (player.name.includes(search)) {
                        return true;
                    } else {
                        return false;
                    }
                })
                setPlayers(filterPlayers);

                if (search == "") {
                    const getAllPuppies = async () => {
                        const players = await fetchAllPuppies();
                        setPlayers(players);
                    }
                    getAllPuppies();

                }
            }} />
        </div>
    );
};

export default SearchBar;
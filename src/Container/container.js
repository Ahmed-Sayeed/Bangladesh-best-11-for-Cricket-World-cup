import React from 'react';
import { useState, useEffect } from 'react';
import Cart from '../cart/cart';
import SelectedPlayers from '../selectedPlayers/selectedPlayers';
import './container.css'

const Container = ()=>{
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('./tools.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[]);

    // this function is to handel selection button 
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const selectionHandler = playerInfo =>{
        const selecteds = [...selectedPlayers, playerInfo];
        if(selecteds.length !== 4){
            setSelectedPlayers(selecteds);
        }else{
            alert('11 Players have been taiken !!!')
        }
    }
    return(
        <div className='container'>
            <div className='players-card'>
                {
                    players.map(player => <Cart
                    key={player.match_played}
                    player = {player}
                    selectionHandler = {selectionHandler}
                    ></Cart>)
                }
            </div>
            <div>
                <SelectedPlayers
                select = {selectedPlayers}
                ></SelectedPlayers>
            </div>
        </div>

    )
}

export default Container;
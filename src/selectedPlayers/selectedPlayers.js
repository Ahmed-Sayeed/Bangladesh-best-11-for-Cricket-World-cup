import React from 'react';
import './selectedPlayers.css'

const SelectedPlayers = props =>{
    let selections = (props.select);  

    return(
        <dvi className='selected-container'>
            <div className='container-head'>
                <h1>Selected Players</h1>
                <h5>Total selected: {selections.length}</h5>
            </div>
            {
                selections.map((player)=>
                <li key={player.strick_rate} className='selected-names'>{player.name}</li> 
                 )
            }
        </dvi>
    )
}

export default SelectedPlayers;
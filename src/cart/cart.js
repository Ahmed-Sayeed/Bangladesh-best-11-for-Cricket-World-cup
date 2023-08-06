import React from 'react';
import './cart.css';

const Cart = (props)=>{
    const selectionHandler = (props.selectionHandler);
    const {name, status, strick_rate, match_played, profile} = (props.player)
    return(
        <div className='cart-container'>
            <div className='cart'>
                <div className='cart-header'>
                    <img src={profile}></img>
                    <h2>{name}</h2>
                </div>
                <div className='cart-body'>
                    <h4>{status}</h4>
                    <h4>Match Played: {match_played}</h4>
                    <h4>Strick Rate: {strick_rate}</h4>
                </div>
                <div className='cart-footer'>
                    <button className='cart-btn'
                    onClick={()=> (selectionHandler(props.player))}>Select</button>
                </div>
                
            </div>
        </div>
    )
}

export default Cart;
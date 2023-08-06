import React from 'react';
import './header.css';
import cup from '../images/world-cup.png'
const Header = ()=> {
    return(
        <div className='header-container'>
            <div className='world-cup-area'>
                <img src={cup}></img>
            </div>
            <div className='description-area'>
                <h1>Bangladesh Cricket Team For</h1>
                <h1>World Cup 2023 </h1>
                <h3>Choose your Best 11 Of Bangladesh Cricket Team for World Cup 2023</h3>
            </div>
        </div>
    )
}


export default Header;
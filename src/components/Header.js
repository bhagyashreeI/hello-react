import React from 'react';

export const Header = (props) => {
    return (
        <div className='header'>
            <div className='logo'>
                <div className="logoitem">
                <img src={props.logo} height="100" />
                    <span className="caption"><i>Order-Eat-Repeat</i></span>
                </div>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>My Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
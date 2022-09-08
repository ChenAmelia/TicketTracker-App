import React from 'react';
import './Nav.scss';
import menu from '../../assets/images/menu-icon.png';
import settings from '../../assets/images/settings-icon.png';

const Nav = () => {
  return (
    <nav className='nav'>
        <img src={menu} className='nav__item' alt='menu icon'/>
        <h2 className='nav__heading'>Ticket Tracker</h2>
        <img src={settings} className='nav__item' alt='settings icon'/>
    </nav>
  )
}
export default Nav
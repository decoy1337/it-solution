import React from 'react';
import './Navbar.scss';

import Menu from '../Menu/Menu';
function NavBar(): JSX.Element {
  return (
    <div className="NavBar">
      <img src="./public/1.png" alt="logo" className="logo" />
      <ul className="navBar">
        <ol className="AverageNav">
          <li>
            <a href="#japan" className='Korea'>Авто из Японии</a>
          </li>
          <li>
            <a href="#China" className='China'>Авто из Китая</a>
          </li>
          <li>
            <a href="#Korea" className='Korea'>Авто из Кореи</a>
          </li>
          <li>
            <Menu />
          </li>
        </ol>
        <ul className="contact">
          <li>
            <img src="/public/3.jpg" alt="watsap" className="watsap" />
          </li>
          <li>
            <img src="/public/2.png" alt="telegram" className="telegram" />
          </li>
          <li>+7 123 450 78 90</li>
        </ul>
      </ul>
    </div>
  );
}

export default NavBar;

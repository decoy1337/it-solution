import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Off = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={Off}>
        О нас
      </div>
      {isOpen && (
        <div className="menu" style={{position:'absolute'}}>
          <div><a href="#Company" className='mena'>Компания</a></div>
          <div><a href="#reviews" className='mena'>Отзывы</a></div>
          <div><a href="#contacts" className='mena'>Контакты</a></div>
        </div>
      )}
    </div>
  );
};

export default Menu;

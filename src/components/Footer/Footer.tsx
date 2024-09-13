import React from 'react';
import './Footer.scss';
function Footer(): JSX.Element {
  return (
    <div className="Footer">
      <footer className="footer">
        <div className="footer-content">
        <img src="./public/1.png" alt="logo" className="logofoter" />
          <div className="footer-links">
            <a href="#about">О нас</a>
            <a href="#services">Каталог Авто</a>
          </div>
          <div>Авто из Японии
          <ul className='auto3'>
              <li className='li'>Toyota</li>
              <li className='li'>Nissan</li>
              <li className='li'>Mazda</li>
              <li className='li'>Mitsubishi</li>
            </ul>
          </div>
          <div>Авто из Китая
          <ul className='auto2'>
              <li className='li'>Changan</li>
              <li className='li'>Exeed</li>
              <li className='li'>Geely</li>
              <li className='li'>Chery</li>
            </ul>
          </div>
          <div>
            Авто из Кореи
            <ul className='auto1'>
              <li className='li'>Hyundai</li>
              <li className='li'>Kia</li>
              <li className='li'>Daewoo</li>
              <li className='li'>Samsung</li>
            </ul>
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AutoCenter. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

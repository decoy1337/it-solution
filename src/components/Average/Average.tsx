import React, { useState } from 'react';
import './Average.scss';
function Average(): JSX.Element {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const regexNumber = /^\+?[1-9]\d{1,14}$/;
    const regexName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/;
    if (regexNumber.test(number)) {
      if (regexName.test(name)) {
        alert(`Форма отправлена на имя ${name}`);
      }
    }
  };
  return (
    <div className="Average">
    <div >
      <div className="Photo">
        <img src="./public/Frame.png" />
      </div>
      <div className="Auto">
        <div className="Autojapan" id='japan'>Автомобили из японии</div>
        <ul className="all">
          <li>Toyota, Honda, Nissan и другие автомобили</li>
          <li className="watchAll">
            Смотреть все
            <img
              src="https://w7.pngwing.com/pngs/213/485/png-transparent-arrow-double-right-arrows-icon-thumbnail.png"
              alt="strelka"
              className="strelka"
            />
          </li>
        </ul>
      </div>
      <div className="autoCheck">
        <img src="./public/wrapper.png" />
        <button className='button1wrapper'>
          <a href="#contacts">Оставить заявку</a>
        </button>
        <button className='button2wrapper'>
        <a href="#contacts">Оставить заявку</a>
        </button>
        <button className='button3wrapper'>
        <a href="#contacts">Оставить заявку</a>
        </button>
        <button className='button4wrapper'>
        <a href="#contacts">Оставить заявку</a>
        </button>
        <button className='button5wrapper'>
        <a href="#contacts">Оставить заявку</a>
        </button>
        <button className='button6wrapper'>
        <a href="#contacts">Оставить заявку</a>
        </button>
        <button className='button7wrapper'>
        <a href="#contacts">Оставить заявку</a>
        </button>
        <button className='button8wrapper'>
        <a href="#contacts">Оставить заявку</a>
        </button>
      </div>
      <div className="frame2" id='Korea'>
        <img src="./public/Frame2.png" id='China'/>
      </div>
      <div className="frame3" id='Company'>
        <img src="./public/Frame3.png" />
      </div>
      <div >
        <button className="sell">
          Расчитать Стоимость
        </button>
      </div>
      <div className="feedback" id='reviews'>
        <img src="./public/Feedback.png" />
      </div>
      <div className="formCall" id='contacts'>
        <div className="color">
          <div className='infoContact'>Контактная информация</div>
          <div>Оставьте свою заявку и наш менеджер свяжется с вами для уточнения деталей.</div>
        </div>
        <div className="contactInfo">
          <ul className="call">
            <li>Позвонить</li>
            <li>+7 123 456 78 90</li>
          </ul>
          <ul className="call2">
            <li>Написать</li>
            <li>Info@example.com</li>
          </ul>
          <ul className="call3">
            <li>Адрес</li>
            <li>123 Main Street,Tokyo,Japan</li>
          </ul>
        </div>
        <div className="cards">
          <ul className="cards1">
            <li>
              <img src="./public/4.jpg" alt="2gis" className="gis" />
            </li>
            <li><a href="https://2gis.ru/sochi/search/%D0%9B%D0%BE%D0%BE">Мы на 2гис</a></li>
          </ul>
          <ul className="cards2">
            <li>
              <img src="./public/5.png" alt="Yandex" className="Yandex" />
            </li>
            <li><a href="https://yandex.ru/maps/11406/artem/?ll=132.180335%2C43.353050&z=13">Мы на Яндекс картах</a></li>
          </ul>
          <ul className="cards3">
            <li>
              <img src="./public/6.png" alt="VL" className="VL" />
            </li>
            <li><a href="https://www.vl.ru/">VL справочник</a></li>
          </ul>
        </div>
        <div className="form">
          <div className="formName">Оставить заявку</div>
          <div>
            <form onSubmit={onHandleSubmit}>
              <ul className="name">
                <li>
                  <li>Имя</li>
                  <input
                  className='nameinput'
                    placeholder="Введите имя"
                    type="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
              </ul>
              <ul className="number">
                <li>Телефон(обязательно)</li>
                <li>
                  <input
                  className='numberinput'
                    placeholder="Введите номер"
                    type="text"
                    name="number"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </li>
              </ul>
              <ul className="question">
                <li>Уточните свой вопрос</li>
                <li>
                  <input type="text" placeholder="введите текст сообщения"  className='questioninput'/>
                </li>
              </ul>
              <ul>
                <li>
                  <input type="checkbox" />
                </li>
                <li>С <a href="https://www.google.com/search?q=%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0+%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D1%82+%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8&oq=%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0+%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D1%82+%D0%BA%D0%BE%D0%BD%D1%84&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAHSAQkxNTU2OWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8" className='confi'>правилами политики</a> </li>
                <li><a href="https://www.google.com/search?q=%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0+%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D1%82+%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8&oq=%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0+%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D1%82+%D0%BA%D0%BE%D0%BD%D1%84&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAHSAQkxNTU2OWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8" className='confi'>конфиденциальности</a > ознакомлен.</li>
              </ul>
              <button type="submit" className="button">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Average;

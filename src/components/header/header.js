import React from 'react';
import './header.css';
import { GoLocation } from 'react-icons/go';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';

function Header() {
  return (
    <>
    <div className='toolbar'>
      <div className='container'>
        <div className='toolbar__item center'>
        <div className='toolbar__item-left center'>
          <span className='toolbar__address center'><GoLocation className='toolbar__icon address'/>Restaurant St,Delicious City,London 9578,UK</span>
            <span className='toolbar__spread'></span>
            <span className='toobar__gmail center'><AiOutlineClockCircle className='toolbar__icon time'/>Daily:8.00am to 10.00 pm</span>
          </div>
          <div className='toolbar__item-right center'>
            <span className='toolbar__phone center'><BsTelephone className='toolbar__icon phone'/>+1 123 456 7890</span>
            <span className='toolbar__spread'></span>
            <span className='toobar__gmail center'><CgMail className='toolbar__icon gmail'/>booking@restaurant.com</span>
          </div>
          </div>
      </div>
    </div>
  <header className='header'>
    <nav className='header__nav'></nav>
    <div className='header__content'></div>
  </header>
   </>
  );
}

export default Header;

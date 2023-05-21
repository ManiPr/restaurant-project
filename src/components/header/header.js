import React from 'react';
import './header.css'
function Header() {
  return (
    <>
    <div className='toolbar'>
      <div className='container'>
        <div className='toolbar__item center'>
          <div className='toolbar__item-right center'>
            <span className='toolbar__phone'>+1 123 456 7890</span>
            <span className='toolbar__icon'></span>
            <span className='toobar__gmail'>booking@restaurant</span>
          </div>
          <div className='toolbar__item-left center'>
          <span className='toolbar__address'>Restaurant St,Delicious City,London 9578,UK</span>
            <span className='toolbar__icon'></span>
            <span className='toobar__gmail'>Daily:8.00am to 10.00 pm</span>
          </div>
        </div>
      </div>
    </div>
    <hr></hr>
  <header className='header'>
    <nav className='header__nav'></nav>
    <div className='header__content'></div>
  </header>
   </>
  );
}

export default Header;

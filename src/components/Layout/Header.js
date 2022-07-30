import React, { useEffect, useState } from "react";

import mealImg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [isScroll, setIsScroll]= useState(false);
  let position = window.scrollY;

  const scrollWindowHanlder = () => {
    if (window.scrollY >= 30) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
    console.log(window.scrollY);
  }

  window.addEventListener('scroll', scrollWindowHanlder) 

  return (
    <React.Fragment>
      <header className={`${classes.header} ${isScroll? classes.shrink: ''}`}>
        <h1 className={`${isScroll? classes.shrink: ''}`}>React Meals</h1>
        <HeaderCartButton onOpen={props.onOpen} isShrink={isScroll}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt={'A table full of delicious food'}></img>
      </div>
    </React.Fragment>
  );
};

export default Header;

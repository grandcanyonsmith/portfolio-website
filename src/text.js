import logo from './logo.svg';
import './App.css';
import {Image, Container} from 'react-bootstrap'
import Music from '../src/music'
import { layoutGenerator } from 'react-break';
import { motion } from "framer-motion"
import React from 'react';
import '../src/text_css.scss'



export default class Texty extends React.Component {
    render() {
  return (

    <div style={{display:"flex", flexDirection:"row", justifyContent:"center" }}>
        

<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>

<div class="content">
  <div class="content__container">
    <p class="content__container__text">
      PASSIONATE
    </p>
    
    <ul class="content__container__list">
      <li class="content__container__list__item">DEVELOPER.</li>
      <li class="content__container__list__item">CREATOR.</li>
      <li class="content__container__list__item">DESIGNER.</li>
      <li class="content__container__list__item">MANAGER.</li>
    </ul>
  </div>
</div>
    </div>

  );
}
};

// export default Texty;






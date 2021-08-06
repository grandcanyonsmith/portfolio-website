import logo from './logo.svg';
import './App.css';
import {Image, Container} from 'react-bootstrap'
import Music from '../src/music'
import { layoutGenerator } from 'react-break';
import { motion } from "framer-motion"
import Texty from '../src/text'



const layout = layoutGenerator({

  mobile: 0,
  desktop: 950,
});

const OnMobile = layout.is('mobile');
// const OnAtLeastTablet = layout.isAtLeast('tablet');
// const OnAtMostPhablet = layout.isAtMost('phablet');
const OnDesktop = layout.is('desktop');


function App() {
  return (
    <div className="App">
      
      <OnDesktop>
      <header>
        
        <div className="logo-intro">
        <div className="header-logo" column>
          
        <h1>CANYON SMITH</h1>
        
        <h1 className="sub-title">PORTFOLIO WEBSITE.</h1>
        {/* <div style={{display:"flex"}}> */}
        {/* <Texty/> */}
        {/* </div> */}

        </div>
        </div>
        <div className="info-container">
          <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}> 
            <Texty/>
          </div>
        <div className="social-media-icons">
      <a href="https://github.com/grandcanyonsmith/" class="fa fa-github"></a>
      <a  href="https://www.linkedin.com/in/canyon-smith-7a6445174/" class="fa fa-linkedin"></a>
      <a href="https://www.instagram.com/grandcanyonsmith/?hl=en" class="fa fa-instagram"></a>
      {/* <Music></Music> */}
      </div>
      </div>
      
      </header>
      
      
      <div className="image-container">
      <div className="row-1">
      <div className="text-container">
        <div column className="background-app-description">
        <h1 className="app-title"> Valentwear E-Commerce</h1>
        <h3 className="app-description">E-commerce website built from scratch in Shopify through Liquid for a jewelry brand Valentwear.</h3>
        </div>
      </div>
      <div className="image-box-l">
      <a href="https://valentwear.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1628213638/bullet-proof_adobespark_cd59no.png" rounded  className="image-right"/>
      </a>
      </div>
      </div>
      <div className="row-1">
      <div className="image-box-ll">
      <a href="https://mariobasner.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1628210292/Macbook_Wireframe_1_dvviib.png" rounded  className="image-left-top"/>
      
      </a>

      </div>
      <div className="text-container">
      <div column className="background-app-description">
      <h1 className="app-title extra-space"> Mario Basner Gallery</h1>
        <h3 className="app-description">A beautifully designed art gallery website for one of the most renounded art galleries in Las Vegas. Built in ArtLogic, custom CSS, this website is meant to showcase user experience and interface.</h3>
        </div>
        
      </div>
      </div>
      <div className="row-1">
      <div className="text-container">
      <div column className="background-app-description">
      <h1 className="app-title">Anomaly - Stock Options</h1>
        <h3 className="app-description">Built in ReactJS front-end with a Node and Python backend, this application is built for users to maximize profits by showing anomalies in call-options risk-reward contracts that the market is willing to buy to purchase their written calls. Built using PosgreSQL, and hosted through AWS and Heroku.</h3>
        </div>
      </div>
      <div stlye="margin-left: 10em; margin-top: 5em; padding-top:100px;"className="image-box-lll">
      <a href="http://stock-option-scanner.herokuapp.com/stocks" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1628216860/IMG_3067_adobespark_auoe4y.png" rounded  className="image-box-options-photo"/>
      </a>

      </div>
      </div>
      <div className="row-1">
      <div stlye="margin-left: 10em; margin-top: 5em; padding-top:100px;"className="image-box">
      <a href="https://mosaic-new.herokuapp.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626679406/IMG_2774_z0r0kb.jpg" rounded  className="image-left"/>
      
      </a>

      </div>
      <div className="text-container">
      <div column className="background-app-description">
      <h1 className="app-title"> Mosaic</h1>
        <h3 className="app-description">A Javascript App built to optimize customer purchase behavior by allowing the user to input articles of clothing that they already have, and then see outfits where they are only missing one or two articles of clothing to complete the outfit before they purcahse. Built using Bootstrap with Python workers as a backend that collects data. Utilizes Cloudinary for image storage.</h3>
        </div>
      </div>
      </div>
      <div className="row-1">
      <div className="text-container">
      <div column>
      <h1 className="app-title">Silicon Stonks</h1>
        <h3 className="app-description">Monthly stock-advice website with over 1,000 monthly subscribers built using Express and Node.js. Backend workers hosted on AWS Cloud, front-end hosted on Heroku, with data being stored on MongoDB.</h3>
        </div>
        <p>
        
        </p>
      </div>
      <div className="image-box-bottom">
      <a href="https://siliconstonks.com/latest" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1628205675/Silicon_Stonks_iPhone_Mockup_adobespark_2_lrt013.png" rounded  className="image-right-bottom"/>
      </a>
      </div>
      </div>
    </div>
    
    </OnDesktop>
    <OnMobile>
    <header>
        <div className="logo-intro">
        <div className="header-logo-mobile" column>
        <h1>CANYON SMITH</h1>
        <h1 className="sub-title">PORTFOLIO WEBSITE.</h1>
        
        </div>
        </div>
        <div className="info-container">
          <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}> 
            <Texty/>
          </div>
        <div className="social-media-icons">
      <a href="https://github.com/grandcanyonsmith/" class="fa fa-github"></a>
      <a  href="https://www.linkedin.com/in/canyon-smith-7a6445174/" class="fa fa-linkedin"></a>
      <a href="https://www.instagram.com/grandcanyonsmith/?hl=en" class="fa fa-instagram"></a>
      {/* <Music></Music> */}
      </div>
      </div>
      
      </header>
      <div className="image-container">
      <div className="row-1-mobile">
      {/* <div className="text-container-mobile" center> */}
      <div lower-text column className="background-app-description">
        <h1 className="app-title-mobile"> Valentwear E-Commerce</h1>
        <h3 className="app-description-mobile">E-commerce website built from scratch in Shopify through Liquid for a jewelry brand Valentwear.</h3>
        </div>
      {/* </div> */}
      <div className="image-box-right">
      <a href="https://valentwear.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1628213638/bullet-proof_adobespark_cd59no.png" rounded  className="image-mobile"/>
      </a>
      </div>
      </div>
      <div className="row-1-mobile">
      {/* <div className="text-container-mobile"> */}
      <div column center className="background-app-description">
        <h1 className="app-title-mobile"> Mario Basner Gallery</h1>
        <h3 className="app-description-mobile">A beautifully designed art gallery website for one of the most renounded art galleries in Las Vegas. Built in ArtLogic, custom CSS, this website is meant to showcase user experience and interface.</h3>
        </div>
        
      {/* </div> */}
      <div className="image-box-center">
      <a href="https://mariobasner.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1628210292/Macbook_Wireframe_1_dvviib.png" rounded  className="image-mobile-ll"/>
      </a>

      </div>
      </div>
      
      <div className="row-1-mobile">
      <div column className="background-app-description" >
        <h1 className="app-title-mobile"> Anomaly - Stock Options</h1>
        <h3 className="app-description-mobile">Built in ReactJS front-end with a Node and Python backend, this application is built for users to maximize profits by showing anomalies in call-options risk-reward contracts that the market is willing to buy to purchase their written calls. Built using PosgreSQL, and hosted through AWS and Heroku.</h3>
        </div>
        <div className="image-mobile-lll" >
      <a href="http://stock-option-scanner.herokuapp.com/stocks" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1628216860/IMG_3067_adobespark_auoe4y.png" rounded  className="image-mobile-options-photo"/>
      </a>

      </div>
      </div>

      <div className="row-1-mobile">
      <div column className="background-app-description">
        <h1 className="app-title-mobile"> Mosaic</h1>
        <h3 className="app-description-mobile">A Javascript App built to optimize customer purchase behavior by allowing the user to input articles of clothing that they already have, and then see outfits where they are only missing one or two articles of clothing to complete the outfit before they purcahse. Built using Bootstrap with Python workers as a backend that collects data. Utilizes Cloudinary for image storage.</h3>
        </div>
      <div className="image-box-center">
      <a href="https://mosaic-new.herokuapp.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626679406/IMG_2774_z0r0kb.jpg" rounded  className="image-mobile"/>
      </a>

      </div>
      </div>
      <div className="row-1-mobile">
      <div column center className="background-app-description">
        <h1 className="app-title-mobile">Silicon Stonks</h1>
        <h3 className="app-description-mobile">Monthly stock-advice website with over 1,000 monthly subscribers built using Express and Node.js. Backend workers hosted on AWS Cloud, front-end hosted on Heroku, with data being stored on MongoDB.</h3>
        </div>
      <div className="image-mobile-V">
      <a href="https://siliconstonks.com/latest" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1628205675/Silicon_Stonks_iPhone_Mockup_adobespark_2_lrt013.png" rounded  className="image-mobile-bottom"/>
      </a>

      </div>
      </div>
    </div>
    </OnMobile>
    </div>

  );
}

export default App;

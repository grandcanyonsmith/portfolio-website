import logo from './logo.svg';
import './App.css';
import {Image, Container} from 'react-bootstrap'
import Music from '../src/music'
import { layoutGenerator } from 'react-break';

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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        <div className="logo-intro">
        <div className="header-logo" column>
        <h1>CANYON SMITH</h1>
        <h1 className="sub-title">PORTFOLIO WEBSITE.</h1>
        </div>
        </div>
        <div className="social-media-icons">
      <a href="https://github.com/grandcanyonsmith/" class="fa fa-github"></a>
      <a href="https://twitter.com/grandcanyon77?lang=en" class="fa fa-twitter"></a>
      <a href="https://www.instagram.com/grandcanyonsmith/?hl=en" class="fa fa-instagram"></a>
      {/* <Music></Music> */}
      </div>
      
      </header>
      <div className="image-container">
      <div className="row-1">
      <div className="text-container">
        <div column>
        <h1 className="app-title"> Valentwear E-Commerce</h1>
        <h3 className="app-description">E-commerce website built from scratch in Shopify through Liquid. Media content, design, and branding all done by me.</h3>
        </div>
      </div>
      <div className="image-box">
      <a href="https://valentwear.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626656464/IMG_2768_dgr2ak.jpg" rounded  className="image-right"/>
      </a>
      </div>
      </div>
      <div className="row-1">
      <div className="image-box">
      <a href="https://mariobasner.com//" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626660919/MarioB_Website_Mock_p3kfhm.jpg" rounded  className="image-left"/>
      </a>

      </div>
      <div className="text-container">
      <div column>
      <h1 className="app-title extra-space"> Mario Basner Gallery</h1>
        <h3 className="app-description">A beautifully designed art gallery website for one of the most renounded art galleries in Las Vegas. Built in ArtLogic, this website is meant to showcase user experience and interface.</h3>
        </div>
        
      </div>
      </div>
      <div className="row-1">
      <div className="text-container">
      <div column>
      <h1 className="app-title"> Mosaic</h1>
        <h3 className="app-description">A Javascript App built to optimize customer purchase behavior by allowing the user to input articles of clothing that they already have, and then see outfits where they are only missing one or two articles of clothing to complete the outfit before they purcahse. Built using Bootstrap, with Python workers as a backend that collects data.</h3>
        </div>
      </div>
      <div stlye="margin-left: 10em; margin-top: 5em; padding-top:100px;"className="image-box">
      <a href="https://mosaic-new.herokuapp.com/outfit/622" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626679406/IMG_2774_z0r0kb.jpg" rounded  className="image-left-ll"/>
      </a>

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
      <div className="image-box">
      <a href="https://siliconstonks.com/latest" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626658801/IMG_2769_xqjeso.jpg" rounded  className="image-left"/>
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
        <div className="social-media-icons">
      <a href="https://github.com/grandcanyonsmith/" class="fa fa-github"></a>
      <a href="https://twitter.com/grandcanyon77?lang=en" class="fa fa-twitter"></a>
      <a href="https://www.instagram.com/grandcanyonsmith/?hl=en" class="fa fa-instagram"></a>
      {/* <Music></Music> */}
      </div>
      
      </header>
      <div className="image-container">
      <div className="row-1-mobile">
      {/* <div className="text-container-mobile" center> */}
      <div lower-text column>
        <h1 className="app-title-mobile"> Valentwear E-Commerce</h1>
        <h3 className="app-description-mobile">E-commerce website built from scratch in Shopify through Liquid. Media content, design, and branding all done by me.</h3>
        </div>
      {/* </div> */}
      <div className="image-box-right">
      <a href="https://valentwear.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626656464/IMG_2768_dgr2ak.jpg" rounded  className="image-right-mobile"/>
      </a>
      </div>
      </div>
      <div className="row-1-mobile">
      {/* <div className="text-container-mobile"> */}
      <div column center>
        <h1 className="app-title-mobile"> Mario Basner Gallery</h1>
        <h3 className="app-description-mobile">A beautifully designed art gallery website for one of the most renounded art galleries in Las Vegas. Built in ArtLogic, this website is meant to showcase user experience and interface.</h3>
        </div>
        
      {/* </div> */}
      <div className="image-box-center">
      <a href="https://mariobasner.com//" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626660919/MarioB_Website_Mock_p3kfhm.jpg" rounded  className="image-mobile"/>
      </a>

      </div>
      </div>
      <div className="row-1-mobile">
      <div column >
        <h1 className="app-title-mobile"> Mosaic</h1>
        <h3 className="app-description-mobile">A Javascript App built to optimize customer purchase behavior by allowing the user to input articles of clothing that they already have, and then see outfits where they are only missing one or two articles of clothing to complete the outfit before they purcahse. Built using Bootstrap, with Python workers as a backend that collects data.</h3>
        </div>
      <div className="image-box-center">
      <a href="https://mosaic-new.herokuapp.com/outfit/622" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626679406/IMG_2774_z0r0kb.jpg" rounded  className="image-mobile"/>
      </a>

      </div>
      </div>
      <div className="row-1-mobile">
      <div column center>
        <h1 className="app-title-mobile">Silicon Stonks</h1>
        <h3 className="app-description-mobile">Monthly stock-advice website with over 1,000 monthly subscribers built using Express and Node.js. Backend workers hosted on AWS Cloud, front-end hosted on Heroku, with data being stored on MongoDB.</h3>
        </div>
      <div className="image-box-center">
      <a href="https://siliconstonks.com/latest" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626658801/IMG_2769_xqjeso.jpg" rounded  className="image-mobile"/>
      </a>

      </div>
      </div>
    </div>
    </OnMobile>
    </div>

  );
}

export default App;

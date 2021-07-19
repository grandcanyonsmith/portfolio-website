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
        <h1>Canyon Smith Portfolio Website.</h1>
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
        <h1> 1. Valentwear</h1>
        <h3>E-Commerce Website.</h3>
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
        <h1> 2. Mario Basner</h1>
        <h3>Art Gallery Website.</h3>
        </div>
        
      </div>
      </div>
      <div className="row-1">
      <div className="text-container">
      <div column>
        <h1> 3. Mosaic</h1>
        <h3>Online Shopping.</h3>
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
        <h1> 4. Silicon Stonks</h1>
        <h3>Stock advice.</h3>
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
        Canyon Smith Portfolio Website.
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
      <div className="text-container-mobile" center>
      <div column center>
        <h1> 1. Valentwear</h1>
        <h3>E-Commerce Website.</h3>
        </div>
      </div>
      <div className="image-box-right">
      <a href="https://valentwear.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626656464/IMG_2768_dgr2ak.jpg" rounded  className="image-right"/>
      </a>
      </div>
      </div>
      <div className="row-1-mobile">
      <div className="text-container-mobile">
      <div column center>
        <h1> 2. Mario Basner</h1>
        <h3>Art Gallery Website.</h3>
        </div>
        
      </div>
      <div className="image-box-center">
      <a href="https://mariobasner.com//" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626660919/MarioB_Website_Mock_p3kfhm.jpg" rounded  className="image-mobile"/>
      </a>

      </div>
      </div>
      <div className="row-1-mobile">
      <div className="text-container-mobile">
      <div column center>
        <h1> 3. Mosaic</h1>
        <h3>Online Shopping.</h3>
        </div>
      </div>
      <div className="image-box-center">
      <a href="https://mosaic-new.herokuapp.com/outfit/622" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626679406/IMG_2774_z0r0kb.jpg" rounded  className="image-mobile"/>
      </a>

      </div>
      </div>
      <div className="row-1-mobile">
      <div column center>
        <h1> 4. Silicon Stonks</h1>
        <h3>Stock advice.</h3>
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

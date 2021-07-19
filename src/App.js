import logo from './logo.svg';
import './App.css';
import {Image, Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
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
      <div className="image-container">
      <div className="row-1">
      <div className="text-container">
        <h1> Valentwear site.</h1>
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
        <h1>Mario Basner Art Museum</h1>
        
      </div>
      </div>
      <div className="row-1">
      <div className="text-container">
      <h1>Mosaic</h1>
        <p>
        
        </p>
      </div>
      <div stlye="margin-left: 10em; margin-top: 5em; padding-top:100px;"className="image-box">
      <a href="https://mosaic-new.herokuapp.com/outfit/622" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626679406/IMG_2774_z0r0kb.jpg" rounded  className="image-left-ll"/>
      </a>

      </div>
      </div>
      <div className="row-1">
      <div className="text-container">
        <h1>Silicon Stonks</h1>
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
    </div>

  );
}

export default App;

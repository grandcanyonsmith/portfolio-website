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
      <div>
      <a href="https://valentwear.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626656464/IMG_2768_dgr2ak.jpg" rounded  className="image-right"/>
      </a>
      </div>
      <div>
      <a href="https://mariobasner.com/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626660919/MarioB_Website_Mock_p3kfhm.jpg" rounded  className="image-left"/>
      </a>
    </div>
    <div>
      <a href="https://siliconstonks.com/performance/11/2020" id="bottle" onclick="document.location=this.id+'.html';return false;" >
      <Image src="https://res.cloudinary.com/apexx/image/upload/v1626658801/IMG_2769_xqjeso.jpg" rounded  className="image-right"/>
      </a>
    </div>
    </div>
    </div>

  );
}

export default App;

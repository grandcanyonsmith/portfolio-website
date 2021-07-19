import logo from './logo.svg';
import './App.css';
import {Image, Container} from 'react-bootstrap'
import './app.scss';
function Music() {
    return (
<div className="App">


<div id="app-cover">
        <div ></div>
        <div id="bg-layer"></div>
        <div id="player">
            <div id="player-track">
                <div id="album-name"></div>
                <div id="track-name"></div>
                <div id="track-time">
                    <div id="current-time"></div>
                    <div id="track-length"></div>
                </div>
                <div id="s-area">
                    <div id="ins-time"></div>
                    <div id="s-hover"></div>
                    <div id="seek-bar"></div>
                </div>
            </div>

            <div id="player-content">
                <div id="album-art">
                <img src="https://images.unsplash.com/photo-1530236037540-35917fa68adf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwbG9uZyUyMHJvYWQlMjBuaWdodHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" class="active" id="_1"></img>
                    <img src="https://images.unsplash.com/photo-1585252406583-b474fb5f5ade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWRhbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" id="_2"></img>
                    <img src="https://images.unsplash.com/photo-1446825597988-2bb4dfd264ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVybmluZyUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" id="_3"></img>
                    <img src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_4.jpg" id="_4"></img>
                    <img src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_5.jpg" id="_5"></img>
                    <div id="buffer-box">Buffering ...</div> 
                </div>
            
                <div id="player-controls">
                    <div class="control">
                        <div class="button" id="play-previous">
                            <i class="fas fa-backward"></i>
                        </div>
                    </div>
                    <div class="control">
                        <div class="button" id="play-pause-button">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="control">
                        <div class="button" id="play-next">
                            <i class="fas fa-forward"></i>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
    </div>
    

);
}

export default Music;




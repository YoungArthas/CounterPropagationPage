import styled from "styled-components";
import video from '../../images/frontpage-mainvideo.mp4'
import {ReactSVG} from "react-svg";
import svg from '../../images/video-gradient-mask.svg'
import Commanders from "../Commanders/Commanders";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Tasks from "../Tasks/Tasks";

const Main = () => {
    return(
        <>
        <MainContainer>
            <video className="video" src={video} autoPlay loop muted>
                Your browser does not support the video tag.
            </video>
            <ReactSVG src={svg} className="overlay-svg"/>
            <div className="overlay-text">Відтвори своє майбутнє в надійному захисті держави!</div>
        </MainContainer>
            <Tasks/>
            <Commanders/>
            <About/>
            <Contacts/>
            </>
    )
}
const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; 
  
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    rotate: 180deg;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  
  .overlay-text {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    color: white; 
    font-size: 50px;
    width: 1000px;
    text-align: center; 
    z-index: 2; 
  }

`;

export default Main;
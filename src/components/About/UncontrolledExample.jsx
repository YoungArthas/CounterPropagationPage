import image1 from '../../images/persons/dale1.png'
import image2 from '../../images/persons/dale2.png'
import image3 from '../../images/persons/dale3.png'
import image4 from '../../images/persons/dale4.png'
import image5 from '../../images/persons/dale5.png'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const UncontrolledExample = () => {
  return (
      <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={3000}>
          <div style={{height:'700px'}}>
              <img src={image1} alt={''} style={{height:'700px'}} />
          </div>
          <div style={{height:'700px'}}>
              <img src={image2} alt={''} style={{height:'700px'}} />
          </div>
          <div style={{height:'700px'}}>
              <img src={image3} alt={''} style={{height:'700px'}} />
          </div>
          <div style={{height:'700px'}}>
              <img src={image4} alt={''} style={{height:'700px'}} />
          </div>
          <div style={{height:'700px'}}>
              <img src={image5} alt={''} style={{height:'700px'}} />
          </div>
      </Carousel>
  );
}

export default UncontrolledExample;
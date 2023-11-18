import image1 from '../../images/persons/DALL·E 2023-11-16 11.32.05 - Wide-format, realistic style image of a Ukrainian soldier using a radio station while holding a weapon. The soldier is in a field setting, wearing a c.png'
import image2 from '../../images/persons/DALL·E 2023-11-16 11.39.14 - Wide-format, realistic image of a Ukrainian soldier in a dynamic combat scene, depicting a firefight. The soldier, wearing a contemporary Ukrainian mi.png'
import image3 from '../../images/persons/DALL·E 2023-11-16 11.39.27 - Wide-format, realistic image of a Ukrainian soldier in a dynamic combat scene, depicting a firefight. The soldier, wearing a contemporary Ukrainian mi.png'
import image4 from '../../images/persons/DALL·E 2023-11-16 11.40.37 - Wide-format, realistic image of a Ukrainian soldier in a diplomatic setting, possibly during a moment of negotiation or agreement. The scene shows the.png'
import image5 from '../../images/persons/DALL·E 2023-11-16 11.40.44 - Wide-format, realistic image of a Ukrainian soldier in a diplomatic setting, possibly during a moment of negotiation or agreement. The scene shows the.png'
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
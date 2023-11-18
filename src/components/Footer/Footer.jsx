import styled from "styled-components";
import facebook from '../../images/facebook.png'
import insta from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import {Link} from "react-scroll";

const Footer = () =>{
    return(
        <FooterContainer>
            <div>
                <h1>Корисні посилання</h1>
                <div className={'links'}>
                    <ul id={'main'}>
                        <li><Link to={'main'} smooth={true} offset={-200} duration={1000}>Головна</Link></li>
                        <li><Link to={'commanding'} smooth={true} offset={0} duration={1000}>Командування інституту</Link></li>
                        <li><Link to={'about'} smooth={true} offset={-30} duration={1000}>Про нас</Link></li>
                        <li><Link to={'contacts'} smooth={true} offset={-20} duration={1000}>Контакти</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1>Новостна розсилка</h1>
                <div className={'form'}>
                    <input type="text" placeholder={'Ваша електронна пошта'}/>
                    <button>Підписатись</button>
                </div>
            </div>
            <div>
                <h1>Соціальні мережі</h1>
                <div className={'social'}>
                    <img src={facebook} alt="1"/>
                    <img src={insta} alt="2"/>
                    <img src={twitter} alt="3"/>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 140px;
  padding: 40px 0;
  width: 100%;
  background-color: #000000;
  h1{
    color: #F4F4F9;
    font-size: 24px;
    padding-bottom: 40px;
  }
  .links{
    color: #F4F4F9;
    ul{
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:40px;
      font-family: 'Comfortaa',sans-serif;
      padding: 0;
      transition: .6s ease-in-out ;
      a:hover{
        cursor: pointer;
        color: gold;
        text-decoration-line: underline;
      }
    }
  }
  .form{
    display: flex;
    flex-direction: column;
    input{
      height: 40px;
      border-radius: 10px;
      border: 2px solid white;
      text-align: center;
      color: white;
      background-color: black;
      font-family: 'Comfortaa',sans-serif;
      &::placeholder{
        color: white;
      }
    }
    button{
      height: 30px;
      border-radius: 20px;
      background-color: black;
      font-family: 'Comfortaa',sans-serif;
      color: white;
      cursor: pointer;
      border: 2px solid white;
      transition: .6s ease-in-out;
    }
    button:hover{
      background-color: white;
      color: black;
    }
    gap: 40px;
  }
  .social{
    display: flex;
    justify-content: center;
    gap: 40px;
    img{
      width: 50px;
      height: 50px;
      background-color: white;
      cursor: pointer;
    }
  }
`

export default Footer
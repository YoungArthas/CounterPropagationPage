import styled from "styled-components";
import logo from '../../images/logo.png';
import {Link} from 'react-scroll'

const Header = () =>{
    return(
        <HeaderContainer>
            <div className={'logo'}>
                <img src={logo} alt="1"/>
                <h1>Інформаційний портал <br/>контрпропаганди</h1>
            </div>
            <div className={'links'}>
                <ul id={'main'}>
                    <li><Link to={'main'} smooth={true} offset={-200} duration={1000}>Головна</Link></li>
                    <li><Link to={'commanding'} smooth={true} offset={0} duration={1000}>Командування</Link></li>
                    <li><Link to={'tasks'} smooth={true} offset={0} duration={1000}>Завдання</Link></li>
                    <li><Link to={'about'} smooth={true} offset={-30} duration={1000}>Про нас</Link></li>
                    <li><Link to={'contacts'} smooth={true} offset={-20} duration={1000}>Контакти</Link></li>
                </ul>
            </div>
        </HeaderContainer>
    )
}
const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 20;
  justify-content: space-between;
  align-items: center;
  padding: 10px 140px;
  background-color: #000000;
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #F4F4F9;
    h1{
      font-size: 20px;
      text-align: center;
    }
    
    img{
      width: 100px;
      height: 100px;
    }
  }
  .links{
    color: #F4F4F9;
    ul{
      list-style: none;
      display: flex;
      justify-content: center;
      gap:40px;
      font-family: 'Comfortaa',sans-serif;
      transition: .6s ease-in-out;
      a:hover{
        cursor: pointer;
        color: gold;
        text-decoration-line: underline;
      }
    }
  }
`

export default Header


/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import logotipo from '../images/logo.png'
import styled from 'styled-components';
import MobileMenu from './mobileMenu';


function Header() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <NavbarContainer>
                <a href='' alt="">
                <img src={logotipo} alt="Loto trabook" className='logo'/>
                </a>
                <ul className={`links ${clicked ? 'active' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Destination</a></li>
                    <li><a href="#">Tour</a></li>
                    <li><a href="#">Blog</a></li>
                    
                </ul>

                <div className='buttons'>
                    <button type="button" className='button-login rounded-xl'>Login</button>
                    <button type="button" className='button-singup rounded-xl'>Sing Up</button>
                </div>

                <div className="menuMobile">
                    <MobileMenu clicked={clicked} handleClick={handleClick} />
                </div>
                <BgMenuMobile className={`initial ${clicked ? 'active' : ''}`}></BgMenuMobile>
            </NavbarContainer>
            
        </>
    );
}
export default Header;

const NavbarContainer = styled.nav `
    .links{
        position: absolute;
        top: -100px;
        left: -2000px;
        margin-left: auto;
        margin-top: auto;
        text-align: center;
        a{
            margin-right: 1rem;
            transition: .2s;
            color: white;
            
            font-size: 2rem;
            }
        a:hover{
            transition: .2s;
            color: black;
            font-weight: bold;
            }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            li{
                display: inline;
            }
            a{
                color: black;
                font-size: 1.2rem;
            }
            a:hover{
                color: #FA7436;
            }

        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-top: auto;
        top: 30%;
        right: 0;
        left: 0;
        text-align: center;
    }

    .buttons{
        text-align: center;
        display: flex;

        button{
            padding: .7rem 1.8rem;
            border: solid 1px #FA7436;
            color: #FA7436;
            font-weight: 600;
            text-align: center;

        }
        .button-login{
            margin-right: 2rem;
            transition: all .6s ease;
        }
        .button-login:hover{
            background-color: #FA7436;
            color: white;
            transition: all .6s ease;
        }
        .button-singup{
            background-color: #FA7436;
            color: white;
            transition: all .2s ease;
        }
        .button-singup:hover{
            background-color: white;
            color: #FA7436;
            transition: all .6s ease;
            font-weight: bold;
        }
        @media(max-width: 768px){
            display: none;
        }

    }

    
    .menuMobile{
        @media(min-width: 768px){
            display: none;

        }
    }
    padding: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    font-size: 1.2rem;
    transition: all .2s ease;
    
`;

const BgMenuMobile = styled.div `
    position: absolute;
    background-color: #FA7436;
    top: -1500px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 0 80%;
        top:0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        
        
    }
    @media(min-width: 768px){
        display: none
    }

`;



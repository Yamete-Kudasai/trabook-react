/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import logotipo from '../images/logo.png'
import styled from 'styled-components';
import MobileMenu from './mobileMenu';
import {Button} from "@nextui-org/react";


function Header() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
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
                    <Button type="button" className='button-login '>Login</Button>
                    <Button type="button" className='button-singup rounded-xl'>Sing Up</Button>
                </div>

                <div className="menuMobile">
                    <MobileMenu clicked={clicked} handleClick={handleClick} />
                </div>
                <BgMenuMobile className={`initial ${clicked ? 'active' : ''}`}></BgMenuMobile>
            </NavbarContainer>
            
    );
}
export default Header;

const NavbarContainer = styled.nav `
    .links{
        z-index: 98;
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

        Button{
            background-color: transparent;
            color: #FA7436;
            border: solid 1px #FA7436;
            font-size: 20px;
            padding: 25px 40px;
            border-radius: 5px;
            margin-right: 20px;
            font-weight: bold;

        }
        .button-singup{
            background-color: #FA7436;
            color: white;
        }
        @media(max-width: 768px){
            display: none;
        }

    }

    
    .menuMobile{
        z-index: 99;
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
    z-index: 0;
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



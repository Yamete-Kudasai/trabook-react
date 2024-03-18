/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import CardCity from './cardCity';
import CardVacation from './CardVacation';
import styled from 'styled-components';
import {Button} from "@nextui-org/react";
import image1 from '../images/portada completa.png';
import image2 from '../images/portada.png';
import iconcard1 from '../images/cards/card-indi.png';
import iconcard2 from '../images/cards/card-indi-2.png';
import iconcard3 from '../images/cards/card-indi-3.png';
import iconArrowLeft from '../images/cards/arrow-left.png'
import iconArrowRight from '../images/cards/arrow-right.png'

export default function Home() {
  return (
    <>
        <HeaderContainer>
          <Header/>
        </HeaderContainer>
        <HomeContainer>
          <div className="home w-full ">
            <div className='home1 w-full flex justify-center items-center'>
              <div className='home1-left'>
                <h1 className='text-6xl'>Get started your <br></br> exciting<br></br> <span className=''>journey</span> with us.</h1>
                <p className='text-2xl my-10'>A Team of experienced tourism professionals <br></br> will provide you with the best advice and tips for <br></br> your desire place.</p>
                <Button>Discover Now</Button>
              </div>
              <div className='home1-right'>
                <div>
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
            
            <div className="home2 grid justify-center items-center w-full">
              <div className='container-home2 grid grid-cols-4 justify-between p-10'>
                <div className='item'>
                  <h3 className='font-bold'>Location</h3>
                  <p>Where are you going</p>
                </div>
                <div className='item  '>
                  <h3 className='font-bold'>Date</h3>
                  <p>When you will go</p>
                </div>
                <div className='item  '>
                  <h3 className='font-bold'>Guest</h3>
                  <p>Number of guests</p>
                </div>
                <div className='item  '>
                <Button className='w-full px-1'>Explore Now</Button>
                </div>
              </div>
            </div>
            <div className="home3 flex justify-center items-center py-10">
              <div>
                <h2 className='text-6xl font-bold py-10 tittle'>Things you need <span>to do</span></h2>
              </div>
              <div>
                <p className='text-center pb-20 text-xl'>We ensure that you’ll embark on a perfectly planned, <br></br> safe vacation at a price you can afford.</p>
              </div>
              <div className='grid grid-cols-3 cards-container'>
                <div className='cards1 grid m-3 p-4'>
                  <img src={iconcard1} alt="" className='py-3'/>
                  <h2 className='text-2xl font-bold py-4'>Sign Up</h2>
                  <p className='text-base w-auto'>Completes all the work associated with planning and processing</p>
                </div>
                <div className='cards1 grid m-3 p-4'>
                  <img src={iconcard2} alt="" className='py-3'/>
                  <h2 className='text-2xl  font-bold py-4'>Worth of Money</h2>
                  <p className='text-base w-auto'>After successful access then book from exclusive deals & pricing</p>
                </div>
                <div className='cards1 grid m-3 p-4'>
                  <img src={iconcard3} alt="" className='py-3'/>
                  <h2 className='text-2xl  font-bold py-4'>Exciting Travel</h2>
                  <p className='text-base w-auto'>Start and explore a wide range of exciting travel experience.</p>
                </div>
              </div>
            </div>
            <div className="home4 w-full flex justify-center items-center flex-col text-center py-10 px-2">
              <h2 className='text-6xl font-bold py-10'>Exclusive <span>deals & discounts</span></h2>
              <p className='text-xl'>Discover our fantastic early booking discounts & <br></br> start planning your journey.</p>
              <div>
                <div className="CardBody items-center w-full">
                  <CardCity/>
                </div>
                <div className='arrows flex justify-center items-center'>
                  <Button className="arrow arrow-left">
                    <img 
                    src={iconArrowLeft} 
                    alt="" 
                    />
                  </Button>
                  <Button className="arrow-right arrow ">
                    <img 
                    src={iconArrowRight} 
                    alt="" 
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="home5 flex  flex-col justify-center py-10">
              <div className='flex flex-col pb-10 justify-center items-center'>
                <h2 className='text-6xl font-bold pb-10'>Best <span>vacation plan</span></h2>
                <p className='text-xl text-center'>Plan your perfect vacation with our travel agency. <br></br> Choose among hundreds of all-inclusive offers!</p>
              </div>
              <div className='arrows2 flex justify-end'>
                  <div className='arrows'>
                    <Button className="arrow arrow-left">
                      <img 
                      src={iconArrowLeft} 
                      alt="" 
                      />
                    </Button>
                    <Button className="arrow-right arrow ">
                      <img 
                      src={iconArrowRight} 
                      alt="" 
                      />
                    </Button>
                  </div>
              </div>
              <CardVacation/>
            </div>
            
          </div>
          
        </HomeContainer>
        
    </>
  )
}

const HeaderContainer = styled.header`
  z-index: 99;
`
const HomeContainer = styled.main `
    margin-top: 50px;

    .home{
      font-family: sans-serif;

      .home1{
        
        .home1-left {
          margin-right: 10rem;
          h1{ 
            font-weight: bold;
            span{
              color: #FA7436;
            }
          }
        }
        Button{
          background-color: transparent;
          color: #FA7436;
          border: solid 1px #FA7436;
          font-size: 20px;
          padding: 25px 40px;
          border-radius: 5px;
        }

      }
      .home2{
        padding: 4rem 0;

        
        .container-home2{
          box-shadow: 5px 3px 30px -4px rgb(174, 174, 174);
          
          
          border-radius: .4rem;
          .item{

            margin: 0 30px;
            
            Button{
            background-color: #FA7436;
            color: white;
            border: solid 1px #FA7436;
            font-size: 2rem;
            border-radius: 5px;
            padding: 1.5rem;
            max-width: 250px;
            min-width: 100px;
            
            }
          
          }
        }
        
      }
      .home3{
        background-color: #dadada;
        flex-direction: column;
        .tittle{
          span{
            color: #FA7436;
          }

        }
        .cards-container{
          background-color: #dadada;
          .cards1{
             background-color: white;
             min-width: 100px;
             max-width: 350px;
            }

          }
        }
      .home4{
            .CardBody{
              
            }
            h2{
              span{
                color: #FA7436;
              }
            }
            .arrows{
              
              .arrow{
                border: solid 1px;
                padding: 2rem;
                border-radius: 100%;
                margin: 2rem;
                width: 50px;
                height: 50px;
                img{
                  width: 25px;
                  height: 25px;
                }
              }
              .arrow-left{
                background-color: white;
              

              }
              .arrow-right{
                border: solid 1px #FA7436;
                background-color: #FA7436;
              }
            }
            
          }
          .home5{
            .CardBody{
              
            }
            h2{
              span{
                color: #FA7436;
              }
            }
            .arrows2{
              width: 90%;
            }
            .arrows{
              
              .arrow{
                border: solid 1px;
                padding: 2rem;
                border-radius: 100%;
                margin: 2rem 1rem 1rem 0;
                width: 20px;
                height: 20px;
                img{
                  width: 15px;
                  height: 15px;
                }
              }
              .arrow-left{
                background-color: white;
              

              }
              .arrow-right{
                border: solid 1px #FA7436;
                background-color: #FA7436;
              }
            }

            
          }
      }
      
`
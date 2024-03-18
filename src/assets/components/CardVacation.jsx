/* eslint-disable no-unused-vars */
import React from "react";
import styled from 'styled-components';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import RomeVacation from '../images/cards/card-vacation-1.png';
import LondonVacation from '../images/cards/card-vacation-2.png';
import Rome2Vacation from '../images/cards/card-vacation-3.png';
import RateIcon from '../images/cards/star -cards.png';
import iconNavegation from '../images/cards/Navigation-card.png'

export default function CardVacation() {
    const list = [
      {
        city: "Rome",
        country: "Italy",
        img: RomeVacation,
        price: "5,42",
        rate: "4.8",
        time: "10",
      },
      {
        city: "London",
        country: "UK",
        img: LondonVacation,
        price: "2,42",
        rate: "4.5",
        time: "10",
      },
      {
        city: "Rome",
        country: "Italy",
        img: Rome2Vacation,
        price: "5,42",
        rate: "4.4",
        time: "10",
      },
    ];

    return (
      <CardVaction>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 py-1">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="Card mx-2">
              <CardBody className="CardBody overflow-visible px-3">
                <Image
                  shadow="sm"
                  radius="lg"
                  
                  alt={item.city}
                  className="w-full"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="CardFooter text-small justify-between pt-10 w-full flex-col">
                
                <div className="flex w-full justify-between items-center">
                  <b className="text-2xl">{item.city}, {item.country}</b>
                  <div className="justify-end   flex">
                    
                      
                      <p className="price text-2xl ml-3 font-bold">${item.price} K</p>   
                  </div>             
              </div>
              <div className=" flex flex-row w-full justify-between py-4 items-center">
                <div className="flex flex-row items-center">
                  <img src= {iconNavegation}
                   alt="" 
                   />
                   <h2 className="text-lg ml-2">{item.time} Days Trip</h2>
                </div>
                <div className="flex flex-row items-center">
                    <img
                      
                      src= {RateIcon}
                      alt=""
                      />
                    <p className="rate text-xl ml-3">{item.rate}</p>  
                </div>
                
              </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardVaction>
    );
  }

  const CardVaction = styled.div `
        
        display: flex;
        justify-content: center;
        .CardBody{
            img{
                width: 100%;
            }
        }
        .price{
            color: #FA7436;
        }
    
    
    
  `
  /* eslint-disable no-unused-vars */
  import React from "react";
  import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
  import Madrid from '../images/cards/card-exclusive-1.png';
  import Firenze from '../images/cards/card-exclusive-2.png';
  import Paris from '../images/cards/card-exclusive-3.png';
  import London from '../images/cards/card-exclusive-4.png';
  import RateIcon from '../images/cards/star -cards.png';
  import LocateIcon from '../images/cards/ubication-cards.png'
  import styled from "styled-components";


  export default function App() {
    const list = [
      {
        title: "Madrid",
        country: "Spain",
        img: Madrid,
        price: "950",
        sale: "850",
        rate: "4.8",
      },
      {
        title: "Firenze",
        country: "Italy",
        img: Firenze,
        price: "950",
        sale: "750",
        rate: "4.5",
      },
      {
        title: "Paris",
        country: "France",
        img: Paris,
        price: "699",
        sale: "599",
        rate: "4.4",
      },
      {
        title: "London",
        country: "UK",
        img: London,
        price: "950",
        sale: "850",
        rate: "4.8",
      },
    ];

    return (
      <CardContainer>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 py-20">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="Card mx-2">
              <CardBody className="overflow-visible px-3">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="CardFooter text-small justify-between  pt-10 w-full flex-col">
                
                <div className="flex w-full justify-between items-center">
                  <b className="text-2xl">{item.title}</b>
                  <div className="justify-end w-full  flex">
                    <img
                      
                      src= {RateIcon}
                      alt=""
                      />
                      <p className="rate text-xl ml-3">{item.rate}</p>     
                  </div>             
              </div>
              <div className=" flex flex-row justify-between w-full py-4 items-center">
                <div className="flex flex-row items-center">
                  <img src={LocateIcon}
                   alt="" 
                   />
                   <h2 className="text-lg ml-2">{item.country}</h2>
                </div>
                <div className="flex flex-row items-center">
                  <p className="price text-xl ml-3">$ {item.price}</p>
                  <p className="sale text-2xl ml-3 font-bold">$ {item.sale}</p>
                </div>
                
              </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContainer>
    );
  }

  const CardContainer = styled.div `

    div{
      .Card{
        box-shadow: 5px 3px 30px 4px rgb(174, 174, 174);


        .CardFooter{
          img{
            width: 20px;
            height: 20px;
          }
          .rate{
            color: grey;

          }
          .price{
            text-decoration: line-through;
            color: gray
          }

          .sale{
            color: #FA7436;

          }
        }
      }
    }
    
    
  `


import React from "react";

import './App.css';
import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import './App.css';




export default function HomeMain() {

    let [cartValue, setCartValue] = useState(0);
    let [cartBtnClick, setCartBtnClick] = useState(false)


    const handleclick = (e) => {
        let temp = e.target.getAttribute('toggle');


        if (temp == "false") {
            handleCartIncerement(e);
            e.target.setAttribute('toggle', 'true');
            e.target.style.border = '1px solid #f00';
            e.target.style.backgroundColor = 'none';
            e.target.style.color = 'fff';
            e.target.innerText = "Remove from Cart";


        } else {

            handleCartDecerement(e)
            e.target.setAttribute('toggle', 'false')
            e.target.style.border = '1px solid #000';
            e.target.style.backgroundColor = 'none';
            e.target.style.color = 'fff';
            e.target.innerText = "Add to cart";
        }
        // e.target.setAttribute('toggle', setCartBtnClick(!cartBtnclick))



    }


    const handleCartIncerement = (e) => {



        setCartBtnClick(!cartBtnClick);
        setCartValue(++cartValue);

        document.querySelector('.cartCount').innerText = cartValue;
    }

    const handleCartDecerement = (e) => {

        setCartBtnClick(!cartBtnClick);
        setCartValue(--cartValue);
        document.querySelector('.cartCount').innerText = cartValue;
    }


    const cardDetails = [
        {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Fancy Product",
            starRange: "4.5",
            priceStart: "$40.00",
            priceEnd: "$80.00",
            offerPrice: "",
            cardAction: "View Options",
            id: 1
        },
        {
            removeCart: "Remove Cart",
            avatarHeight: 200,
            avatarWidth: 250,
            title: "Special Item",
            starRange: "5",
            priceStart: "$20.00",
            priceEnd: "$80.00",
            offerPrice: "$18.00",
            cardAction: "Add to cart",
            id: 2
        },
        {
            removeCart: "Remove Cart",
            avatarHeight: 200,
            avatarWidth: 250,
            title: "Sale Item",
            starRange: "3",
            priceStart: "$20.00",
            priceEnd: "$80.00",
            offerPrice: "$18.00",
            cardAction: "Add to cart",
            id: 3
        },
        {
            removeCart: "Remove Cart",
            avatarHeight: 200,
            avatarWidth: 250,
            title: "Popular Item",
            starRange: "5",
            priceStart: "$40.00 ",
            priceEnd: "$80.00",
            offerPrice: '',
            cardAction: "Add to cart",
            id: 4
        },
        {
            removeCart: "Remove Cart",
            avatarHeight: 200,
            avatarWidth: 250,
            title: "Sale Item",
            starRange: "3.5",
            priceStart: "$50.00",
            priceEnd: "$80.00",
            offerPrice: "$25.00",
            cardAction: "Add to cart",
            id: 5
        },
        {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Fancy Product",
            starRange: "4",
            priceStart: "$120.00 ",
            priceEnd: "$280.00",
            offerPrice: '',
            cardAction: "View Options",
            id: 6
        }, {
            removeCart: "Remove Cart",
            avatarHeight: 200,
            avatarWidth: 250,
            title: "Special Item",
            starRange: "5",
            priceStart: "$20.00",
            priceEnd: "$80.00",
            offerPrice: "$18.00",
            cardAction: "Add to cart",
            id: 7
        },
        {
            removeCart: "Remove Cart",
            avatarHeight: 200,
            avatarWidth: 250,
            title: "Popular Item",
            starRange: "5",
            priceStart: "$40.00",
            priceEnd: "$80.00",
            offerPrice: "",
            cardAction: "Add to cart",
            id: 8
        }

    ];





    return (

        <div className="cardContainer">



            {cardDetails.map((cardElemnt) => {



                if (cardElemnt.title === "Fancy Product") {
                    return (



                        <Card className='card' data-id={`cardNo_${cardElemnt.id}`}>
                            <CardMedia
                                component="img"
                                height={cardElemnt.avatarHeight}
                                image="https://fakeimg.pl/300x200/"
                                alt="450 X 300"
                            />
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="div">
                                    {cardElemnt.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {cardElemnt.priceStart} - {cardElemnt.priceEnd}
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button className='cardBtn'
                                    databtnid={`btn_no_${cardElemnt.id}`}
                                    sx={{
                                        '&:hover': {
                                            color: '#fff',
                                            backgroundColor: '#000'
                                        },
                                        border: '1px solid black',
                                        color: "#000"
                                    }}>{cardElemnt.cardAction}
                                </Button>
                            </CardActions>
                        </Card >


                    )
                }
                if (cardElemnt.title === "Special Item") {
                    return (

                        <Card className='card' data-id={`cardNo_${cardElemnt.id}`}>
                            <CardMedia
                                component="img"
                                height={cardElemnt.avatarHeight}
                                image="https://fakeimg.pl/300x200/"
                                alt="450 X 300"
                            />
                            <CardContent className='cardContent'>

                                <Typography gutterBottom variant="h5" component="div">
                                    {cardElemnt.title}
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={Number(cardElemnt.starRange)}

                                />

                                <Typography variant="body2" color="text.secondary">
                                    <span className='strikeRate'>{cardElemnt.priceStart}</span>
                                    <span className='offerRate'>{cardElemnt.offerPrice}</span>
                                </Typography>


                            </CardContent>
                            <CardActions>

                                <Button className='cardBtn'
                                    databtnid={`btn_no_${cardElemnt.id}`}
                                    toggle='false'

                                    onClick={(e) => { handleclick(e) }}
                                    sx={{
                                        '&:hover': {
                                            color: '#fff',
                                            backgroundColor: '#000'
                                        },
                                        border: '1px solid black',
                                        color: "#000"
                                    }}>{cardElemnt.cardAction}</Button>

                            </CardActions>
                        </Card >


                    )
                }
                if (cardElemnt.title === "Sale Item") {
                    return (
                        <Card className='card' data-id={`cardNo_${cardElemnt.id}`}>
                            <CardMedia
                                component="img"
                                height={cardElemnt.avatarHeight}
                                image="https://fakeimg.pl/300x200/"
                                alt="450 X 300"
                            />
                            <CardContent className='cardContent'>

                                <Typography gutterBottom variant="h5" component="div">
                                    {cardElemnt.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    <span className='strikeRate'>{cardElemnt.priceStart}</span>
                                    <span className='offerRate'>{cardElemnt.offerPrice}</span>
                                </Typography>


                            </CardContent>
                            <CardActions>

                                <Button className='cardBtn'
                                    databtnid={`btn_no_${cardElemnt.id}`}
                                    toggle='false'
                                    onClick={(e) => { handleclick(e) }}
                                    sx={{
                                        '&:hover': {
                                            color: '#fff',
                                            backgroundColor: '#000'
                                        },
                                        border: '1px solid black',
                                        color: "#000"
                                    }}>{cardElemnt.cardAction}</Button>
                            </CardActions>
                        </Card >


                    )
                }
                if (cardElemnt.title === "Popular Item") {
                    return (

                        <Card className='card' data-id={`cardNo_${cardElemnt.id}`}>
                            <CardMedia
                                component="img"
                                height={cardElemnt.avatarHeight}
                                image="https://fakeimg.pl/300x200/"
                                alt="450 X 300"
                            />
                            <CardContent className='cardContent'>

                                <Typography gutterBottom variant="h5" component="div">
                                    {cardElemnt.title}
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={Number(cardElemnt.starRange)}

                                />

                                <Typography variant="body2" color="text.secondary">
                                    <span>{cardElemnt.priceStart}</span>

                                </Typography>


                            </CardContent>
                            <CardActions>

                                <Button className='cardBtn'
                                    databtnid={`btn_no_${cardElemnt.id}`}
                                    toggle='false'
                                    onClick={(e) => { handleclick(e) }}
                                    sx={{
                                        '&:hover': {
                                            color: '#fff',
                                            backgroundColor: '#000'
                                        },
                                        border: '1px solid black',
                                        color: "#000"
                                    }}>{cardElemnt.cardAction}</Button>


                            </CardActions>
                        </Card >


                    )
                }
            }

            )}
        </div>

    )
}
import React from 'react';
import "./Home.css";
import Product from './Product';

export default function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_2048/https://devseg.com/wp-content/uploads/2019/06/2128-2048x1593.jpg" alt="" className="home__image" />
                <div className="home__row">
                    {/* <Product />
                    <Product /> */}
                    <Product  id= "12" title="A product can be a service or an item. It can be physical or in virtual or cyber form" price = {11.96} rating={5} image="https://media.istockphoto.com/photos/woman-with-little-black-bag-in-stylish-outfit-picture-id621987934?k=20&m=621987934&s=612x612&w=0&h=r1g8GbU-nnbCmRJ2daVBOFb5r2G02MkuxoMStF7kJIA="/>
                    <Product id= "13" title="this is the title section" price = {11.96} rating={2} image="https://image.shutterstock.com/image-photo/red-apple-half-isolated-on-600w-1673390629.jpg" />

                </div>
                <div className="home__row">
                {/* <Product />
                <Product /> */}
                    <Product id= "14" title="this is the title section" price = {11.96} rating={5} image="https://image.shutterstock.com/image-photo/red-apple-half-isolated-on-600w-1673390629.jpg" />
                    <Product id= "15" title="this is the title section" price = {11.96} rating={5} image="https://image.shutterstock.com/image-photo/red-apple-half-isolated-on-600w-1673390629.jpg"/>
                    
                </div>
                <div className="home__row">
                {/* <Product /> */}
                    <Product id= "16" title="this is the title section" price = {11.96} rating={5} image="https://m.media-amazon.com/images/I/71aEcKpOZiL._UX695_.jpg" />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

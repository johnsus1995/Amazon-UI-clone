import React from 'react'
import './home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="hero-section"></img>

                <div className="home-row">
                    <Product
                        title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)"
                        image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg"
                        price="69,490.00"
                        rating={4} />

                    <Product
                        title="Lenovo Legion 5 AMD Ryzen 5 4600H 15.6 (39.62cms) Full HD Gaming Laptop (8GB/512GB SSD/Windows 10/120 Hz/NVIDIA GTX 1650 4GB GDDR6 Graphics/Phantom Black/2.3Kg), 82B500FJIN"
                        image="https://m.media-amazon.com/images/I/61ItfhQmaFL._SL1000_.jpg"
                        price="88,500.00"
                        rating={5}
                    />
                </div>

                <div className="home-row">
                    <Product
                        title="FIFA 21 Standard Edition (Xbox One)"
                        image="https://m.media-amazon.com/images/I/81Bw3gEJB+L._SL1500_.jpg"
                        price="1,149.00"
                        rating={3}
                    />
                    <Product
                        title="Apple iPhone 12 Mini (128GB) - Green"
                        image="https://m.media-amazon.com/images/I/71i+-WmxHWL._SL1500_.jpg"
                        price="74,900.00"
                        rating={4}
                    />
                    <Product
                        title="Nike Men's Jordan One Take Ii Pf Basketball Shoe"
                        image="https://m.media-amazon.com/images/I/51aOAJ5be0S._UL1000_.jpg"
                        price="8,295.00"
                        rating={3}
                    />
                    <Product
                        title="Emeros Printed Bell Sleeve Wrap & Swing Top"
                        image="https://m.media-amazon.com/images/I/81wh7iz6-nL._UL1500_.jpg"
                        price="399.00"
                        rating={5}
                    />
                </div>

                <div className="home-row">
                    <Product 
                        title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                        image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
                        price="1,60,000"
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="left-section">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad" className="ad"></img>

                <div className="checkout-title">
                    <h2>Your shopping basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating} />
                    ))}
                </div>
            </div>
            <div className="right-section">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

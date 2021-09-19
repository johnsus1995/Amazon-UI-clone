import React from 'react'
import './header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img className="header-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-log"></img>
            </Link>

            <div className="header-search">
                <input type="text" className="header-search-input"></input>
                <SearchIcon className="header-searchIcon" />
            </div>
            <div className="header-nav">
            {/* Login page */}
                <Link to="/login">
                    <div className="header-option">
                        <span className="header-option-line-one">Hello Guest</span>
                        <span className="header-option-line-two">Sign In</span>
                    </div>
                </Link>
                <div className="header-option">
                    <span className="header-option-line-one">Returns</span>
                    <span className="header-option-line-two">& Orders</span>
                </div>
                <div className="header-option">
                    <span className="header-option-line-one">Your</span>
                    <span className="header-option-line-two">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header-option-basket">
                        <ShoppingBasketIcon />
                        <span className="header-option-line-two header-basket-count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header

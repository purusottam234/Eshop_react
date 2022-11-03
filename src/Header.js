import React from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header(){
    return(
        <div className='header'>
        <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize = "large"/>
        <h2 className="header__logoTitle">Eshop</h2>

      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"/>

      </div>
      <div className="header__nav">
        <div className="nav__item">
          <div className="nav__itemLineOne">Hello guest</div>
          <div className="nav__itemLineTwo">Sign In</div>
        </div>
        <div className="nav__item">
          <div className="nav__itemLineOne">Your </div>
          <div className="nav__itemLineTwo">Shop</div>
        </div>
        <div className="nav__itemBasket">
           <ShoppingBasketIcon />
          <div className="nav__itemLineTwo nav__basketCount">0</div>
        </div>
      </div>
        </div>
    )
}
export default Header;
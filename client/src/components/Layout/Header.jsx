import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";
import CartDetails from "../Movie/CartDetails.jsx";
import { movieContext, themeContext } from "../../context/index.js";

const Header = () => {
  const [cartShow, setCartShow] = useState(false);
  const { state } = useContext(movieContext);
  const { darkMode, setDarkMode } = useContext(themeContext);

  const handleCartShow = () => {
    setCartShow(true);
  };

  const handleCartClose = () => {
    setCartShow(false);
  };
  return (
    <>
      <header>
        {cartShow && <CartDetails onclose={handleCartClose} />}
        <nav className="container mx-auto flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={assets.logo} />
          </a>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={assets.ring} width={24} height={24} />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? assets.sunIcon : assets.moonIcon}
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => handleCartShow()}
              >
                <img src={assets.shoppingCart} width={24} height={24} />
                {state.cartData.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-semibold">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

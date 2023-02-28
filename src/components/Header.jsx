import React, { useCallback } from "react";
import Cart from "./Cart";
import "./Header.css";
import { useState, useEffect, useRef } from "react";

function Header({ quantity, data, addtoCart, addCartRef }) {
  const [cartModal, setCartModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const nav = ["Collections", "Men", "Women", "About", "Contact"];
  const modalRef = useRef();
  const openCartModal = () => {
    setCartModal(!cartModal);
  };

  console.log(cartModal + "re render header");
  const isDesktop = window.innerWidth > 1024;

  return (
    <header>
      <div className="container">
        <div className="topbar flex">
          <div className="left-nav flex">
            {openMenu ? (
              <svg
                onClick={() => setOpenMenu(!openMenu)}
                className="menu"
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setOpenMenu(!openMenu)}
                className="menu"
                width="16"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            )}

            <div className="logo">
              <h3 className="sneakers">sneakers</h3>
            </div>
            <div className={openMenu ? "nav flex active" : "nav flex"}>
              {nav.map((item) => (
                <div className="nav-item flex">{item}</div>
              ))}
            </div>
          </div>
          <div ref={modalRef} className="right-nav flex">
            <div className="cart" onClick={openCartModal}>
              <div className="badge">{addtoCart}</div>
              <img src="./images/icon-cart.svg" alt="" />
            </div>
            {cartModal && (
              <Cart
                data={data}
                quantity={addtoCart}
                setCartModal={setCartModal}
                addCartRef={addCartRef}
                cartModal={cartModal}
                modalRef={modalRef}
              />
            )}
            <div className="avatar">
              <img src="./images/image-avatar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

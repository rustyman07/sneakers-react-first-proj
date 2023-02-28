import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";

function Cart({
  data,
  quantity,
  cartModal,
  setCartModal,
  addCartRef,
  modalRef,
}) {
  console.log(modalRef);
  const total = () => {
    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    const price = data[0].price * quantity;
    return USDollar.format(price);
  };

  useEffect(() => {
    let handler = (e) => {
      if (
        !modalRef.current.contains(e.target)
        // && !addCartRef.current.contains(e.target)
      ) {
        setCartModal(false);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <div className="cart-modal">
      <div className="cart-modal-wrapper flex">
        <div className="cart-modal-header">
          <p>Cart</p>
        </div>
        {quantity > 0 ? (
          <div className="cart-modal-body flex">
            <div className="cart-body-content flex">
              <img className="cart-item" src={data[0].images[0]} alt="" />
              <div className="cart-col flex">
                <p className="cart-item-name">{data[0].title}</p>
                <p className="total-item">
                  {`$ ${data[0].price}  x  ${quantity}`} <span>{total()}</span>
                </p>
              </div>
            </div>
            <button className="btn-primary btn-checkout">Checkout</button>
          </div>
        ) : (
          <div className="no-items">
            <h4>You dont have any items</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

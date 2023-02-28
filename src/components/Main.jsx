import React from "react";
import data from "../data";
import "./Main.css";
import Overlay from "./Overlay";
import { useState, useRef } from "react";
import Thumbnail from "./Thumbnail";

function Main({ quantity, add, minus, addCart, addCartRef }) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(null);
  const [thumbnail, setThumbnail] = useState(0);

  const openModal = (index) => {
    setOpen(true);
    setImageIndex(index);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleClick = (index) => {
    setThumbnail(index);
  };
  return (
    <main>
      <div className="hero flex">
        {open && (
          <Overlay
            thumbnail={thumbnail}
            data={data}
            closeModal={closeModal}
            handleClick={handleClick}
          />
        )}
        {data.map((item) => (
          <>
            <div className="hero-item flex">
              <div className="hero-item-image flex">
                <img
                  onClick={() => openModal()}
                  src={item.images[thumbnail]}
                  alt=""
                />
              </div>
              <Thumbnail
                data={data}
                handleClick={handleClick}
                thumbnail={thumbnail}
              />
            </div>
            <div className="hero-text flex">
              <p className="hero-text-company">{item.company}</p>
              <h3 className="hero-text-title">{item.title}</h3>
              <p className="hero-text-desc"> {item.desc}</p>
              <div className="price flex">
                <h3>${item.price}</h3>
                <p>{item.discount}</p>
              </div>
              <p className="old-price">{item.oldPrice}</p>
              <div className="btn-wrapper flex">
                <div className="btns-operator flex">
                  <button onClick={minus}>
                    <img src="./images/icon-minus.svg" alt="" />
                  </button>
                  <p>{quantity}</p>
                  <button onClick={add}>
                    <img src="./images/icon-plus.svg" alt="" />
                  </button>
                </div>
                <button
                  ref={addCartRef}
                  onClick={addCart}
                  className="btn-primary add-to-cart flex"
                >
                  {" "}
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#fff"
                      fill-rule="nonzero"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}

export default Main;

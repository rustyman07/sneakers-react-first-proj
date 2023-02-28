import React, { useState } from "react";
import "./Overlay.css";
import Thumbnail from "./Thumbnail";

function Overlay({ thumbnail, data, closeModal }) {
  const [currentIndex, setCurrentIndex] = useState(thumbnail);
  const goPrev = () => {
    data.map((item) => {
      const firstSlide = currentIndex === 0;
      const newIndex = firstSlide ? item.images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    });
  };
  const goNext = () => {
    data.map((item) => {
      const lastSlide = currentIndex === item.images.length - 1;
      const newIndex = lastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    });
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  console.log(currentIndex);
  return (
    <div className="overlay">
      <div className="modal">
        <svg
          className="closeModal"
          onClick={closeModal}
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>

        <div className="modal-image">
          {data.map((item) => (
            <img
              className="modal-item"
              src={item.images[currentIndex]}
              alt=""
            />
          ))}

          <img
            src="./images/icon-previous.svg"
            alt=""
            className="left-arrow arrow"
            onClick={goPrev}
          />
          <img
            src="./images/icon-next.svg"
            alt=""
            className="right-arrow arrow"
            onClick={goNext}
          />
        </div>
        <div className="overlay-thumbnail">
          <Thumbnail
            data={data}
            thumbnail={currentIndex}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Overlay;

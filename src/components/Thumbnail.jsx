import React from "react";

function Thumbnail({ data, handleClick, thumbnail }) {
  return (
    <div className="hero-thumbnail flex">
      {data.map((item) => (
        <>
          {item.images.map((img, index) => (
            <div className="thumbnail-wrapper">
              <div
                className={
                  thumbnail === index
                    ? "thumbnail-overlay active"
                    : "thumbnail-overlay"
                }
              ></div>
              <img
                className
                src={img}
                alt=""
                onClick={() => handleClick(index)}
              />
            </div>
          ))}
        </>
      ))}
    </div>
  );
}

export default Thumbnail;

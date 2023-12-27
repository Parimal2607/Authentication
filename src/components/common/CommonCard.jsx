import React from "react";

const CommonCard = ({image, imgTitle, brand, category, title, price, discountPercentage, rating}) => {
  return (
    <div className="product-detail">
      <div className="product">
        <div className="product-image">
          <img src={image} alt={imgTitle} className="img-fluid" />
        </div>
        <div className="product-details">
          <div className="product-category">
            <span>{brand}</span> {category}
          </div>
          <div className="product-title">{title}</div>
          <div className="product-price-discount">
            <div className="product-price">${price}</div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="product-discount ">
                Discount : <span>{discountPercentage}%</span>
              </div>
              <div className="product-rating ">
                Rating : <span>{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;

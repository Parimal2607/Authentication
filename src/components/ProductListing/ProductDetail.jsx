import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const url = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d.products);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const product = data.find((e) => e.id == id);

  // if (!product) {
  //   // Handle the case where the product is not found
  //   return (
  //     <div className="container mt-3">
  //       <p>Product not found</p>
  //     </div>
  //   );
  // }

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="container mt-3">
          <div className="product-detail">
            <h1 className="mb-4">Product Detail</h1>

            <div className="product">
              <div className="product-image">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="img-fluid"
                />
              </div>
              <div className="product-details">
                <div className="product-category ">
                  <span>{product.brand}</span> {product.category}
                </div>
                <div className="product-title ">{product.title}</div>
                {/* <div className="product-brand"> {product.brand}</div> */}
                <div className="product-price-discount">
                  <div className="product-price ">${product.price}</div>
                  <div className="product-discription">
                    {product.description}
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="product-discount ">
                      Discount : <span>{product.discountPercentage}%</span>
                    </div>
                    <div className="product-rating ">
                      Rating : <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;

import React, { createContext, useEffect, useState } from "react";
import Loader from "../common/Loader";
import ProductListing from "./ProductListing";
export const GlobalInfo = createContext();
const Product = () => {
  const url = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <GlobalInfo.Provider value={{ data }}>
      <div className="container mt-3">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="title text-center">
              <h1>Products</h1>
            </div>
            <ProductListing />
          </>
        )}
      </div>
    </GlobalInfo.Provider>
  );
};

export default Product;

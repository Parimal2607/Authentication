import React, { createContext, useEffect, useState } from "react";
import Loader from "../common/Loader";
import ProductListing from "./ProductListing";
export const GlobalInfo = createContext();
import axios from "axios";
/**
 * Fetches product information from a remote API and renders a list of products.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
const Product = () => {
  const url = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

/**
 * Fetches info from the specified URL using axios.
 *
 * @param {string} url - The URL to fetch data from.
 * @return {Promise<void>} - A promise that resolves when the data is fetched successfully.
 */
  const fetchInfo = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
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

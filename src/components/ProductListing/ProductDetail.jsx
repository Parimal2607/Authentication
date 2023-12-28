import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
/**
 * Renders the product detail page.
 *
 * @return {JSX.Element} The JSX element representing the product detail page.
 */
const ProductDetail = () => {
  const { id } = useParams();
  const productDetailUrl = `https://dummyjson.com/products/${id}`;
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);

  /**
   * Fetches detailed information for a specific product based on its ID.
   *
   * @return {Promise} A Promise that resolves when the data is fetched and the state is updated.
   */
  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(productDetailUrl);
      setProductDetail(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product detail:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productDetailUrl]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

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
                <Slider {...settings}>
                  {productDetail.images.map((img, id) => {
                    return (
                      <div key={id}>
                        <img
                          src={img}
                          alt={productDetail.title}
                          className="img-fluid"
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="product-details">
                <div className="product-category ">
                  <span>{productDetail.brand}</span> {productDetail.category}
                </div>
                <div className="product-title ">{productDetail.title}</div>
                {/* <div className="product-brand"> {product.brand}</div> */}
                <div className="product-price-discount">
                  <div className="product-price ">${productDetail.price}</div>
                  <div className="product-discription">
                    {productDetail.description}
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="product-discount ">
                      Discount :{" "}
                      <span>{productDetail.discountPercentage}%</span>
                    </div>
                    <div className="product-rating ">
                      Rating : <span>{productDetail.rating}</span>
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

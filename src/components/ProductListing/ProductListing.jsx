import React, { useContext, useState } from "react";
import { Col, Row } from "reactstrap";
import { GlobalInfo } from "./Product";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
/**
 * Renders a product listing component.
 *
 * @return {JSX.Element} The JSX element representing the product listing.
 */
const ProductListing = () => {
  const { data } = useContext(GlobalInfo);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 8;

  const pageCount = Math.ceil(data.length / productsPerPage);

/**
 * Handles the page change event.
 *
 * @param {Object} selected - The selected page object.
 * @return {undefined} There is no return value.
 */
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = data.slice(offset, offset + productsPerPage);
  return (
    <>
      <Row className="gy-4 my-3 match-height">
        {currentProducts.map((item) => (
          <Col xl="4" lg="4" md="6" key={item.id}>
            <Link to={`/product/${item.id}`} className="link-text">
              <div className="product-detail">
                <div className="product">
                  <div className="product-image">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="product-details">
                    <div className="product-category">
                      <span>{item.brand}</span> {item.category}
                    </div>
                    <div className="product-title">{item.title}</div>
                    <div className="product-price-discount">
                      <div className="product-price">${item.price}</div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="product-discount ">
                          Discount : <span>{item.discountPercentage}%</span>
                        </div>
                        <div className="product-rating ">
                          Rating : <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>

      <div>
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default ProductListing;

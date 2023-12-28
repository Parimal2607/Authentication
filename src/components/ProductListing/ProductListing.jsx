import { useContext } from "react";
import { Col, Row } from "reactstrap";
import { GlobalInfo } from "./Product";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import CommonCard from "../common/CommonCard";
/**
 * Renders a product listing component.
 *
 * @return {JSX.Element} The JSX element representing the product listing.
 */
const ProductListing = () => {
  const { data , handlePageClick, total, limit} = useContext(GlobalInfo);
  return (
    <>
      <Row className="gy-4 my-3 match-height">
        {data.map((item) => (
          <Col xl="4" lg="4" md="6" key={item.id}>
            <Link to={`/product/${item.id}`} className="link-text">
              <CommonCard
                image={item.thumbnail}
                imgTitle={item.title}
                brand={item.brand}
                category={item.category}
                title={item.title}
                price={item.price}
                discountPercentage={item.discountPercentage}
                rating={item.rating}
              />
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
          pageCount={Math.ceil(total / limit) || 1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default ProductListing;

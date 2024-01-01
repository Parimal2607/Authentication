import { Col, Container, Row } from "reactstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

/**
 * Renders the footer component.
 *
 * @return {JSX.Element} The rendered footer component.
 */
function Footer() {
  let authenticated;
  const Username = localStorage.getItem("userData");
  if (Username) {
    authenticated = JSON.parse(Username);
  }
  return (
    <>
      <footer>
        <Container fluid="lg">
          <Row className="align-items-center justify-content-center">
            <Col xl={7} md={8} sm={12}>
              <p className="mb-0">
                COPYRIGHT © 2022{" "}
                <a className="link-text">{authenticated.fname}</a>, All rights
                Reserved
              </p>
            </Col>
            <Col xl={5} md={4} sm={12}>
              <ul className="ps-0">
                <li>
                  <a>
                    <FaFacebookF size="15" />
                  </a>
                </li>
                <li>
                  <a>
                    <FaInstagram size="15" />
                  </a>
                </li>
                <li>
                  <a>
                    <FaTwitter size="15" />
                  </a>
                </li>
                <li>
                  <a>
                    <FaLinkedinIn size="15" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;

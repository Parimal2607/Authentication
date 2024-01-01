import { Container } from "reactstrap";

/**
 * Renders the Home component.
 *
 * @return {React.Element} The rendered Home component.
 */
function Home() {
  let authenticated;
  const Username = localStorage.getItem("userData");
  if (Username) {
    authenticated = JSON.parse(Username);
  }

  return (
    <>
      <Container fluid="lg">
        <div className="text-center">
          <h2 className="title mb-3">
            Hi{" "}
            <span>
              {authenticated.fname} {authenticated.lname}
            </span>{" "}
            ,
          </h2>
          <h3 className="mb-0 title">Welcome to your project.</h3>
        </div>
      </Container>
    </>
  );
}

export default Home;

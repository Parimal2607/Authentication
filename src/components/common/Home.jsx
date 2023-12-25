import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { toast } from "react-hot-toast";

function Home() {
  let authenticated;
  const Username = localStorage.getItem("userData");
  if (Username) {
    authenticated = JSON.parse(Username);
  }
  // useEffect(() => {
  //   toast.success(`Welcome ${authenticated.fname} ${authenticated.lname}`);
  // }, [authenticated.fname, authenticated.lname]);
  return (
    <>
     
      <Container fluid="lg">
        <div className="text-center">
          <h2 className="title mb-3">
            Hi <span>{authenticated.fname} { authenticated.lname}</span> ,
          </h2>
          <h3 className="mb-0 title">Welcome to your project.</h3>
        </div>
      </Container>
    </>
  );
}

export default Home;

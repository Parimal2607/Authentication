import React, { useState } from "react";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Formik, Form } from "formik";
import { LoginSchema } from "../schema";
import { Icon } from "@iconify/react";
const initialValues = {
  loginEmail: "",
  loginPassword: "",
};
const Login = () => {
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("dataKey");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow((pre) => !pre);
  };
  const navigate = useNavigate();
  const onSubmit = (values) => {
    const newArr = userName?.find(
      (e) =>
        values.loginEmail === e.email && values.loginPassword === e.password
    );
    if (newArr) {
      console.log("jabhsvhagsfhjags");
      localStorage.setItem("userData", JSON.stringify(newArr));
      toast.success("You have successfully logged in.");
      navigate("/dashboard");
    } else {
      toast.error("invalid email or password");
    }
    console.log(newArr);
  };

  return (
    <div className="container auth">
      <div className="auth-page">
        <Row className="justify-content-center">
          <Col lg="6" className="auth-sub-page">
            <div className="right-side-detail w-100">
              <h1>Welcome to Login</h1>

              <div className="registration-form">
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={LoginSchema}
                >
                  {({
                    values,
                    handleChange,
                    errors,
                    touched,
                    handleSubmit,
                    handleBlur,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="input-fields">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          id="loginEmail"
                          name="loginEmail"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.loginEmail && touched.loginEmail ? (
                          <div className="validation-text">
                            {errors.loginEmail}
                          </div>
                        ) : null}
                      </div>

                      <div className="input-fields">
                        <Label>Password</Label>
                        <InputGroup>
                          <Input
                            type={show ? "text" : "password"}
                            placeholder="Enter your password"
                            id="loginPassword"
                            name="loginPassword"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <InputGroupText
                            onClick={(e) => handleShow(e)}
                            tag="button"
                          >
                            <Icon icon={show ? "mdi:eye" : "el:eye-close"} />
                          </InputGroupText>
                        </InputGroup>
                        {errors.loginPassword && touched.loginPassword ? (
                          <div className="validation-text">
                            {errors.loginPassword}
                          </div>
                        ) : null}
                      </div>

                      <div className="text-center my-3">
                        <Button type="submit" className="primary-btn">
                          Log in
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="form-footer">
                  <p>
                    {" "}
                    Don't have an account? <Link to="/sign-up">Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
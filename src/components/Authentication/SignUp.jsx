import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import { Formik, Form } from "formik";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SHA256 } from "crypto-js";
import { RegisterSchema } from "../../constant/schema";
const initialValues = {
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  password: "",
  cpassword: "",
};
/**
 * Handles the sign-up functionality.
 *
 * @return {void} - This function does not return a value.
 */
const SignUp = () => {
  const [data, setData] = useState([]);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass((pre) => !pre);
  };
  /**
   * Handles the action of showing or hiding the confirm password field.
   *
   * @param {Object} e - The event object.
   * @return {void} - This function does not return a value.
   */
  const handleShowConFirmPass = (e) => {
    e.preventDefault();
    setShowConfirmPass((pre) => !pre);
  };
  const navigate = useNavigate();
  /**
   * Submit the form data.
   *
   * @param {Object} values - The form values.
   * @return {void} No return value.
   */
  const onSubmit = (values) => {
    // Encrypt passwords using SHA256
    const encryptedPassword = SHA256(values.password).toString();
    const encryptedConfirmPassword = SHA256(values.cpassword).toString();

    setData([...data, values]);
    let arr = [
      ...data,
      {
        ...values,
        password: encryptedPassword,
        cpassword: encryptedConfirmPassword,
      },
    ];
    const newArr = JSON.parse(localStorage.getItem("dataKey")) || [];
    const filterArr = newArr.find((e) => values.email === e.email);

    if (filterArr) {
      toast.error("Email id already exists");
    } else {
      localStorage.setItem("dataKey", JSON.stringify(arr));
      toast.success("Registered successfully");
      navigate("/login");
    }
  };
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("dataKey"));
    setData(item || []);
  }, []);
  return (
    <div className="container auth">
      <div className="auth-page">
        <Row className="justify-content-center">
          <Col lg="6" className="auth-sub-page">
            <div className="right-side-detail w-100">
              <h1>Welcome to Auth</h1>

              <div className="registration-form">
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={RegisterSchema}
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
                        <Label>First Name</Label>
                        <Input
                          type="text"
                          placeholder="Enter your first name"
                          id="fname"
                          name="fname"
                          value={values.fname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.fname && touched.fname ? (
                          <div className="validation-text">{errors.fname}</div>
                        ) : null}
                      </div>
                      <div className="input-fields">
                        <Label>Last Name</Label>
                        <Input
                          type="text"
                          placeholder="Enter your last name"
                          id="lname"
                          name="lname"
                          value={values.lname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.lname && touched.lname ? (
                          <div className="validation-text">{errors.lname}</div>
                        ) : null}
                      </div>
                      <div className="input-fields">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                          <div className="validation-text">{errors.email}</div>
                        ) : null}
                      </div>
                      <div className="input-fields">
                        <Label>Mobile Number</Label>
                        <Input
                          type="number"
                          placeholder="Enter your number"
                          id="mobile"
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.mobile && touched.mobile ? (
                          <div className="validation-text">{errors.mobile}</div>
                        ) : null}
                      </div>
                      <div className="input-fields">
                        <Label>Password</Label>
                        <InputGroup>
                          <Input
                            type={showPass ? "text" : "password"}
                            placeholder="Enter your password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <InputGroupText
                            onClick={(e) => handleShowPass(e)}
                            tag="button"
                          >
                            <Icon
                              icon={showPass ? "mdi:eye" : "el:eye-close"}
                            />
                          </InputGroupText>
                        </InputGroup>
                        {errors.password && touched.password ? (
                          <div className="validation-text">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                      <div className="input-fields">
                        <Label>Confirm Password</Label>
                        <InputGroup>
                          <Input
                            type={showConfirmPass ? "text" : "password"}
                            placeholder="Enter your confirm password"
                            id="cpassword"
                            name="cpassword"
                            value={values.cpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <InputGroupText
                            onClick={(e) => handleShowConFirmPass(e)}
                            tag="button"
                          >
                            <Icon
                              icon={
                                showConfirmPass ? "mdi:eye" : "el:eye-close"
                              }
                            />
                          </InputGroupText>
                        </InputGroup>

                        {errors.cpassword && touched.cpassword ? (
                          <div className="validation-text">
                            {errors.cpassword}
                          </div>
                        ) : null}
                      </div>
                      <div className="text-center my-2">
                        <Button type="submit" className="primary-btn">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="form-footer">
                  <p>
                    {" "}
                    Already have an account? <Link to="/login">Log in</Link>
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

export default SignUp;

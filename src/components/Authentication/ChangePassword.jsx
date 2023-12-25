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
import AuthImage from "../../assets/images/authImage.svg";
import { Formik, Form } from "formik";
import { UpdatePasswordSchema } from "../schema";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";
const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};
const ChangePassword = () => {
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("userData");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [showCurr, setShowCurr] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleShowCurr = (e) => {
    e.preventDefault();
    setShowCurr((pre) => !pre);
  };
  const handleShowNew = (e) => {
    e.preventDefault();
    setShowNew((pre) => !pre);
  };
  const handleShowConfirm = (e) => {
    e.preventDefault();
    setShowConfirm((pre) => !pre);
  };
  const onSubmit = (values, { resetForm }) => {
    const allUsers = JSON.parse(localStorage.getItem("dataKey"));
    const loggedInUser = allUsers?.find(
      (user) => user.email === userName.email
    );
    const userPassword = loggedInUser["password"];
    if (userPassword === values.currentPassword) {
      // Update the password in local storage for the "userData" key

      (loggedInUser.password = values.newPassword),
        localStorage.setItem("userData", JSON.stringify(loggedInUser));
      localStorage.setItem("dataKey", JSON.stringify(allUsers));

      toast.success("Password updated successfully!");
      resetForm();
    } else {
      toast.error("Current password is incorrect");
    }
  };

  return (
    <div className="container auth">
      <div className="auth-page">
        <Row className="justify-content-center">
          <Col lg="6" className="auth-sub-page">
            <div className="right-side-detail w-100">
              <h1>Upadte Your Password</h1>

              <div className="registration-form">
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={UpdatePasswordSchema}
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
                        <Label>Current Password</Label>
                        <InputGroup>
                          <Input
                            type={showCurr ? "text" : "password"}
                            placeholder="Enter your current password"
                            name="currentPassword"
                            id="currentPassword"
                            value={values.currentPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <InputGroupText
                            onClick={(e) => handleShowCurr(e)}
                            tag="button"
                          >
                            <Icon
                              icon={showCurr ? "mdi:eye" : "el:eye-close"}
                            />
                          </InputGroupText>
                        </InputGroup>

                        {errors.currentPassword && touched.currentPassword ? (
                          <div className="validation-text">
                            {errors.currentPassword}
                          </div>
                        ) : null}
                      </div>
                      <div className="input-fields">
                        <Label>New Password</Label>
                        <InputGroup>
                          <Input
                            type={showNew ? "text" : "password"}
                            placeholder="Enter your new password"
                            name="newPassword"
                            id="newPassword"
                            value={values.newPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <InputGroupText
                            onClick={(e) => handleShowNew(e)}
                            tag="button"
                          >
                            <Icon icon={showNew ? "mdi:eye" : "el:eye-close"} />
                          </InputGroupText>
                        </InputGroup>
                        {errors.newPassword && touched.newPassword ? (
                          <div className="validation-text">
                            {errors.newPassword}
                          </div>
                        ) : null}
                      </div>
                      <div className="input-fields mb-5">
                        <Label>Confirm New Password</Label>
                        <InputGroup>
                          <Input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Enter your confirm new password"
                            name="confirmNewPassword"
                            id="confirmNewPassword"
                            value={values.confirmNewPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <InputGroupText
                            onClick={(e) => handleShowConfirm(e)}
                            tag="button"
                          >
                            <Icon
                              icon={showConfirm ? "mdi:eye" : "el:eye-close"}
                            />
                          </InputGroupText>
                        </InputGroup>

                        {errors.confirmNewPassword &&
                        touched.confirmNewPassword ? (
                          <div className="validation-text">
                            {errors.confirmNewPassword}
                          </div>
                        ) : null}
                      </div>
                      <div className="text-center my-3">
                        <Button type="submit" className="primary-btn">
                          Update Password
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChangePassword;
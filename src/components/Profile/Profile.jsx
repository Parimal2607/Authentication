import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Input, Label, Row } from "reactstrap";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
import { UpdateProfileSchema } from "../../schema";
import { toastMessages } from "../../constant/messages";

/**
 * Renders the user profile page.
 *
 * @return {JSX.Element} The user profile page component.
 */
const Profile = () => {
  const savedItem = localStorage.getItem("userData");
  const parsedItem = JSON.parse(savedItem);

  const initialValues = {
    fname: parsedItem.fname,
    lname: parsedItem.lname,
    email: parsedItem.email,
    mobile: parsedItem.mobile,
  };
  const navigate = useNavigate();
  /**
   * Submits the form with the provided values and updates the user information.
   *
   * @param {object} values - The values from the form submission.
   */
  const onSubmit = (values) => {
    const allUsers = JSON.parse(localStorage.getItem("dataKey"));
    const loggedInUser = allUsers?.find(
      (user) => user.email === parsedItem.email
    );

    if (loggedInUser) {
      (loggedInUser.fname = values.fname),
        (loggedInUser.lname = values.lname),
        (loggedInUser.email = values.email),
        (loggedInUser.email = values.email),
        localStorage.setItem("userData", JSON.stringify(loggedInUser));
      localStorage.setItem("dataKey", JSON.stringify(allUsers));

      toast.success(toastMessages.userProfile);
    } else {
      toast.error(toastMessages.userProfileInvalid);
    }
  };

  /**
   * Resets the form values to their initial state when "Cancel" button is clicked.
   *
   * @param {object} formikProps - Formik form props.
   */
  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container auth py-3">
      <Row className="justify-content-center auth-page w-100">
        <Col lg="6" className="auth-sub-page">
          <div>
            <div className="right-side-detail">
              <h1>Welcome {parsedItem.username}</h1>
              <div className="registration-form">
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={UpdateProfileSchema}
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
                          name="fname"
                          id="fname"
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
                          name="lname"
                          id="lname"
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
                          name="email"
                          id="email"
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
                          name="mobile"
                          id="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.mobile && touched.mobile ? (
                          <div className="validation-text">{errors.mobile}</div>
                        ) : null}
                      </div>
                      <div className="d-flex justify-content-center gap-2">
                        <Button type="submit" className="primary-btn">
                          Save
                        </Button>
                        <Button
                          className="secondary-btn"
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <p className="mt-3 text-center">
                {" "}
                Want to Update Password?{" "}
                <Link to="/change-password" className="link-text">
                  Change Password
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;

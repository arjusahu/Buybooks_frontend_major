// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar11 from "./Navbar11";
import "./style.css";

const Basic = () => (
  <div>
    <Navbar11 />
    <div className="login ">
      <h1 className="logText">LogIn</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "250px",
              }}
            >
              <Field type="email" name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="div" />
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                style={{ marginTop: "20px" }}
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <br />
            <Link to="/afterlogin">
              {" "}
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default Basic;

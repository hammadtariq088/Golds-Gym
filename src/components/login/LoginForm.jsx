import React, { useEffect, useState } from "react";
import Input from "../Input";
import Label from "../Label";
import { Link } from "react-router-dom";
import { loginSchema } from "../../schemas/UserValidation";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    };
    getUsers();
  }, []);

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: (values, action) => {
      // console.log(values);
      action.resetForm();
    },
  });

  const handleClick = () => {
    if (values.email !== "" && values.password !== "") {
      const filteredUser = users.filter((user) => {
        return user.email === values.email && user.password === values.password;
      });
      // console.log(filteredUser[0]);
      const { id, name, password, email, gender } = filteredUser[0];
      localStorage.setItem("userId", id);
      localStorage.setItem("userName", name);
      localStorage.setItem("userPass", password);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userGender", gender);
      navigate("/plans");
    }
  };

  return (
    <div className="center my-5">
      <div className="container">
        <div className="login-form">
          <form className="login-form-wrapper" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <Label className="form-label mt-15">
                        Email address *
                      </Label>
                      <Input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                      />
                      {errors.email || touched.email ? (
                        <p className="text-danger">{errors.email}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <Label className="form-label mt-15">Password *</Label>
                      <Input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                      />
                      {errors.password || touched.password ? (
                        <p className="text-danger">{errors.password}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-12">
                      <div className="form-group mb-5 mt-5 form-group-info text-center">
                        <Input
                          className="btn btn-theme btn-black"
                          type="submit"
                          value="LOGIN"
                          onClick={handleClick}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <p>
                        Don't have an account?
                        <Link to="/register">&nbsp;&nbsp;Register here</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

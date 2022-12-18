import React from "react";
import Input from "../Input";
import Label from "../Label";
import Select from "../Select";
import { Link } from "react-router-dom";
import registerSchema from "../../schemas/UserValidation";
import { useFormik } from "formik";
import axios from "axios";

const RegisterForm = () => {
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
    },

    validationSchema: registerSchema,

    onSubmit: (values, action) => {
      // console.log(values);
      action.resetForm();
    },
  });

  const handleClick = async () => {
    const response = await axios.post("http://localhost:5000/users", values);
    const { id, name, password, email, gender } = response.data;
    localStorage.setItem("userId", id);
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", password);
    localStorage.setItem("userGender", gender);
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
                      <Label className="form-label">Name *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                      />
                      {errors.name || touched.name ? (
                        <p className="text-danger">{errors.name}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <Label className="form-label mt-15">
                        Email Address *
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
                    <div className="form-group mb-0">
                      <Label className="form-label mt-5">Gender *</Label>
                      <Select
                        option1="Male"
                        option2="Female"
                        name="gender"
                        onChange={handleChange}
                        value={values.gender}
                      />
                      {errors.gender || touched.gender ? (
                        <p className="text-danger">{errors.gender}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-12">
                      <div className="form-group mb-5 mt-5 form-group-info text-center">
                        <Input
                          className="btn btn-theme btn-black"
                          type="submit"
                          value="REGISTER"
                          onClick={handleClick}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <p>
                        Have an account already?
                        <Link to="/login">&nbsp;&nbsp;Log in here</Link>
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

export default RegisterForm;

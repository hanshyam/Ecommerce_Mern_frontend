import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

function Register() {
  return (
    <>
      <Container class1="register-wrapper home-wrapper-2 py-5">
      <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: "500px" }}>
              <h2 className="text-center mb-4">Register</h2>

              {/* Registration Form */}
              <form method="POST">
                {/* Username Input */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <CustomInput type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"/>
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <CustomInput type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"/>
                </div>

                {/* Password Input */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <CustomInput type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"/>
                </div>

                {/* Confirm Password Input */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <CustomInput type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm your password"/>
                </div>

                {/* Register Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark">
                    Register
                  </button>
                </div>
              </form>

              {/* Login Link */}
              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/account/login" className="text-primary">
                  Log in
                </Link>
              </p>
            </div>
          </div>
      </Container>
    </>
  );
}

export default Register;

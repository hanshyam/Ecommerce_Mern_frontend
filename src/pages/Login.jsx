import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

function Login() {
  return (
    <>
      <Container class1="login-wrapper home-wrapper-2 py-5">
      <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: "500px" }}>
              <h2 className="text-center mb-4">Log In</h2>

              {/* Log In Form */}
              <form method="POST">
                {/* Username Input */}
                <div className="mb-3">
                  <label htmlFor="emailOrusername" className="form-label">
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

                {/* Forgot Password Link */}
                <div className="mb-3 text-end">
                  <Link to="/account/forgot-password" className="text-primary">
                    Forgot Password?
                  </Link>
                </div>

                {/* Log In Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark">
                    Log In
                  </button>
                </div>
              </form>

              {/* Sign Up Link */}
              <p className="text-center mt-3">
                Don't have an account?{" "}
                <Link to="/account/register" className="text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
      </Container>
    </>
  );
}

export default Login;

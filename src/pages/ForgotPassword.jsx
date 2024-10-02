import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
function ForgotPassword() {
  return (
    <>
      <Container class1="forget-password-wrapper home-wrapper-2 py-5">
      <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: "500px" }}>
              <h2 className="text-center mb-4">Forgot Password</h2>

              {/* Forgot Password Form */}
              <form method="POST">
                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Enter your email
                  </label>
                  <CustomInput type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"/>
                </div>

                {/* Reset Password Button */}
                <Link to='/account/reset-password' className="d-grid">
                  <button type="submit" className="btn btn-dark">
                    Reset Password
                  </button>
                </Link>
              </form>

              {/* Back to Log In Link */}
              <p className="text-center mt-3">
                Remembered your password?{" "}
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

export default ForgotPassword;

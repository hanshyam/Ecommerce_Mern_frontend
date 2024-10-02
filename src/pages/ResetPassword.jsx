import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
function ResetPassword() {
  return (
    <>
      <Container class1="register-wrapper home-wrapper-2 py-5">
      <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: "500px" }}>
              <h2 className="text-center mb-4">Reset Password</h2>

              {/* Registration Form */}
              <form method="POST">
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
                    Ok
                  </button>
                </div>
              </form>
            </div>
          </div>
      </Container>
    </>
  );
}

export default ResetPassword;

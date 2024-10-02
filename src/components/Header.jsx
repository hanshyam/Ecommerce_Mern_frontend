import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  const [enableLogin, setEnableLogin] = useState("z-n1");
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 7566650644">
                  +91 7566650644
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white text-decoration-none">
                  SwiftShop.
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="text-decoration-none d-flex align-items-center  gap-10 text-white"
                  >
                    <img src="./src/assets/images/compare.svg" alt="Compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="text-decoration-none d-flex align-items-center  gap-10 text-white"
                  >
                    <img src="./src/assets/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div
                  onClick={() =>
                    enableLogin == "z-n1"
                      ? setEnableLogin("z-2")
                      : setEnableLogin("z-n1")
                  }
                  className="position-relative"
                >
                  <Link className="text-decoration-none d-flex align-items-center gap-10 text-white login-btn ">
                    <img src="./src/assets/images/user.svg" alt="Login" />
                    <p className="mb-0">
                      Log In <br /> My Account
                    </p>
                  </Link>
                  <div
                    className={`login-register position-absolute d-flex flex-column ${enableLogin}`}
                  >
                    <Link to="/account/login">
                      <h5>Login</h5>
                    </Link>
                    <Link to="/account/register">
                      <h5>Register</h5>
                    </Link>
                  </div>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="text-decoration-none d-flex align-items-center gap-10 text-white"
                  >
                    <img src="./src/assets/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="./src/assets/images/menu.svg" alt="menu" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

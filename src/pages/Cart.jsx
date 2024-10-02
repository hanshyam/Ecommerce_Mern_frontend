import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <>
      <BreadCrumb title={"My Cart"} />
      <Meta title={"My Cart"} />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
      <div className="row cart-headings">
            <div className="col-7 d-flex justify-content-start">
              <p>Product</p>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <p>Quantity</p>
            </div>
            <div className="col-2 d-flex justify-content-end">
              <p>Total</p>
            </div>
          </div>
          <hr class="hr mt-1 mb-5" />
          <div className="row d-flex flex-column gap-30">
            <div className="row">
              <div className="col-7 d-flex justify-content-start">
                <div className="d-flex gap-15">
                  <div className="cart-product-image">
                    <img
                      src="./src/assets/images/watch.jpg"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div className="cart-product-details d-flex flex-column justify-content-center gap-10">
                    <p className="brand">Samsung</p>
                    <h5 className="title">
                      Samsung R6 Wireless 360 Multiroom Speaker
                    </h5>
                    <h4 className="price">$100</h4>
                    <h6 className="color">Color: Black</h6>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-start">
                <div className="d-flex gap-15 align-items-center">
                  <div className="product-quantity">
                    <div className="input-group" style={{ width: "120px" }}>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={quantity}
                      />
                      <div className="d-flex flex-column">
                        <button
                          className=""
                          type="button"
                          onClick={decreaseQuantity}
                        >
                          −
                        </button>
                        <button
                          className=""
                          type="button"
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="remove-button">
                    <RiDeleteBinLine className="m-0" />
                  </div>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <div className="product-total-price">
                  <h4>$100.00</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-7 d-flex justify-content-start">
                <div className="d-flex gap-15">
                  <div className="cart-product-image">
                    <img
                      src="./src/assets/images/watch.jpg"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div className="cart-product-details d-flex flex-column justify-content-center gap-10">
                    <p className="brand">Samsung</p>
                    <h5 className="title">
                      Samsung R6 Wireless 360 Multiroom Speaker
                    </h5>
                    <h4 className="price">$100</h4>
                    <h6 className="color">Color: Black</h6>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-start">
                <div className="d-flex gap-15 align-items-center">
                  <div className="product-quantity">
                    <div className="input-group" style={{ width: "120px" }}>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={quantity}
                      />
                      <div className="d-flex flex-column">
                        <button
                          className=""
                          type="button"
                          onClick={decreaseQuantity}
                        >
                          −
                        </button>
                        <button
                          className=""
                          type="button"
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="remove-button">
                    <RiDeleteBinLine className="m-0" />
                  </div>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <div className="product-total-price">
                  <h4>$100.00</h4>
                </div>
              </div>
            </div>
          </div>
          <hr class="hr my-5" />
          <div className="row">
            <div className="col-6">
              <div className="coupon-box">
                <h3>Coupon</h3>
                <input type="text" placeholder="Enter Here Coupon" />
                <button className="button1 border-0">Submit</button>
              </div>
            </div>
            <div className="col-6">
              <div className="subTotal-section d-flex flex-column gap-15">
                <div className="d-flex gap-30">
                  <h3>Subtotal:</h3>
                  <p>$100.00</p>
                </div>
                <Link to='/checkout'>
                  <button className="button1 border-0">Checkout</button>
                </Link>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Cart;

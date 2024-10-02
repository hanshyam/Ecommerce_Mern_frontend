import React from "react";
import { Link } from "react-router-dom";
const CheckoutPage = () => {
  return (
    <>
      <section className="checkout-wrapper">
        <div className="checkout-header">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12 d-flex justify-content-between my-4">
                <h3>SwiftShop.</h3>
                <img
                  className="img-fluid cursor-pointer"
                  src="./src/assets/images/add-cart.svg"
                  alt="cart"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl checkout-section">
          <div className="row">
            <div className="col-6 pt-5 pe-5 checkout-left">
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="checkout-headings">Contact</h2>
                  <Link to="/login" className="mb-0">
                    Log In
                  </Link>
                </div>
                <div className="d-flex mt-3 ">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email or Phone number"
                  />
                </div>
                <div className="d-flex mt-3 gap-10">
                  <input
                    className="form-check-input mt-0 p-2"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <h5>Email me with news and offers</h5>
                </div>
              </div>
              <div className="py-5">
                <div className="d-flex align-items-center">
                  <h2 className="checkout-headings">Delivery</h2>
                </div>
                <div className="d-flex mt-3 gap-10">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="d-flex mt-3 gap-10">
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    placeholder="Address"
                  />
                </div>
                <div className="d-flex mt-3 gap-10">
                  <input
                    className="form-control"
                    type="text"
                    name="apartment"
                    placeholder="Apartment , suite, etc. (optional)"
                  />
                </div>
                <div className="d-flex mt-3 gap-10">
                   <input className="form-control" type="text" name="city"  placeholder="City"/>
                   <input className="form-control" type="text" name="state"  placeholder="State"/>
                   <input className="form-control" type="text" name="zipcode"  placeholder="Zip Code"/>
                </div>
                <div className="d-flex mt-3 gap-10">
                  <input
                    className="form-check-input mt-0 p-2"
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                  <h5>Save this information for next time</h5>
                </div>
              </div>
               <div className="py-5">
               <h2 className="checkout-headings mb-1">Payment</h2>
               <p>All transactions are secure and encrypted.</p>

               <div className="mt-3">
                 <div className="credit-card-top">
                  <h5>Credit Card</h5>
                  <img src="./src/assets/images/checkout-card.svg" alt="checkout" />
                 </div>
                 <div className="credit-card-bottom">
                    <input type="text" className="form-control"  name="cardnumber" placeholder="Card Number"/>
                    
                    <div className="d-flex gap-15">
                       <input type="text" className="form-control" name="expmonth" placeholder="Expiration date: (MM/YY)"/>
                       <input type="text" className="form-control" name="cvv" placeholder="CVV"/>
                    </div>
                    <input type="text" className="form-control" name="cardname" placeholder="Name on card"/> 
                 </div> 
               </div>
               </div>
               <button className="btn btn-primary w-100 py-3 mb-5">Pay Now</button>
               <hr className="hr"></hr>
               <div className="d-flex mb-5 justify-content-between">
                 <Link to='/refund-policy'>Refund Policy</Link>
                 <Link to='/refund-policy'>Shipping Policy</Link>
                 <Link to='/refund-policy'>Privacy Policy</Link>
                 <Link to='/refund-policy'>Term of sevices</Link>
                 <Link to='/refund-policy'>Contact information</Link>
               </div>
            </div>
            <div className="col-6 home-wrapper-2 ps-5">
               
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;

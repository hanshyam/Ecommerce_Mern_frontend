import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  className="position-absolute cross"
                  src="./src/assets/images/cross.svg"
                  alt="cross"
                />
                <div className="product-card-image">
                  <img src="./src/assets/images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Kids headphone bulk 10 pack multi colored for students
                  </h5>
                  <h6 className="price mb-3">$100</h6>
                  <button className="button border-0">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Wishlist;

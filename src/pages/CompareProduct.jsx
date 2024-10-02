import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";
const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
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
                  <div>
                    <div className="product-detail">
                        <h5 className="mb-0">Brand:</h5>
                        <p className="mb-0">Havels</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Type:</h5>
                        <p className="mb-0">Watch</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Availability:</h5>
                        <p className="mb-0">In Stock</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Color:</h5>
                        <p className="mb-0">
                          <Color/>
                        </p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Size:</h5>
                        <p className="mb-0">XL L M S</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
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
                  <div>
                    <div className="product-detail">
                        <h5 className="mb-0">Brand:</h5>
                        <p className="mb-0">Havels</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Type:</h5>
                        <p className="mb-0">Watch</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Availability:</h5>
                        <p className="mb-0">In Stock</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Color:</h5>
                        <p className="mb-0">
                          <Color/>
                        </p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Size:</h5>
                        <p className="mb-0">XL L M S</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
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
                  <div>
                    <div className="product-detail">
                        <h5 className="mb-0">Brand:</h5>
                        <p className="mb-0">Havels</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Type:</h5>
                        <p className="mb-0">Watch</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Availability:</h5>
                        <p className="mb-0">In Stock</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Color:</h5>
                        <p className="mb-0">
                          <Color/>
                        </p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Size:</h5>
                        <p className="mb-0">XL L M S</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
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
                  <div>
                    <div className="product-detail">
                        <h5 className="mb-0">Brand:</h5>
                        <p className="mb-0">Havels</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Type:</h5>
                        <p className="mb-0">Watch</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Availability:</h5>
                        <p className="mb-0">In Stock</p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Color:</h5>
                        <p className="mb-0">
                          <Color/>
                        </p>
                    </div>
                    <div className="product-detail">
                        <h5 className="mb-0">Size:</h5>
                        <p className="mb-0">XL L M S</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
      </Container>
    </>
  );
};

export default CompareProduct;

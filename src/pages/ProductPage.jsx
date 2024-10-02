import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import Color from "../components/Color";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiShare2Fill } from "react-icons/ri";
import ProductCard from "../components/ProductCard";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Container from "../components/Container";
const ProductPage = () => {
  const [mainImage, setMainImage] = useState("main-product-1.webp");
  const [quantity, setQuantity] = useState(1);
  const [shippingOption, setShippingOption] = useState(false);
  console.log(shippingOption);
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
      <Meta title={"Main Products"} />
      <BreadCrumb title="Main Products" />
      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-5">
            <div className="d-flex flex-column gap-15">
              <div className="main-product-main-image position-relative">
                <img
                  className="img-fluid"
                  src={`./src/assets/images/${mainImage}`}
                  alt="main-product"
                />
                <img
                  className="position-absolute zoom"
                  src="./src/assets/images/img-zoom.svg"
                  alt="zoom"
                />
              </div>
              <div className="d-flex w-100 gap-15">
                <div
                  onClick={() => setMainImage("main-product-1.webp")}
                  className="subMain-img"
                >
                  <img
                    className="img-fluid"
                    src="./src/assets/images/main-product-1.webp"
                    alt="image"
                  />
                </div>
                <div
                  onClick={() => setMainImage("main-product-1(2).webp")}
                  className="subMain-img"
                >
                  <img
                    className="img-fluid"
                    src="./src/assets/images/main-product-1(2).webp"
                    alt="image"
                  />
                </div>
                <div
                  onClick={() => setMainImage("main-product-1(3).webp")}
                  className="subMain-img"
                >
                  <img
                    className="img-fluid"
                    src="./src/assets/images/main-product-1(3).webp"
                    alt="image"
                  />
                </div>
                <div
                  onClick={() => setMainImage("main-product-1(4).webp")}
                  className="subMain-img"
                >
                  <img
                    className="img-fluid"
                    src="./src/assets/images/main-product-1(4).webp"
                    alt="image"
                  />
                </div>
                <div
                  onClick={() => setMainImage("main-product-1(5).webp")}
                  className="subMain-img"
                >
                  <img
                    className="img-fluid"
                    src="./src/assets/images/main-product-1(5).webp"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 main-product-details d-flex flex-column gap-15">
            <h2>Xiaomi Redmi Note 12 Pro 5G 128 GB, 6 GB RAM</h2>
            <div className="d-flex gap-10 align-items-center">
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="mb-0">(0)</p>
            </div>
            <h3 className="price">$45.00</h3>
            <p>Shipping Calculated at Checkout</p>
            <hr class="hr" />
            <div className="d-flex flex-column gap-15">
              <div className="d-flex gap-10 align-items-center">
                <h4>Type:</h4>
                <p>Mobile Phones</p>
              </div>
              <div className="d-flex gap-10 align-items-center">
                <h4>Tags:</h4>
                <p>Smart Phone,</p>
              </div>
              <div className="d-flex gap-10 align-items-center">
                <h4>Collection:</h4>
                <p>
                  Android Phones, Apple Phones, Headphones, Our Store, Phones,
                  Smart Phones,
                </p>
              </div>
              <div className="d-flex gap-10 align-items-center">
                <h4>Availability:</h4>
                <p>In Stock</p>
              </div>
            </div>
            <hr className="hr" />
            <div className="d-flex flex-column gap-10 mb-2">
              <h4>Color</h4>
              <Color />
            </div>
            <div className="d-flex flex-column gap-10 mb-2">
              <h4>Storage</h4>
              <div className="d-flex gap-10">
                <div className="active-storage main-storage-option">
                  <h5>512GB</h5>
                </div>
                <div className="main-storage-option">
                  <h5>256GB</h5>
                </div>
                <div className="main-storage-option">
                  <h5>128GB</h5>
                </div>
                <div className="main-storage-option">
                  <h5>64GB</h5>
                </div>
              </div>
            </div>
            <div className="d-flex gap-30 mb-2 align-items-center">
              <h4>Quantity</h4>
              <div className="input-group" style={{ width: "120px" }}>
                <input
                  type="text"
                  className="form-control text-center"
                  value={quantity}
                />
                <div className="d-flex flex-column">
                  <button className="" type="button" onClick={decreaseQuantity}>
                    −
                  </button>
                  <button className="" type="button" onClick={increaseQuantity}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex gap-15 mb-2">
              <button className="button border-0">Add To Cart</button>
              <button className="button border-0">Buy IT Now</button>
            </div>
            <div className="d-flex gap-30 wish-compare-option mb-2">
              <div className="d-flex gap-10">
                <img src="./src/assets/images/wish.svg" alt="wishlist" />
                <h6>Add to wishlist</h6>
              </div>
              <div className="d-flex gap-10 align-items-center">
                <img src="./src/assets/images/prodcompare.svg" alt="wishlist" />
                <h6>Add to compare</h6>
              </div>
            </div>
            <div className="d-flex flex-column cursor-pointer">
              <div
                onClick={() => {
                  shippingOption == false
                    ? setShippingOption(true)
                    : setShippingOption(false);
                }}
              >
                <div className="d-flex justify-content-between">
                  <h4>Shipping & Returns</h4>
                  {shippingOption == false ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )}
                </div>
                <hr className="hr" />
              </div>
              <div className={shippingOption === false ? "d-none" : ""}>
                <p>
                  Free shipping and returns available on all orders!
                  <br />
                  We ship all US domestic orders within 5-10 business days!
                </p>
                <hr className="hr" />
              </div>
            </div>
            <div className="share-button d-flex gap-10 align-items-center">
              <RiShare2Fill className="mb-0" />
              <p>Share</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 py-5 main-product-other-details">
            <button className="button1 border-0">Description</button>
            <div className="product-desc">
              <p>
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice is untrammelled and when
                nothing prevents our being able to do what we like best, every
                pleasure is to be welcomed and every pain avoided. But in
                certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures
                have to be repudiated and annoyances accepted. The wise man
                therefore always holds in these matters to this principle of
                selection: he rejects pleasures to secure other greater
                pleasures, or else he endures pains to avoid worse pains."
              </p>
            </div>
          </div>
          <div className="col-12 mb-5 d-flex flex-column gap-30">
            <h3>You May Also Like</h3>
            <div className="d-flex justify-content-between gap-10">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <hr className="hr" />
        </div>
        <div className="row py-5">
          <div className="col-4 d-flex flex-column gap-30">
            <h3>Review</h3>
            <div className="d-flex align-items-center justify-content-start gap-10">
              <p className="mb-0">Click to review: </p>
              <ReactStars
                count={5}
                value={0}
                size={30}
                edit={true}
                color="#000"
                activeColor="#ffd700"
                emptyIcon={<CiStar />}
                filledIcon={<FaStar />}
              />
            </div>
          </div>
          <div className="col-8">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex gap-10">
                <select
                  name=""
                  id=""
                  className="form-control form-select"
                  style={{ width: "150px" }}
                >
                  <option value="manual" selected="selected">
                    Recent
                  </option>
                  <option value="Lowest">Lowest</option>
                  <option value="Highest">Highest</option>
                </select>
                <select name="" id="" className="form-control form-select">
                  <option value="manual" selected="selected">
                    10
                  </option>
                  <option value="Lowest">20</option>
                  <option value="Highest">50</option>
                  <option value="Highest">100</option>
                </select>
              </div>
              <div className="d-flex align-items-center main-product-page-section">
                <div>
                  <MdKeyboardArrowLeft />
                </div>
                <p>Page 1</p>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>
            <div className="col-12 review-box d-flex align-items-center justify-content-center">
              <p style={{ fontSize: "15px" }}>
                No reviews yet, lead the way and share your thoughts!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPage;

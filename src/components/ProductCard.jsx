import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = ({ grid }) => {
  const location = useLocation();
  return (
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/1" className="product-card position-relative">
        <div className="wishlist position-absolute">
          <img src="./src/assets/images/wish.svg" alt="wishlist" />
        </div>
        <div className="product-image">
          <img
            className="img-fluid"
            src="./src/assets/images/watch-product-1.jpg"
            alt="product"
          />
          <img
            className="img-fluid"
            src="./src/assets/images/watch-product-2.jpg"
            alt="product"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          {grid == 12 && location != "/" ? (
            <p className="product-description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
          ) : (
            <></>
          )}
          <p className="price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="bg-transparent border-0">
              <img src="./src/assets/images/prodcompare.svg" alt="compare" />
            </button>
            <button className="bg-transparent border-0">
              <img src="./src/assets/images/view.svg" alt="view" />
            </button>
            <button className="bg-transparent border-0">
              <img src="./src/assets/images/add-cart.svg" alt="AddCart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

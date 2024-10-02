import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label htmlFor="" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label htmlFor="" className="form-check-label">
                        Out Of Stoke (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex gap-10 align-items-center">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="From"
                        id="floatingInput"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="To"
                        id="floatingInput"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <Color/>
                  </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="color-1"
                      />
                      <label htmlFor="" className="form-check-label">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="color-2"
                      />
                      <label htmlFor="" className="form-check-label">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Iphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tv
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="./src/assets/images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="./src/assets/images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="manual" selected="selected">
                        best-selling
                      </option>
                      <option value="title-ascending">
                        Alphabatically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabatically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">old, old to new</option>
                      <option value="created-descending">
                        olde, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img
                        onClick={() => setGrid(3)}
                        className={`${
                          grid == 3 ? "img-fluid active" : "img-fluid"
                        }`}
                    
                        src={`${
                          grid == 3 ? "./src/assets/images/gr4-active.svg" : "./src/assets/images/gr4.svg"
                        }`}
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(4)}
                        className={`${
                          grid == 4 ? "img-fluid active" : "img-fluid"
                        }`}
                        
                        src={`${
                          grid == 4 ? "./src/assets/images/gr3-active.svg" : "./src/assets/images/gr3.svg"
                        }`}
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(6)}
                        className={`${
                          grid == 6 ? "img-fluid active" : "img-fluid"
                        }`}
                        src={`${
                          grid == 6 ? "./src/assets/images/gr2-active.svg" : "./src/assets/images/gr2.svg"
                        }`}
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(12)}
                        className={`${
                          grid == 12 ? "img-fluid active" : "img-fluid"
                        }`}
                        src={`${
                          grid == 12 ? "./src/assets/images/gr-active.svg" : "./src/assets/images/gr.svg"
                        }`}
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list">
                <div className="d-flex flex-wrap gap-10">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default OurStore;

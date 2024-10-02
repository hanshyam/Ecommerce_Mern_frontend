import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import {services} from '../utils/Data';
const Home = () => {
  return (
    <>
      <Meta title={"Home"} />

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                className="img-fluid rounded-3"
                src="./src/assets/images/main-banner-1.jpg"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROPS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>
                  From $999.00 or $41.62/mo.
                  <br />
                  for 24 mo. Footnote*
                </p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="./src/assets/images/catbanner-01.jpg"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>best sale</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $1699.00 or <br /> $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="./src/assets/images/catbanner-03.jpg"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $599.00 or
                    <br /> $49.91/mo. *
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="./src/assets/images/catbanner-02.jpg"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15%</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest band
                    <br />
                    styles and colors.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="./src/assets/images/catbanner-04.jpg"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    High-fidelity Playback &<br />
                    ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
            {
            services?.map((item,key)=>{
                return(
                  <div className="d-flex align-items-center gap-15" key={key}>
                <img src={item.image} alt="services" />
                <div>
                  <h6>{item.title}</h6>
                  <p className="mb-0">{item.tagline}</p>
                </div>
              </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/assets/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/assets/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Smart Telivision</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/assets/images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/assets/images/headphone.jpg" alt="headphone" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/assets/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/assets/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Smart Telivision</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/assets/images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/assets/images/headphone.jpg" alt="headphone" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="./src/assets/images/famous-1.jpg"
                alt="famous"
              />
              <div className="famous-content text-white position-absolute">
                <h5 className="mb-0">Big Screen</h5>
                <h6 className="mb-0">Smart Watch Series 7</h6>
                <p className="mb-0">From %399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="./src/assets/images/famous-2.jpg"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="mb-0">studio display</h5>
                <h6 className="mb-0">600 nits of brightness.</h6>
                <p className="mb-0">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="./src/assets/images/famous-3.jpg"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="mb-0">smartphones</h5>
                <h6 className="mb-0">SmartPhone 13 Pro.</h6>
                <p className="mb-0">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="./src/assets/images/famous-4.jpg"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="mb-0">home-speakers</h5>
                <h6 className="mb-0">Room-filling sounds.</h6>
                <p className="mb-0">From %399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="./src/assets/images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/assets/images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/assets/images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/assets/images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/assets/images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/assets/images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/assets/images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/assets/images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blog</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
      </Container>
      
    </>
  );
};

export default Home;

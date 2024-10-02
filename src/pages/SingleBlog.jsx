import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { RiShare2Fill } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const SingleBlog = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "The Ultimate Guide to Marketing Strategies to Improve Sales",
          text: "Check out this amazing blog post on improving sales through marketing strategies!",
          url: window.location.href, // Use the current page URL
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Error sharing", error);
        });
    } else {
      alert("Sharing is not supported in your browser.");
    }
  };

  return (
    <>
      <Meta title={"Single-Blog"} />
      <BreadCrumb title="Single-Blog" />
      <Container className="singleBlog-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div>
                <img
                  className="img-fluid w-100"
                  src="./src/assets/images/blog-1.jpg"
                  alt="blog"
                />
              </div>
              <div className="blog-details mt-5">
                <h2>
                  The Ultimate Guide to Marketing Strategies to Improve Sales
                </h2>
                <div className="d-flex gap-30 my-3">
                  <p className="blog-date">July 20, 2024 </p>
                  <p className="author-name">Shyam Patidar</p>
                </div>
                <div onClick={handleShare} className="d-flex gap-15 align-items-center shareBlog">
                  <RiShare2Fill className="share-icon"  />
                  <p className="mb-0">Share</p>
                </div>
                <p className="my-3">
                  Many things about electronic devices your kids don't want you
                  to know How storage devices can help you predict the future.
                  Why mom was right about wholesale accessories. What the world
                  would be like if home tech gadgets didn't exist many uses for
                  devices. How devices can help you predict the future. Ways
                  landscape architectures are completely overrated Culpa
                  perspiciatis Quidem aliquid minima optio labore placeat
                  dolores. Sint occaecati sunt autem aut. Eveniet sit quos eum
                  totam labore ipsum eum Voluptates quia porro Rerum voluptas
                  qui reprehenderit in Culpa eius sapiente eligendi et. Dicta
                  aut rerum iusto doloribus consequuntur. Enim innihil molestias
                  estid numquam. perferendis sit reiciendis. Dolore delectus
                  numquam laboriosam quisquam harum. Omnis non quia. Id
                  blanditiis possimus quibusdam est nihil temporibus.
                  dignissimos pariatur laboriosam consequatur adipisci dolor.
                  Magni repudiandae sapiente qui. Et et enim non. aut nihil
                  dolores aut est. Eveniet officiis quaerat ut a. Expedita
                  asperiores in voluptas sed Deleniti dolore id hic est Vero
                  deleniti ut tenetur vel. Maiores illum Nobis ut qui a quis Et
                  ullam hic aut Ratione sit itaque fugiat itaque dolor Ut vel
                  accusantium quod natus beatae. Possimus aliquam molestiae
                  minus et deserunt ipsa omnis. Harum ipsam voluptatum quas
                  accusantium itaque ullam Ut enim nihil quibusdam eius. Ut nam
                  atque nesciunt tempora. Nihil quia corrupti sed fugiat
                  accusamus fugit. Animi accusantium atque culpa rerum aut. Qui
                  sit illum laudantium veniam voluptatibus dolor excepturi.
                  Minima et sit cumque unde. Sed temporibus consequuntur
                  corporis. Blanditiis voluptatum distinctio voluptas.
                  Voluptatem ipsam excepturi qui saepe voluptate. minus
                  voluptatem nihil. Veniam quasi et delectus maiores et. Sit
                  voluptatem ducimus est vero. Et minus magni aspernatur.
                  corrupti quos iure cupiditate et. Commodi laborum doloribus
                  qui corporis. Optio molestias aperiam incidunt nostrum esse.
                  Cumque sapiente sed totam Culpa reiciendis odio et nihil. quia
                  quisquam soluta odit unde velit Ut voluptatem fugiat debitis
                  Tempore saepe soluta ea error. Nemo quo qui qui quia dolorem
                  eos. Tenetur corporis aut illo officia. Libero et aliquam
                  consequatur. Aut sed et quae omnis quisquam. Necessitatibus
                  non est. Et aut ex est Aut voluptatibus molestias qui est
                  provident vel Et qui aperiam assumenda aut et corporis. Et
                  velit sed quisquam. Voluptatem laudantium qui veniam. Tempore
                  hic error rerum iusto magni maxime et Non eum earum non vel at
                  Omnis Quia odit illo placeat voluptas Modi et suscipit Enim
                  sunt deleniti Repellendus Minus et omnis ipsum Dolores natus
                  dolor iure soluta Mollitia laudantium dolore porro omnis et
                  pariatur fugit Magni ipsam hic aut ut. Amet quas voluptates
                  hic aperiam eaque. Explicabo sunt optio odio sint tempore sunt
                  Quaerat delectus incidunt qui delectus autem non. Cumque fuga
                  iste nobis. fugiat sit quisquam dolore voluptatem et. Itaque
                  rerum cumque cum voluptatem non. Nobis temporibus consectetur
                  debitis. Autem excepturi non quam fugit culpa facere. Et
                  dolorem et. aut atque eum. explicabo assumenda velit odit
                  consequatur tempore. Tempora aut et voluptatem corporis.
                  Doloribus nulla quia consectetur modi in. Enim labore et rem
                  iure quaerat. Ab praesentium dolor magni vel. quia maiores
                  nesciunt asperiores voluptatum. Qui atque asperiores est. Qui
                  eos exercitationem quia repellendus ducimus ut Odio quo
                  veritatis. Voluptatem at nobis quis et non. Id ut libero
                  voluptatibus. Eos fugiat iste nemo. facilis ratione optio
                  eius. Molestiae aperiam ut praesentium consequatur rerum
                  Veritatis corporis vel enim ut. Placeat quis officia fuga
                  quia. Qui recusandae et necessitatibus eius. Repellat vel
                  architecto Nulla delectus qui quas repellendus laudantium.
                  Ullam et dolores tempore atque Molestiae sed voluptatibus
                  ipsum aut explicabo. Beatae illum eos ipsam placeat. Debitis
                  voluptatem ad id. Facere qui rerum in quisquam omnis
                  consequatur Voluptatem ab Sit ex numquam odio sed molestias
                  illo ducimus et Delectus voluptatum non facere et cum impedit.
                  quam aut quibusdam quas ab. Labore omnis qui soluta optio.
                  Doloremque nihil in assumenda autem laudantium. error odit et
                  at maxime. Et odio asperiores ut eum. Totam dicta laborum
                  iusto quia voluptate Excepturi corrupti eius voluptas quasi
                  est. Aut amet molestiae omnis non corrupti ut. explicabo
                  magnam dolores in animi eos. Earum et est temporibus corrupti
                  tempore. dolor et dolores aut et vitae. Laborum similique est
                  ab odit pariatur. Deleniti laboriosam sequi consequuntur
                  perferendis et. Hic est voluptatem animi autem Rerum quod nemo
                  Maiores nihil totam aut id Corporis
                </p>

                <Link to='/' className="d-flex justify-content-center align-items-center gap-10 backToBlog py-3">
                <IoArrowBack className="mb-0"/>
                 <h4 className="mb-0">Back to Blog</h4>
                </Link>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;

// src/pages/home/Bestseller.jsx
import { Link } from "react-router-dom";

const BESTSELLERS = [
  { id: 1, img: "/img/product-3.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", delay: "0.1s" },
  { id: 2, img: "/img/product-4.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", delay: "0.3s" },
  { id: 3, img: "/img/product-5.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", delay: "0.5s" },
  { id: 4, img: "/img/product-6.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", delay: "0.1s" },
  { id: 5, img: "/img/product-7.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", delay: "0.3s" },
  { id: 6, img: "/img/product-11.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", delay: "0.5s" },
];

function BestsellerCard({ item }) {
  return (
    <div className={`col-md-6 col-lg-6 col-xl-4 wow fadeInUp`} data-wow-delay={item.delay}>
      <div className="products-mini-item border">
        <div className="row g-0">
          <div className="col-5">
            <div className="products-mini-img border-end h-100">
              <img src={item.img} className="img-fluid w-100 h-100" alt={`${item.title} ${item.code}`} loading="lazy" />
              <div className="products-mini-icon rounded-circle bg-primary">
                <button
                  type="button"
                  className="btn p-0 border-0 bg-transparent"
                  aria-label="Preview product"
                  onClick={() => {
                    // TODO: 미리보기 모달/상세 이동
                  }}
                >
                  <i className="fa fa-eye fa-1x text-white"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-7">
            <div className="products-mini-content p-3">
              <Link to="/shop" className="d-block mb-2 text-decoration-none">
                {item.category}
              </Link>

              <Link to="/single" className="d-block h4 text-decoration-none">
                {item.title} <br /> {item.code}
              </Link>

              <del className="me-2 fs-5">{item.oldPrice}</del>
              <span className="text-primary fs-5">{item.price}</span>
            </div>
          </div>
        </div>

        <div className="products-mini-add border p-3">
          <button
            type="button"
            className="btn btn-primary border-secondary rounded-pill py-2 px-4"
            onClick={() => {
              // TODO: 장바구니 추가
            }}
          >
            <i className="fas fa-shopping-cart me-2"></i> Add To Cart
          </button>

          <div className="d-flex">
            <button
              type="button"
              className="text-primary d-flex align-items-center justify-content-center me-3 btn p-0 border-0 bg-transparent"
              aria-label="Compare"
              onClick={() => {
                // TODO: 비교 기능
              }}
            >
              <span className="rounded-circle btn-sm-square border">
                <i className="fas fa-random"></i>
              </span>
            </button>

            <button
              type="button"
              className="text-primary d-flex align-items-center justify-content-center me-0 btn p-0 border-0 bg-transparent"
              aria-label="Add to wishlist"
              onClick={() => {
                // TODO: 찜 기능
              }}
            >
              <span className="rounded-circle btn-sm-square border">
                <i className="fas fa-heart"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Bestseller() {
  return (
    <div className="container-fluid products pb-5">
      <div className="container products-mini py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: 700 }}>
          <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp" data-wow-delay="0.1s">
            Bestseller Products
          </h4>
          <p className="mb-0 wow fadeInUp" data-wow-delay="0.2s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="row g-4">
          {BESTSELLERS.map((item) => (
            <BestsellerCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

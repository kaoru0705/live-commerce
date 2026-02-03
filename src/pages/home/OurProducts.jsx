// src/pages/home/OurProducts.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, img: "/img/product-3.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", tag: "all", badge: "new" },
  { id: 2, img: "/img/product-4.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", tag: "new", badge: "sale" },
  { id: 3, img: "/img/product-5.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", tag: "featured" },
  { id: 4, img: "/img/product-6.png", category: "SmartPhone", title: "Apple iPad Mini", code: "G2356", oldPrice: "$1,250.00", price: "$1,050.00", tag: "top", badge: "new" },
];

const TABS = [
  { key: "all", label: "All Products" },
  { key: "new", label: "New Arrivals" },
  { key: "featured", label: "Featured" },
  { key: "top", label: "Top Selling" },
];

function ProductCard({ p }) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
        <div className="product-item-inner border rounded">
          <div className="product-item-inner-item">
            <img src={p.img} className="img-fluid w-100 rounded-top" alt={`${p.title} ${p.code}`} loading="lazy" />

            {p.badge === "new" && <div className="product-new">New</div>}
            {p.badge === "sale" && <div className="product-sale">sale</div>}

            <div className="product-details">
              <button
                type="button"
                className="btn p-0 border-0 bg-transparent"
                aria-label="Preview product"
                onClick={() => {
                  // TODO: 미리보기/상세
                }}
              >
                <i className="fa fa-eye fa-1x" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div className="text-center rounded-bottom p-4">
            <Link to="/shop" className="d-block mb-2 text-decoration-none">
              {p.category}
            </Link>
            <Link to="/single" className="d-block h4 text-decoration-none">
              {p.title} <br /> {p.code}
            </Link>
            <del className="me-2 fs-5">{p.oldPrice}</del>
            <span className="text-primary fs-5">{p.price}</span>
          </div>
        </div>

        <div className="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
          <button
            type="button"
            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"
            onClick={() => {
              // TODO: 장바구니 추가
            }}
          >
            <i className="fas fa-shopping-cart me-2"></i> Add To Cart
          </button>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <i className="fas fa-star text-primary" aria-hidden="true"></i>
              <i className="fas fa-star text-primary" aria-hidden="true"></i>
              <i className="fas fa-star text-primary" aria-hidden="true"></i>
              <i className="fas fa-star text-primary" aria-hidden="true"></i>
              <i className="fas fa-star" aria-hidden="true"></i>
            </div>

            <div className="d-flex">
              <button
                type="button"
                className="text-primary d-flex align-items-center justify-content-center me-3 btn p-0 border-0 bg-transparent"
                aria-label="Compare"
              >
                <span className="rounded-circle btn-sm-square border">
                  <i className="fas fa-random" aria-hidden="true"></i>
                </span>
              </button>

              <button
                type="button"
                className="text-primary d-flex align-items-center justify-content-center me-0 btn p-0 border-0 bg-transparent"
                aria-label="Add to wishlist"
              >
                <span className="rounded-circle btn-sm-square border">
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurProducts() {
  const [tab, setTab] = useState("all");

  const visible = useMemo(() => {
    if (tab === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.tag === tab);
  }, [tab]);

  return (
    <div className="container-fluid product py-5">
      <div className="container py-5">
        <div className="tab-class">
          <div className="row g-4">
            <div className="col-lg-4 text-start wow fadeInLeft" data-wow-delay="0.1s">
              <h1>Our Products</h1>
            </div>

            <div className="col-lg-8 text-end wow fadeInRight" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                {TABS.map((t) => (
                  <li className="nav-item mb-4" key={t.key}>
                    <button
                      type="button"
                      className={`d-flex mx-2 py-2 bg-light rounded-pill border-0 ${tab === t.key ? "active" : ""}`}
                      onClick={() => setTab(t.key)}
                    >
                      <span className="text-dark" style={{ width: 130 }}>
                        {t.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row g-4">
            {visible.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

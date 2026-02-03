import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function ShopPage() {
  // ---- Sidebar data
  const categories = useMemo(
    () => [
      { label: "Accessories", count: 3, to: "/shop?cat=accessories" },
      { label: "Electronics & Computer", count: 5, to: "/shop?cat=electronics" },
      { label: "Laptops & Desktops", count: 2, to: "/shop?cat=laptops" },
      { label: "Mobiles & Tablets", count: 8, to: "/shop?cat=mobiles" },
      { label: "SmartPhone & Smart TV", count: 5, to: "/shop?cat=smart" },
    ],
    []
  );

  const colors = useMemo(
    () => [
      { label: "Gold", count: 1, to: "/shop?color=gold" },
      { label: "Green", count: 1, to: "/shop?color=green" },
      { label: "White", count: 1, to: "/shop?color=white" },
    ],
    []
  );

  const additionalProducts = useMemo(
    () => [
      "Accessories",
      "Electronics & Computer",
      "Laptops & Desktops",
      "Mobiles & Tablets",
      "SmartPhone & Smart TV",
    ],
    []
  );

  const featuredProducts = useMemo(
    () => [
      {
        title: "SmartPhone",
        img: "/img/product-3.png",
        price: "2.99 $",
        oldPrice: "4.11 $",
        rating: 4,
        to: "/product/3",
      },
      {
        title: "Smart Camera",
        img: "/img/product-4.png",
        price: "2.99 $",
        oldPrice: "4.11 $",
        rating: 4,
        to: "/product/4",
      },
      {
        title: "Camera Leance",
        img: "/img/product-5.png",
        price: "2.99 $",
        oldPrice: "4.11 $",
        rating: 4,
        to: "/product/5",
      },
    ],
    []
  );

  const tags = useMemo(
    () => [
      { label: "New", to: "/shop?tag=new" },
      { label: "brand", to: "/shop?tag=brand" },
      { label: "black", to: "/shop?tag=black" },
      { label: "white", to: "/shop?tag=white" },
      { label: "tablats", to: "/shop?tag=tablats" },
      { label: "phone", to: "/shop?tag=phone" },
      { label: "camera", to: "/shop?tag=camera" },
      { label: "drone", to: "/shop?tag=drone" },
      { label: "talevision", to: "/shop?tag=talevision" },
      { label: "slaes", to: "/shop?tag=slaes" },
    ],
    []
  );

  // ---- Main content data
  const gridProducts = useMemo(
    () => [
      { img: "/img/product-3.png", to: "/product/3" },
      { img: "/img/product-4.png", to: "/product/4" },
      { img: "/img/product-5.png", to: "/product/5" },
      { img: "/img/product-6.png", to: "/product/6" },
      { img: "/img/product-7.png", to: "/product/7" },
      { img: "/img/product-8.png", to: "/product/8" },
      { img: "/img/product-9.png", to: "/product/9" },
      { img: "/img/product-10.png", to: "/product/10" },
      { img: "/img/product-11.png", to: "/product/11" },
    ],
    []
  );

  const miniProducts = useMemo(
    () => [
      { img: "/img/product-3.png", to: "/product/3" },
      { img: "/img/product-4.png", to: "/product/4" },
      { img: "/img/product-5.png", to: "/product/5" },
      { img: "/img/product-6.png", to: "/product/6" },
      { img: "/img/product-7.png", to: "/product/7" },
      { img: "/img/product-8.png", to: "/product/8" },
      { img: "/img/product-9.png", to: "/product/9" },
      { img: "/img/product-12.png", to: "/product/12" },
      { img: "/img/product-13.png", to: "/product/13" },
      { img: "/img/product-14.png", to: "/product/14" },
      { img: "/img/product-15.png", to: "/product/15" },
      { img: "/img/product-16.png", to: "/product/16" },
    ],
    []
  );

  // ---- UI state
  const [price, setPrice] = useState(0);
  const [selectedAdditional, setSelectedAdditional] = useState("Accessories");
  const [view, setView] = useState("grid"); // "grid" | "list"
  const [sort, setSort] = useState("volvo");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const pages = useMemo(() => [1, 2, 3, 4, 5, 6], []);

  const StarRow = ({ rating = 4 }) => {
    const full = Math.max(0, Math.min(5, Math.floor(rating)));
    const empties = 5 - full;
    return (
      <div className="d-flex mb-2">
        {Array.from({ length: full }).map((_, i) => (
          <i key={`f-${i}`} className="fa fa-star text-secondary"></i>
        ))}
        {Array.from({ length: empties }).map((_, i) => (
          <i key={`e-${i}`} className="fa fa-star"></i>
        ))}
      </div>
    );
  };

  const GridCard = ({ img, to, delay = "0.1s" }) => (
    <div className="col-lg-4">
      <div className="product-item rounded wow fadeInUp" data-wow-delay={delay}>
        <div className="product-item-inner border rounded">
          <div className="product-item-inner-item">
            <img src={img} className="img-fluid w-100 rounded-top" alt="" />
            <div className="product-new">New</div>

            <div className="product-details">
              <Link to={to} aria-label="view">
                <i className="fa fa-eye fa-1x"></i>
              </Link>
            </div>
          </div>

          <div className="text-center rounded-bottom p-4">
            <Link to="/shop" className="d-block mb-2">
              SmartPhone
            </Link>
            <Link to={to} className="d-block h4">
              Apple iPad Mini <br /> G2356
            </Link>
            <del className="me-2 fs-5">$1,250.00</del>
            <span className="text-primary fs-5">$1,050.00</span>
          </div>
        </div>

        <div className="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
          <Link to="/cart" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4">
            <i className="fas fa-shopping-cart me-2"></i> Add To Cart
          </Link>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star"></i>
            </div>

            <div className="d-flex">
              <Link
                to="/compare"
                className="text-primary d-flex align-items-center justify-content-center me-3"
                aria-label="compare"
              >
                <span className="rounded-circle btn-sm-square border">
                  <i className="fas fa-random"></i>
                </span>
              </Link>

              <Link
                to="/wishlist"
                className="text-primary d-flex align-items-center justify-content-center me-0"
                aria-label="favorite"
              >
                <span className="rounded-circle btn-sm-square border">
                  <i className="fas fa-heart"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MiniCard = ({ img, to }) => (
    <div className="col-lg-6">
      <div className="products-mini-item border">
        <div className="row g-0">
          <div className="col-5">
            <div className="products-mini-img border-end h-100">
              <img src={img} className="img-fluid w-100 h-100" alt="Image" />
              <div className="products-mini-icon rounded-circle bg-primary">
                <Link to={to} aria-label="view">
                  <i className="fa fa-eye fa-1x text-white"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-7">
            <div className="products-mini-content p-3">
              <Link to="/shop" className="d-block mb-2">
                SmartPhone
              </Link>
              <Link to={to} className="d-block h4">
                Apple iPad Mini <br /> G2356
              </Link>
              <del className="me-2 fs-5">$1,250.00</del>
              <span className="text-primary fs-5">$1,050.00</span>
            </div>
          </div>
        </div>

        <div className="products-mini-add border p-3">
          <Link to="/cart" className="btn btn-primary border-secondary rounded-pill py-2 px-4">
            <i className="fas fa-shopping-cart me-2"></i> Add To Cart
          </Link>

          <div className="d-flex">
            <Link
              to="/compare"
              className="text-primary d-flex align-items-center justify-content-center me-3"
              aria-label="compare"
            >
              <span className="rounded-circle btn-sm-square border">
                <i className="fas fa-random"></i>
              </span>
            </Link>
            <Link
              to="/wishlist"
              className="text-primary d-flex align-items-center justify-content-center me-0"
              aria-label="favorite"
            >
              <span className="rounded-circle btn-sm-square border">
                <i className="fas fa-heart"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid shop py-5">
      <div className="container py-5">
        <div className="row g-4">
          {/* LEFT SIDEBAR */}
          <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-categories mb-4">
              <h4>Products Categories</h4>
              <ul className="list-unstyled">
                {categories.map((c) => (
                  <li key={c.label}>
                    <div className="categories-item">
                      <Link to={c.to} className="text-dark">
                        <i className="fas fa-apple-alt text-secondary me-2"></i>
                        {c.label}
                      </Link>
                      <span>({c.count})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="price mb-4">
              <h4 className="mb-2">Price</h4>
              <input
                type="range"
                className="form-range w-100"
                id="rangeInput"
                name="rangeInput"
                min="0"
                max="500"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <output id="amount" name="amount" htmlFor="rangeInput">
                {price}
              </output>
              <div className=""></div>
            </div>

            <div className="product-color mb-3">
              <h4>Select By Color</h4>
              <ul className="list-unstyled">
                {colors.map((c) => (
                  <li key={c.label}>
                    <div className="product-color-item">
                      <Link to={c.to} className="text-dark">
                        <i className="fas fa-apple-alt text-secondary me-2"></i>
                        {c.label}
                      </Link>
                      <span>({c.count})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="additional-product mb-4">
              <h4>Additional Products</h4>
              {additionalProducts.map((label, idx) => {
                const id = `Categories-${idx + 1}`;
                return (
                  <div className="additional-product-item" key={label}>
                    <input
                      type="radio"
                      className="me-2"
                      id={id}
                      name="Categories-1"
                      value={label}
                      checked={selectedAdditional === label}
                      onChange={() => setSelectedAdditional(label)}
                    />
                    <label htmlFor={id} className="text-dark">
                      {" "}
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="featured-product mb-4">
              <h4 className="mb-3">Featured products</h4>

              {featuredProducts.map((p) => (
                <div className="featured-product-item" key={p.title}>
                  <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                    <img src={p.img} className="img-fluid rounded" alt="Image" />
                  </div>
                  <div>
                    <h6 className="mb-2">
                      <Link to={p.to} className="text-reset text-decoration-none">
                        {p.title}
                      </Link>
                    </h6>
                    <StarRow rating={p.rating} />
                    <div className="d-flex mb-2">
                      <h5 className="fw-bold me-2">{p.price}</h5>
                      <h5 className="text-danger text-decoration-line-through">{p.oldPrice}</h5>
                    </div>
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-center my-4">
                <Link to="/shop" className="btn btn-primary px-4 py-3 rounded-pill w-100">
                  Vew More
                </Link>
              </div>
            </div>

            {/* 바깥 Link 제거 (중첩 a 방지) */}
            <div className="position-relative">
              <img src="/img/product-banner-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
              <div
                className="text-center position-absolute d-flex flex-column align-items-center justify-content-center rounded p-4"
                style={{
                  width: "100%",
                  height: "100%",
                  top: 0,
                  right: 0,
                  background: "rgba(242, 139, 0, 0.3)",
                }}
              >
                <h5 className="display-6 text-primary">SALE</h5>
                <h4 className="text-secondary">Get UP To 50% Off</h4>
                <Link to="/shop" className="btn btn-primary rounded-pill px-4">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="product-tags py-4">
              <h4 className="mb-3">PRODUCT TAGS</h4>
              <div className="product-tags-items bg-light rounded p-3">
                {tags.map((t) => (
                  <Link key={t.label} to={t.to} className="border rounded py-1 px-2 mb-2">
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded mb-4 position-relative">
              <img
                src="/img/product-banner-3.jpg"
                className="img-fluid rounded w-100"
                style={{ height: 250 }}
                alt="Image"
              />
              <div
                className="position-absolute rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{
                  width: "100%",
                  height: 250,
                  top: 0,
                  left: 0,
                  background: "rgba(242, 139, 0, 0.3)",
                }}
              >
                <h4 className="display-5 text-primary">SALE</h4>
                <h3 className="display-4 text-white mb-4">Get UP To 50% Off</h3>
                <Link to="/shop" className="btn btn-primary rounded-pill">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-xl-7">
                <div className="input-group w-100 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>

              <div className="col-xl-3 text-end">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between">
                  <label htmlFor="electronics">Sort By:</label>
                  <select
                    id="electronics"
                    name="electronicslist"
                    className="border-0 form-select-sm bg-light me-3"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="volvo">Default Sorting</option>
                    <option value="volv">Nothing</option>
                    <option value="sab">Popularity</option>
                    <option value="saab">Newness</option>
                    <option value="opel">Average Rating</option>
                    <option value="audio">Low to high</option>
                    <option value="audi">High to low</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4 col-xl-2">
                {/* 탭은 Link가 아니라 버튼 */}
                <ul className="nav nav-pills d-inline-flex text-center py-2 px-2 rounded bg-light mb-4">
                  <li className="nav-item me-4">
                    <button
                      type="button"
                      className="bg-light border-0 p-0"
                      onClick={() => setView("grid")}
                      aria-label="grid view"
                    >
                      <i className="fas fa-th fa-3x text-primary"></i>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="bg-light border-0 p-0"
                      onClick={() => setView("list")}
                      aria-label="list view"
                    >
                      <i className="fas fa-bars fa-3x text-primary"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-content">
              {view === "grid" && (
                <div className="tab-pane fade show p-0 active">
                  <div className="row g-4 product">
                    {gridProducts.map((p, idx) => {
                      const delay = idx % 3 === 0 ? "0.1s" : idx % 3 === 1 ? "0.3s" : "0.5s";
                      return <GridCard key={p.img + idx} img={p.img} to={p.to} delay={delay} />;
                    })}

                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <button
                          type="button"
                          className="rounded border-0 bg-transparent"
                          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                        >
                          &laquo;
                        </button>

                        {pages.map((p) => (
                          <button
                            key={p}
                            type="button"
                            className={`${page === p ? "active " : ""}rounded border-0 bg-transparent`}
                            onClick={() => setPage(p)}
                          >
                            {p}
                          </button>
                        ))}

                        <button
                          type="button"
                          className="rounded border-0 bg-transparent"
                          onClick={() => setPage((prev) => Math.min(pages.length, prev + 1))}
                        >
                          &raquo;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {view === "list" && (
                <div className="products tab-pane fade show p-0 active">
                  <div className="row g-4 products-mini">
                    {miniProducts.map((p, idx) => (
                      <MiniCard key={p.img + idx} img={p.img} to={p.to} />
                    ))}

                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <button
                          type="button"
                          className="rounded border-0 bg-transparent"
                          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                        >
                          &laquo;
                        </button>

                        {pages.map((p) => (
                          <button
                            key={p}
                            type="button"
                            className={`${page === p ? "active " : ""}rounded border-0 bg-transparent`}
                            onClick={() => setPage(p)}
                          >
                            {p}
                          </button>
                        ))}

                        <button
                          type="button"
                          className="rounded border-0 bg-transparent"
                          onClick={() => setPage((prev) => Math.min(pages.length, prev + 1))}
                        >
                          &raquo;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* /tab-content */}
          </div>
        </div>
      </div>
    </div>
  );
}

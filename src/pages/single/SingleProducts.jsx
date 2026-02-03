import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function SingleProducts() {
  const singleCarouselRef = useRef(null);

  // ===== data (리팩토링: 전부 데이터로 관리) =====
  const categories = useMemo(
    () => [
      { label: "Accessories", count: 3, to: "/shop" },
      { label: "Electronics & Computer", count: 5, to: "/shop" },
      { label: "Laptops & Desktops", count: 2, to: "/shop" },
      { label: "Mobiles & Tablets", count: 8, to: "/shop" },
      { label: "SmartPhone & Smart TV", count: 5, to: "/shop" },
    ],
    []
  );

  const colors = useMemo(
    () => [
      { id: "color-gold", label: "Gold", value: "Gold" },
      { id: "color-green", label: "Green", value: "Green" },
      { id: "color-white", label: "White", value: "White" },
    ],
    []
  );

  const featured = useMemo(
    () => [
      { id: 1, title: "SmartPhone", image: "/img/product-3.png", price: "2.99 $", oldPrice: "4.11 $" },
      { id: 2, title: "Smart Camera", image: "/img/product-4.png", price: "2.99 $", oldPrice: "4.11 $" },
      { id: 3, title: "Smart Camera", image: "/img/product-5.png", price: "2.99 $", oldPrice: "4.11 $" },
      { id: 4, title: "Smart Camera", image: "/img/product-6.png", price: "2.99 $", oldPrice: "4.11 $" },
      { id: 5, title: "Camera Leance", image: "/img/product-7.png", price: "2.99 $", oldPrice: "4.11 $" },
      { id: 6, title: "Smart Camera", image: "/img/product-8.png", price: "2.99 $", oldPrice: "4.11 $" },
    ],
    []
  );

  const tags = useMemo(
    () => ["New", "brand", "black", "white", "tablats", "phone", "camera", "drone", "talevision", "slaes"],
    []
  );

  const images = useMemo(
    () => ["/img/product-4.png", "/img/product-5.png", "/img/product-6.png", "/img/product-7.png", "/img/product-3.png"],
    []
  );

  const reviews = useMemo(
    () => [
      {
        id: 1,
        name: "Jason Smith",
        date: "April 12, 2024",
        rating: 4,
        avatar: "/img/avatar.jpg",
        text:
          "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit",
      },
      {
        id: 2,
        name: "Sam Peters",
        date: "April 12, 2024",
        rating: 3,
        avatar: "/img/avatar.jpg",
        text:
          "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit",
      },
    ],
    []
  );

  // ===== UI state =====
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value ?? "Gold");
  const [qty, setQty] = useState(1);

  // ===== Owl init (single-carousel만 컴포넌트에서 안정 초기화) =====
  useEffect(() => {
    const el = singleCarouselRef.current;
    if (!el) return;

    const $ = window.jQuery;
    if (!$ || !$.fn?.owlCarousel) return;

    const $el = $(el);

    // 중복 초기화 방지 (라우팅/StrictMode)
    if ($el.hasClass("owl-loaded")) {
      $el.trigger("destroy.owl.carousel");
      $el.removeClass("owl-loaded");
      $el.find(".owl-stage-outer").children().unwrap();
      $el.removeClass("owl-center owl-hidden owl-text-select-on");
    }

    $el.owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: true,
      dotsData: true,
      loop: true,
      items: 1,
      nav: true,
      navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    });

    return () => {
      if ($el.hasClass("owl-loaded")) $el.trigger("destroy.owl.carousel");
    };
  }, [images]);

  const onMinus = () => setQty((v) => Math.max(0, v - 1));
  const onPlus = () => setQty((v) => v + 1);

  return (
    <div className="container-fluid shop py-5">
      <div className="container py-5">
        <div className="row g-4">
          {/* LEFT SIDEBAR */}
          <aside className="col-lg-5 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <SearchBox />

            <CategoryList items={categories} />

            <ColorFilter
              title="Select By Color"
              options={colors}
              value={selectedColor}
              onChange={setSelectedColor}
            />

            <FeaturedList items={featured} />

            <PromoBanner />

            <TagList tags={tags} />
          </aside>

          {/* RIGHT CONTENT */}
          <section className="col-lg-7 col-xl-9 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4 single-product">
              {/* LEFT: CAROUSEL */}
              <div className="col-xl-6">
                <div className="single-carousel owl-carousel" ref={singleCarouselRef}>
                  {images.map((src) => (
                    <SingleCarouselItem key={src} src={src} />
                  ))}
                </div>
              </div>

              {/* RIGHT: PRODUCT INFO */}
              <div className="col-xl-6">
                <ProductSummary qty={qty} onMinus={onMinus} onPlus={onPlus} />
              </div>

              {/* TABS */}
              <div className="col-lg-12">
                <ProductTabs reviews={reviews} />
              </div>

              {/* REVIEW FORM */}
              <ReviewForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function SearchBox() {
  return (
    <div className="input-group w-100 mx-auto d-flex mb-4">
      <input
        type="search"
        className="form-control p-3"
        placeholder="keywords"
        aria-describedby="search-icon-1"
      />
      <span id="search-icon-1" className="input-group-text p-3">
        <i className="fa fa-search"></i>
      </span>
    </div>
  );
}

function CategoryList({ items }) {
  return (
    <div className="product-categories mb-4">
      <h4>Products Categories</h4>
      <ul className="list-unstyled">
        {items.map((c) => (
          <li key={c.label}>
            <div className="categories-item d-flex align-items-center justify-content-between">
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
  );
}

function ColorFilter({ title, options, value, onChange }) {
  return (
    <div className="additional-product mb-4">
      <h4>{title}</h4>
      {options.map((opt) => (
        <div key={opt.id} className="additional-product-item">
          <input
            type="radio"
            className="me-2"
            id={opt.id}
            name="color-filter"
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <label htmlFor={opt.id} className="text-dark">
            {" "}
            {opt.label}
          </label>
        </div>
      ))}
    </div>
  );
}

function FeaturedList({ items }) {
  return (
    <div className="featured-product mb-4">
      <h4 className="mb-3">Featured products</h4>

      {items.map((p) => (
        <div key={p.id} className="featured-product-item d-flex align-items-center mb-3">
          <div className="rounded me-4" style={{ width: 100, height: 100 }}>
            <img src={p.image} className="img-fluid rounded" alt={p.title} />
          </div>
          <div>
            <h6 className="mb-2">{p.title}</h6>
            <StarRow value={4} activeClass="text-secondary" />
            <div className="d-flex mb-2">
              <h5 className="fw-bold me-2">{p.price}</h5>
              <h5 className="text-danger text-decoration-line-through">{p.oldPrice}</h5>
            </div>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-center my-4">
        <Link to="/shop" className="btn btn-primary px-4 py-3 rounded-pill w-100">
          View More
        </Link>
      </div>
    </div>
  );
}

function PromoBanner() {
  return (
    <div className="position-relative">
      <img src="/img/product-banner-2.jpg" className="img-fluid w-100 rounded" alt="Promo" />
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
  );
}

function TagList({ tags }) {
  return (
    <div className="product-tags my-4">
      <h4 className="mb-3">PRODUCT TAGS</h4>
      <div className="product-tags-items bg-light rounded p-3">
        {tags.map((t) => (
          <Link key={t} to="/shop" className="border rounded py-1 px-2 mb-2 d-inline-block me-2">
            {t}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SingleCarouselItem({ src }) {
  // owl dotsData에 들어갈 HTML 문자열(data-dot)이 필요해서 템플릿 방식 유지
  const dotHtml = `<img class='img-fluid' src='${src}' alt=''>`;
  return (
    <div className="single-item" data-dot={dotHtml}>
      <div className="single-inner bg-light rounded">
        <img src={src} className="img-fluid rounded" alt="Product" />
      </div>
    </div>
  );
}

function ProductSummary({ qty, onMinus, onPlus }) {
  return (
    <>
      <h4 className="fw-bold mb-3">Smart Camera</h4>
      <p className="mb-3">Category: Electronics</p>
      <h5 className="fw-bold mb-3">3,35 $</h5>

      <div className="d-flex mb-4">
        <i className="fa fa-star text-secondary"></i>
        <i className="fa fa-star text-secondary"></i>
        <i className="fa fa-star text-secondary"></i>
        <i className="fa fa-star text-secondary"></i>
        <i className="fa fa-star"></i>
      </div>

      <div className="mb-3">
        <button type="button" className="btn btn-primary d-inline-block rounded text-white py-1 px-4 me-2">
          <i className="fab fa-facebook-f me-1"></i> Share
        </button>
        <button type="button" className="btn btn-secondary d-inline-block rounded text-white py-1 px-4 ms-2">
          <i className="fab fa-twitter ms-1"></i> Share
        </button>
      </div>

      <div className="d-flex flex-column mb-3">
        <small>Product SKU: N/A</small>
        <small>
          Available: <strong className="text-primary">20 items in stock</strong>
        </small>
      </div>

      <p className="mb-4">
        The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
      </p>
      <p className="mb-4">
        Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish
      </p>

      <div className="input-group quantity mb-5" style={{ width: 100 }}>
        <div className="input-group-btn">
          <button type="button" className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={onMinus}>
            <i className="fa fa-minus"></i>
          </button>
        </div>

        <input
          type="text"
          className="form-control form-control-sm text-center border-0"
          value={qty}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (Number.isFinite(v)) return;
          }}
          readOnly
        />

        <div className="input-group-btn">
          <button type="button" className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={onPlus}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>

      <Link
        to="/cart"
        className="btn btn-primary border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
      >
        <i className="fa fa-shopping-bag me-2 text-white"></i> Add to cart
      </Link>
    </>
  );
}

function ProductTabs({ reviews }) {
  return (
    <>
      <nav>
        <div className="nav nav-tabs mb-3">
          <button
            className="nav-link active border-white border-bottom-0"
            type="button"
            role="tab"
            id="nav-about-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-about"
            aria-controls="nav-about"
            aria-selected="true"
          >
            Description
          </button>
          <button
            className="nav-link border-white border-bottom-0"
            type="button"
            role="tab"
            id="nav-mission-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-mission"
            aria-controls="nav-mission"
            aria-selected="false"
          >
            Reviews
          </button>
        </div>
      </nav>

      <div className="tab-content mb-5">
        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
          <DescriptionBlock />
        </div>

        <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
          {reviews.map((r) => (
            <ReviewItem key={r.id} r={r} />
          ))}
        </div>

        <div className="tab-pane" id="nav-vision" role="tabpanel">
          <p className="text-dark">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. 3
          </p>
          <p className="mb-0">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit
          </p>
        </div>
      </div>
    </>
  );
}

function DescriptionBlock() {
  return (
    <>
      <p>
        Our new <b className="fw-bold">HPB12 / A12 battery</b> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
      </p>

      <b className="fw-bold">Black &amp; Decker Drills and Drivers:</b>
      <p className="small">
        BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K,
        CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K,
        HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K,
        PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121
      </p>

      <b className="fw-bold">Black &amp; Decker Impact Wrenches:</b>
      <p className="small">SX5000, XTC12IK, XTC12IKH</p>

      <b className="fw-bold">Black &amp; Decker Multi-Tools:</b>
      <p className="small">KC2000FK</p>

      <b className="fw-bold">Black &amp; Decker Nailers:</b>
      <p className="small">BDBN1202</p>

      <b className="fw-bold">Black &amp; Decker Screwdrivers:</b>
      <p className="small">HP9019K</p>

      <b className="fw-bold mb-0">Best replacement for the following Black and Decker OEM battery part numbers:</b>
      <p className="small">HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.</p>
    </>
  );
}

function ReviewItem({ r }) {
  return (
    <div className="d-flex mb-4">
      <img
        src={r.avatar}
        className="img-fluid rounded-circle p-3"
        style={{ width: 100, height: 100 }}
        alt={r.name}
      />
      <div>
        <p className="mb-2" style={{ fontSize: 14 }}>
          {r.date}
        </p>
        <div className="d-flex justify-content-between">
          <h5>{r.name}</h5>
          <div className="d-flex mb-3">
            <StarRow value={r.rating} activeClass="text-secondary" />
          </div>
        </div>
        <p className="text-dark">{r.text}</p>
      </div>
    </div>
  );
}

function ReviewForm() {
  return (
    <form action="#" className="col-lg-12">
      <h4 className="mb-5 fw-bold">Leave a Reply</h4>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="border-bottom rounded">
            <input type="text" className="form-control border-0 me-4" placeholder="Your Name *" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="border-bottom rounded">
            <input type="email" className="form-control border-0" placeholder="Your Email *" />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="border-bottom rounded my-4">
            <textarea
              className="form-control border-0"
              cols="30"
              rows="8"
              placeholder="Your Review *"
              spellCheck={false}
            ></textarea>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="d-flex justify-content-between py-3 mb-5">
            <div className="d-flex align-items-center">
              <p className="mb-0 me-3">Please rate:</p>
              <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
                <i className="fa fa-star text-muted"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary border border-secondary text-primary rounded-pill px-4 py-3"
              onClick={(e) => e.preventDefault()}
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

function StarRow({ value = 0, outOf = 5, activeClass = "text-secondary" }) {
  return (
    <>
      {Array.from({ length: outOf }).map((_, i) => (
        <i
          key={i}
          className={`fa fa-star ${i < value ? activeClass : ""}`}
          aria-hidden="true"
        ></i>
      ))}
    </>
  );
}

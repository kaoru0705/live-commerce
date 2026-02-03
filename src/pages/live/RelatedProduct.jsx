import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";

export default function RelatedProduct() {
  const carouselRef = useRef(null);

  // 데이터 기반 렌더링
  const items = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, idx) => ({
        id: idx + 1,
        image: "/img/product-3.png",
        category: "SmartPhone",
        title: "Apple iPad Mini",
        code: "G2356",
        oldPrice: "$1,250.00",
        price: "$1,050.00",
        isNew: true,
        rating: 4,
        links: {
          category: "/shop",
          detail: "/single-product",
          compare: "/compare",
          wishlist: "/wishlist",
        },
      })),
    []
  );

  // React에서 Owl 안정 초기화 (index.html의 jQuery/Owl 로드 유지)
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const $ = window.jQuery;
    if (!$) {
      console.error("jQuery not found. index.html script 로드 순서 확인!");
      return;
    }
    if (!$.fn?.owlCarousel) {
      console.error("owlCarousel not found. lib/owlcarousel/owl.carousel.min.js 로드 확인!");
      return;
    }

    const $el = $(el);

    // 중복 초기화 방지(라우팅/StrictMode 대비)
    destroyOwl($el);

    // 템플릿 main.js의 related-carousel 옵션과 동일
    $el.owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: false,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 },
      },
    });

    return () => {
      destroyOwl($el);
    };
  }, [items]);

  const onAddToCart = (item) => {
    // TODO: 실제 장바구니 로직 연결
    alert(`Add To Cart: ${item.title} ${item.code}`);
  };

  return (
    <section className="container-fluid related-product">
      <div className="container">
        <SectionHeader
          title="Related Products"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, asperiores ducimus sint quos tempore officia similique quia? Libero, pariatur consectetur?"
        />

        <div className="related-carousel owl-carousel pt-4" ref={carouselRef}>
          {items.map((item) => (
            <RelatedCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Components (재사용) -------------------- */

function SectionHeader({ title, description }) {
  return (
    <div className="mx-auto text-center pb-5" style={{ maxWidth: 700 }}>
      <h4
        className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp"
        data-wow-delay="0.1s"
      >
        {title}
      </h4>
      <p className="wow fadeInUp" data-wow-delay="0.2s">
        {description}
      </p>
    </div>
  );
}

function RelatedCard({ item, onAddToCart }) {
  const { image, category, title, code, oldPrice, price, isNew, rating, links } =
    item;

  return (
    <div className="related-item rounded">
      <div className="related-item-inner border rounded">
        <div className="related-item-inner-item">
          <img
            src={image}
            className="img-fluid w-100 rounded-top"
            alt={`${title} ${code}`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/img/product-1.png";
            }}
          />

          {isNew && <div className="related-new">New</div>}

          <div className="related-details">
            <Link to={links.detail} aria-label="View product">
              <i className="fa fa-eye fa-1x"></i>
            </Link>
          </div>
        </div>

        <div className="text-center rounded-bottom p-4">
          <Link to={links.category} className="d-block mb-2">
            {category}
          </Link>

          <Link to={links.detail} className="d-block h4">
            {title} <br /> {code}
          </Link>

          <Price oldPrice={oldPrice} price={price} />
        </div>
      </div>

      <div className="related-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
        <button
          type="button"
          className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"
          onClick={() => onAddToCart?.(item)}
        >
          <i className="fas fa-shopping-cart me-2"></i> Add To Cart
        </button>

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <StarRating value={rating} />
          </div>

          <div className="d-flex">
            <IconLink to={links.compare} icon="fas fa-random" className="me-3" ariaLabel="Compare" />
            <IconLink to={links.wishlist} icon="fas fa-heart" ariaLabel="Wishlist" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Price({ oldPrice, price }) {
  return (
    <>
      <del className="me-2 fs-5">{oldPrice}</del>
      <span className="text-primary fs-5">{price}</span>
    </>
  );
}

function StarRating({ value = 0, outOf = 5 }) {
  return (
    <>
      {Array.from({ length: outOf }).map((_, i) => (
        <i
          key={i}
          className={`fas fa-star ${i < value ? "text-primary" : ""}`}
          aria-hidden="true"
        ></i>
      ))}
    </>
  );
}

function IconLink({ to, icon, className = "", ariaLabel }) {
  return (
    <Link
      to={to}
      className={`text-primary d-flex align-items-center justify-content-center ${className}`}
      aria-label={ariaLabel}
    >
      <span className="rounded-circle btn-sm-square border">
        <i className={icon}></i>
      </span>
    </Link>
  );
}

/* -------------------- Owl helpers -------------------- */

function destroyOwl($el) {
  if (!$el?.length) return;

  // owl 초기화 되어있을 때만 해제
  if ($el.hasClass("owl-loaded")) {
    $el.trigger("destroy.owl.carousel");
    $el.removeClass("owl-loaded");
    // owl이 감싼 구조를 원상복구
    $el.find(".owl-stage-outer").children().unwrap();
    $el.removeClass("owl-center owl-hidden owl-text-select-on");
  }
}

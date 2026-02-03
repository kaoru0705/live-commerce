// src/pages/home/Carousel.jsx
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Carousel() {
  const slides = [
    {
      img: "/img/carousel-1.png",
      saveText: "Save Up To $400",
      title: "On Selected Laptops & Desktop Or Smartphone",
      sub: "Terms and conditions apply",
    },
    {
      img: "/img/carousel-2.png",
      saveText: "Save Up To $200",
      title: "On Selected Laptops & Desktop Or Smartphone",
      sub: "Terms and conditions apply",
    },
  ];

  return (
    <div className="container-fluid carousel bg-light px-0">
      <div className="row g-0 justify-content-end">
        {/* Left: Slider */}
        <div className="col-12 col-lg-7 col-xl-9">
          <div className="bg-light py-5">
            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              className="header-carousel-swiper"
            >
              {slides.map((s, idx) => (
                <SwiperSlide key={idx}>
                  <div className="row g-0 header-carousel-item align-items-center">
                    <div className="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay="0.1s">
                      <img
                        src={s.img}
                        className="img-fluid w-100"
                        alt={`Carousel promo ${idx + 1}`}
                        loading="lazy"
                      />
                    </div>

                    <div className="col-xl-6 carousel-content p-4">
                      <h4
                        className="text-uppercase fw-bold mb-4 wow fadeInRight"
                        data-wow-delay="0.1s"
                        style={{ letterSpacing: "3px" }}
                      >
                        {s.saveText}
                      </h4>

                      <h1 className="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s">
                        {s.title}
                      </h1>

                      <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">
                        {s.sub}
                      </p>

                      <Link
                        className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight"
                        data-wow-delay="0.7s"
                        to="/shop"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right: Banner */}
        <div className="col-12 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay="0.1s">
          <div className="carousel-header-banner h-100">
            <img
              src="/img/header-img.jpg"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
              alt="Header banner"
              loading="lazy"
            />

            <div className="carousel-banner-offer">
              <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">Save $48.00</p>
              <p className="text-primary fs-5 fw-bold mb-0">Special Offer</p>
            </div>

            <div className="carousel-banner">
              <div className="carousel-banner-content text-center p-4">
                <Link to="/shop" className="d-block mb-2 text-decoration-none">
                  SmartPhone
                </Link>
                <Link to="/single" className="d-block text-white fs-3 text-decoration-none">
                  Apple iPad Mini <br /> G2356
                </Link>
                <del className="me-2 text-white fs-5">$1,250.00</del>
                <span className="text-primary fs-5">$1,050.00</span>
              </div>

              <button
                type="button"
                className="btn btn-primary rounded-pill py-2 px-4"
                onClick={() => {
                  // TODO: 장바구니 로직 연결
                }}
              >
                <i className="fas fa-shopping-cart me-2"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

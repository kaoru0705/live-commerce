import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function ProductsOffer() {
  const offers = useMemo(
    () => [
      {
        id: 1,
        to: "/shop",
        delay: "0.2s",
        colClass: "col-lg-6 wow fadeInLeft",
        tagline: "Find The Best Camera for You!",
        title: "Smart Camera",
        percent: 40,
        image: { src: "/img/product-1.png", alt: "Smart Camera" },
      },
      {
        id: 2,
        to: "/shop",
        delay: "0.3s",
        colClass: "col-lg-6 wow fadeInRight",
        tagline: "Find The Best Watches for You!",
        title: "Smart Watch",
        percent: 20,
        image: { src: "/img/product-2.png", alt: "Smart Watch" },
      },
    ],
    []
  );

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row g-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={offer.colClass}
              data-wow-delay={offer.delay}
            >
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------- Reusable Components -------------------- */

function OfferCard({ offer }) {
  return (
    <Link
      to={offer.to}
      className="d-flex align-items-center justify-content-between border bg-white rounded p-4 text-decoration-none"
    >
      <div>
        <p className="text-muted mb-3">{offer.tagline}</p>
        <h3 className="text-primary">{offer.title}</h3>

        <h1 className="display-3 text-secondary mb-0">
          {offer.percent}%{" "}
          <span className="text-primary fw-normal">Off</span>
        </h1>
      </div>

      <img
        src={offer.image.src}
        className="img-fluid"
        alt={offer.image.alt}
        loading="lazy"
        onError={(e) => {
          // 이미지 경로 문제 대비 fallback
          e.currentTarget.src = "/img/product-1.png";
        }}
      />
    </Link>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";

export default function ProductBanner() {
  const navigate = useNavigate();

  const banners = useMemo(
    () => [
      {
        id: 1,
        colClass: "col-lg-6 wow fadeInLeft",
        delay: "0.1s",
        containerClass: "bg-primary rounded position-relative",
        img: {
          src: "/img/product-banner.jpg",
          className: "img-fluid w-100 rounded",
          alt: "Product banner",
        },
        overlay: {
          className:
            "position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4",
          style: { background: "rgba(255, 255, 255, 0.5)" },
        },
        content: {
          title: (
            <>
              EOS Rebel <br />
              <span>T7i Kit</span>
            </>
          ),
          titleClassName: "display-5 text-primary",
          subtitle: "$899.99",
          subtitleClassName: "fs-4 text-muted",
          button: {
            to: "/shop",
            className: "btn btn-primary rounded-pill align-self-start py-2 px-4",
            label: "Shop Now",
          },
        },
      },
      {
        id: 2,
        colClass: "col-lg-6 wow fadeInRight",
        delay: "0.2s",
        containerClass: "text-center bg-primary rounded position-relative",
        img: {
          src: "/img/product-banner-2.jpg",
          className: "img-fluid w-100",
          alt: "Sale banner",
        },
        overlay: {
          className:
            "position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4",
          style: { background: "rgba(242, 139, 0, 0.5)" },
        },
        content: {
          title: "SALE",
          titleClassName: "display-2 text-secondary",
          subtitle: "Get UP To 50% Off",
          subtitleClassName: "display-5 text-white mb-4",
          button: {
            to: "/shop",
            className:
              "btn btn-secondary rounded-pill align-self-center py-2 px-4",
            label: "Shop Now",
          },
        },
      },
    ],
    []
  );

  const goShop = () => navigate("/shop");

  return (
    <div className="container-fluid py-5">
      <div className="container pb-5">
        <div className="row g-4">
          {banners.map((b) => (
            <div
              key={b.id}
              className={b.colClass}
              data-wow-delay={b.delay}
            >
              <BannerCard banner={b} onNavigate={goShop} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------- Reusable Components -------------------- */

function BannerCard({ banner, onNavigate }) {
  const { containerClass, img, overlay, content } = banner;

  return (
    <ClickableCard className={containerClass} onActivate={onNavigate}>
      <img src={img.src} className={img.className} alt={img.alt} />

      <div className={overlay.className} style={overlay.style}>
        <h3 className={content.titleClassName}>{content.title}</h3>

        {content.subtitle ? (
          <p className={content.subtitleClassName}>{content.subtitle}</p>
        ) : null}

        <Link
          to={content.button.to}
          className={content.button.className}
          onClick={(e) => e.stopPropagation()} // 부모 클릭 이동과 충돌 방지
        >
          {content.button.label}
        </Link>
      </div>
    </ClickableCard>
  );
}

function ClickableCard({ className, onActivate, children }) {
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      onClick={onActivate}
      onKeyDown={(e) => {
        // Enter/Space 로 접근성 있게 클릭 동작
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
}

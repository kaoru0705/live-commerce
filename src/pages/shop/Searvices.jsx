import { useMemo } from "react";

export default function Services() {
  const services = useMemo(
    () => [
      {
        id: 1,
        delay: "0.1s",
        iconClass: "fa fa-sync-alt",
        title: "Free Return",
        desc: "30 days money back guarantee!",
        colClass: "col-6 col-md-4 col-lg-2 border-start border-end",
      },
      {
        id: 2,
        delay: "0.2s",
        iconClass: "fab fa-telegram-plane",
        title: "Free Shipping",
        desc: "Free shipping on all order",
        colClass: "col-6 col-md-4 col-lg-2 border-end",
      },
      {
        id: 3,
        delay: "0.3s",
        iconClass: "fas fa-life-ring",
        title: "Support 24/7",
        desc: "We support online 24 hrs a day",
        colClass: "col-6 col-md-4 col-lg-2 border-end",
      },
      {
        id: 4,
        delay: "0.4s",
        iconClass: "fas fa-credit-card",
        title: "Receive Gift Card",
        desc: "Recieve gift all over oder $50",
        colClass: "col-6 col-md-4 col-lg-2 border-end",
      },
      {
        id: 5,
        delay: "0.5s",
        iconClass: "fas fa-lock",
        title: "Secure Payment",
        desc: "We Value Your Security",
        colClass: "col-6 col-md-4 col-lg-2 border-end",
      },
      {
        id: 6,
        delay: "0.6s",
        iconClass: "fas fa-blog",
        title: "Online Service",
        desc: "Free return products in 30 days",
        colClass: "col-6 col-md-4 col-lg-2 border-end",
      },
    ],
    []
  );

  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        {services.map((s) => (
          <div
            key={s.id}
            className={`${s.colClass} wow fadeInUp`}
            data-wow-delay={s.delay}
          >
            <ServiceItem iconClass={s.iconClass} title={s.title} desc={s.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- Reusable Components -------------------- */

function ServiceItem({ iconClass, title, desc }) {
  return (
    <div className="p-4">
      <div className="d-flex align-items-center">
        <i className={`${iconClass} fa-2x text-primary`} aria-hidden="true"></i>
        <div className="ms-4">
          <h6 className="text-uppercase mb-2">{title}</h6>
          <p className="mb-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}

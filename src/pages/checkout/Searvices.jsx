import { useMemo } from "react";

export default function Services() {
  const services = useMemo(
    () => [
      {
        id: 1,
        delay: "0.1s",
        icon: "fa fa-sync-alt",
        title: "Free Return",
        desc: "30 days money back guarantee!",
        col: "col-6 col-md-4 col-lg-2 border-start border-end",
      },
      {
        id: 2,
        delay: "0.2s",
        icon: "fab fa-telegram-plane",
        title: "Free Shipping",
        desc: "Free shipping on all order",
        col: "col-6 col-md-4 col-lg-2 border-end",
      },
      {
        id: 3,
        delay: "0.3s",
        icon: "fas fa-life-ring",
        title: "Support 24/7",
        desc: "We support online 24 hrs a day",
        col: "col-6 col-md-4 col-lg-2 border-end",
      },
      {
        id: 4,
        delay: "0.4s",
        icon: "fas fa-credit-card",
        title: "Receive Gift Card",
        desc: "Recieve gift all over oder $50",
        col: "col-6 col-md-4 col-lg-2 border-end",
      },
      {
        id: 5,
        delay: "0.5s",
        icon: "fas fa-lock",
        title: "Secure Payment",
        desc: "We Value Your Security",
        col: "col-6 col-md-4 col-lg-2 border-end",
      },
      {
        id: 6,
        delay: "0.6s",
        icon: "fas fa-blog",
        title: "Online Service",
        desc: "Free return products in 30 days",
        col: "col-6 col-md-4 col-lg-2 border-end",
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
            className={`${s.col} wow fadeInUp`}
            data-wow-delay={s.delay}
          >
            <ServiceItem icon={s.icon} title={s.title} desc={s.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* 재사용 컴포넌트 */
function ServiceItem({ icon, title, desc }) {
  return (
    <div className="p-4">
      <div className="d-flex align-items-center">
        <i className={`${icon} fa-2x text-primary`}></i>
        <div className="ms-4">
          <h6 className="text-uppercase mb-2">{title}</h6>
          <p className="mb-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}

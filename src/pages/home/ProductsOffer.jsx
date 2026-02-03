// src/pages/home/ProductsOffer.jsx
import { Link } from "react-router-dom";

export default function ProductsOffer() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <Link
              to="/shop"
              className="d-flex align-items-center justify-content-between border bg-white rounded p-4 text-decoration-none"
            >
              <div>
                <p className="text-muted mb-3">Find The Best Camera for You!</p>
                <h3 className="text-primary">Smart Camera</h3>
                <h1 className="display-3 text-secondary mb-0">
                  40% <span className="text-primary fw-normal">Off</span>
                </h1>
              </div>

              <img src="/img/product-1.png" className="img-fluid" alt="Smart Camera" loading="lazy" />
            </Link>
          </div>

          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <Link
              to="/shop"
              className="d-flex align-items-center justify-content-between border bg-white rounded p-4 text-decoration-none"
            >
              <div>
                <p className="text-muted mb-3">Find The Best Watches for You!</p>
                <h3 className="text-primary">Smart Watch</h3>
                <h1 className="display-3 text-secondary mb-0">
                  20% <span className="text-primary fw-normal">Off</span>
                </h1>
              </div>

              <img src="/img/product-2.png" className="img-fluid" alt="Smart Watch" loading="lazy" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-4 rounded mb-5" style={{ background: "rgba(255,255,255,.03)" }}>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="rounded p-4">
              <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{ width: 70, height: 70 }}>
                <i className="fas fa-map-marker-alt fa-2x text-primary" aria-hidden="true"></i>
              </div>
              <div>
                <h4 className="text-white">Address</h4>
                <p className="mb-2">123 Street New York.USA</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="rounded p-4">
              <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{ width: 70, height: 70 }}>
                <i className="fas fa-envelope fa-2x text-primary" aria-hidden="true"></i>
              </div>
              <div>
                <h4 className="text-white">Mail Us</h4>
                <p className="mb-2">info@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="rounded p-4">
              <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{ width: 70, height: 70 }}>
                <i className="fa fa-phone-alt fa-2x text-primary" aria-hidden="true"></i>
              </div>
              <div>
                <h4 className="text-white">Telephone</h4>
                <p className="mb-2">(+012) 3456 7890</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="rounded p-4">
              <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{ width: 70, height: 70 }}>
                <i className="fab fa-firefox-browser fa-2x text-primary" aria-hidden="true"></i>
              </div>
              <div>
                <h4 className="text-white">Yoursite@ex.com</h4>
                <p className="mb-2">(+012) 3456 7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Newsletter</h4>
              <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="position-relative mx-auto rounded-pill">
                <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">
                  SignUp
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Customer Service</h4>
              <Link to="/contact" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Contact Us
              </Link>
              <Link to="/returns" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Returns
              </Link>
              <Link to="/orders" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Order History
              </Link>
              <Link to="/sitemap" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Site Map
              </Link>
              <Link to="/testimonials" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Testimonials
              </Link>
              <Link to="/my-account" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> My Account
              </Link>
              <button type="button" className="btn btn-link p-0 text-start text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Unsubscribe
              </button>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Information</h4>
              <Link to="/about" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> About Us
              </Link>
              <Link to="/delivery" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Delivery Information
              </Link>
              <Link to="/privacy" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Privacy Policy
              </Link>
              <Link to="/terms" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Terms & Conditions
              </Link>
              <Link to="/warranty" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Warranty
              </Link>
              <Link to="/faq" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> FAQ
              </Link>
              <Link to="/seller-login" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Seller Login
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Extras</h4>
              <Link to="/brands" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Brands
              </Link>
              <Link to="/gift-vouchers" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Gift Vouchers
              </Link>
              <Link to="/affiliates" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Affiliates
              </Link>
              <Link to="/wishlist" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Wishlist
              </Link>
              <Link to="/orders" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Order History
              </Link>
              <Link to="/track-order" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Track Your Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

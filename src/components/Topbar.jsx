// src/components/Topbar.jsx
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      <div className="container-fluid px-5 d-none border-bottom d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-4 text-center text-lg-start mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <Link to="/help" className="text-muted me-2 text-decoration-none">
                Help
              </Link>
              <small> / </small>
              <Link to="/support" className="text-muted mx-2 text-decoration-none">
                Support
              </Link>
              <small> / </small>
              <Link to="/contact" className="text-muted ms-2 text-decoration-none">
                Contact
              </Link>
            </div>
          </div>

          <div className="col-lg-4 text-center d-flex align-items-center justify-content-center">
            <small className="text-dark">Call Us:</small>
            <a href="tel:+0121234567890" className="text-muted ms-2 text-decoration-none">
              (+012) 1234 567890
            </a>
          </div>

          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <div className="dropdown">
                <button type="button" className="dropdown-toggle text-muted me-2 btn btn-link p-0 text-decoration-none" data-bs-toggle="dropdown">
                  <small>USD</small>
                </button>
                <div className="dropdown-menu rounded">
                  <button type="button" className="dropdown-item">
                    Euro
                  </button>
                  <button type="button" className="dropdown-item">
                    Dollar
                  </button>
                </div>
              </div>

              <div className="dropdown">
                <button type="button" className="dropdown-toggle text-muted mx-2 btn btn-link p-0 text-decoration-none" data-bs-toggle="dropdown">
                  <small>English</small>
                </button>
                <div className="dropdown-menu rounded">
                  <button type="button" className="dropdown-item">
                    English
                  </button>
                  <button type="button" className="dropdown-item">
                    Turkish
                  </button>
                  <button type="button" className="dropdown-item">
                    Spanish
                  </button>
                  <button type="button" className="dropdown-item">
                    Italian
                  </button>
                </div>
              </div>

              <div className="dropdown">
                <button type="button" className="dropdown-toggle text-muted ms-2 btn btn-link p-0 text-decoration-none" data-bs-toggle="dropdown">
                  <small>
                    <i className="fa fa-home me-2"></i> My Dashboard
                  </small>
                </button>
                <div className="dropdown-menu rounded">
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                  <Link to="/cart" className="dropdown-item">
                    My Cart
                  </Link>
                  <Link to="/my-account" className="dropdown-item">
                    My Account
                  </Link>
                  <button type="button" className="dropdown-item">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-5 py-4 d-none d-lg-block">
        <div className="row gx-0 align-items-center text-center">
          <div className="col-md-4 col-lg-3 text-center text-lg-start">
            <div className="d-inline-flex align-items-center">
              <Link to="/" className="navbar-brand p-0 text-decoration-none">
                <h1 className="display-5 text-primary m-0">
                  <i className="fas fa-shopping-bag text-secondary me-2"></i>
                  Electro
                </h1>
              </Link>
            </div>
          </div>

          <div className="col-md-4 col-lg-6 text-center">
            <div className="position-relative ps-4">
              <div className="d-flex border rounded-pill">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3"
                  type="text"
                  placeholder="Search Looking For?"
                />
                <select className="form-select text-dark border-0 border-start rounded-0 p-3" style={{ width: 200 }} defaultValue="All Category">
                  <option value="All Category">All Category</option>
                  <option value="Category-1">Category 1</option>
                  <option value="Category-2">Category 2</option>
                  <option value="Category-3">Category 3</option>
                  <option value="Category-4">Category 4</option>
                </select>
                <button type="button" className="btn btn-primary rounded-pill py-3 px-5" style={{ border: 0 }}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <button type="button" className="text-muted d-flex align-items-center justify-content-center me-3 btn p-0 border-0 bg-transparent" aria-label="Compare">
                <span className="rounded-circle btn-md-square border">
                  <i className="fas fa-random"></i>
                </span>
              </button>

              <Link to="/wishlist" className="text-muted d-flex align-items-center justify-content-center me-3 text-decoration-none" aria-label="Wishlist">
                <span className="rounded-circle btn-md-square border">
                  <i className="fas fa-heart"></i>
                </span>
              </Link>

              <Link to="/cart" className="text-muted d-flex align-items-center justify-content-center text-decoration-none" aria-label="Cart">
                <span className="rounded-circle btn-md-square border">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span className="text-dark ms-2">$0.00</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

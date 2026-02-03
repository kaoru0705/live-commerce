// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

/* 카테고리 데이터는 한 번만 정의 */
const CATEGORIES = [
  { name: "Accessories", count: 3 },
  { name: "Electronics & Computer", count: 5 },
  { name: "Laptops & Desktops", count: 2 },
  { name: "Mobiles & Tablets", count: 8 },
  { name: "SmartPhone & Smart TV", count: 5 },
];

/* 카테고리 목록 재사용 컴포넌트 */
function CategoryList() {
  return (
    <ul className="list-unstyled categories-bars">
      {CATEGORIES.map((c) => (
        <li key={c.name}>
          <div className="categories-bars-item">
            <Link to="/shop" className="text-decoration-none">
              {c.name}
            </Link>
            <span>({c.count})</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  return (
    <div className="container-fluid nav-bar p-0">
      <div className="row gx-0 bg-primary px-5 align-items-center">

        {/* 좌측 카테고리 (PC) */}
        <div className="col-lg-3 d-none d-lg-block">
          <nav className="navbar navbar-light position-relative" style={{ width: 250 }}>
            <button
              className="navbar-toggler border-0 fs-4 w-100 px-0 text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#allCat"
            >
              <h4 className="m-0">
                <i className="fa fa-bars me-2"></i>All Categories
              </h4>
            </button>

            <div className="collapse navbar-collapse rounded-bottom" id="allCat">
              <div className="navbar-nav ms-auto py-0">
                <CategoryList />
              </div>
            </div>
          </nav>
        </div>

        {/* 메인 네비 */}
        <div className="col-12 col-lg-9">
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">

            {/* 모바일 로고 */}
            <Link to="/" className="navbar-brand d-block d-lg-none">
              <h1 className="display-5 text-secondary m-0">
                <i className="fas fa-shopping-bag text-white me-2"></i>
                Electro
              </h1>
            </Link>

            {/* 모바일 토글 */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars fa-1x"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">

                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/shop"
                  className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                >
                  Shop
                </NavLink>

                <NavLink
                  to="/single"
                  className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                >
                  Single Page
                </NavLink>

                <NavLink
                  to="/live"
                  className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                >
                  Live Page
                </NavLink>

                {/* Pages 드롭다운 */}
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    Pages
                  </Link>

                  <div className="dropdown-menu m-0">
                    <Link to="/bestseller" className="dropdown-item">
                      Bestseller
                    </Link>
                    <Link to="/cart" className="dropdown-item">
                      Cart Page
                    </Link>
                    <Link to="/checkout" className="dropdown-item">
                      Checkout
                    </Link>
                    <Link to="/404" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>


                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav-item nav-link me-2 ${isActive ? "active" : ""}`}
                >
                  Contact
                </NavLink>

                {/* 모바일 카테고리 */}
                <div className="nav-item dropdown d-block d-lg-none mb-3">
                  <button
                    type="button"
                    className="nav-link dropdown-toggle bg-transparent border-0 p-0"
                    data-bs-toggle="dropdown"
                  >
                    All Category
                  </button>

                  <div className="dropdown-menu m-0">
                    <CategoryList />
                  </div>
                </div>
              </div>

              {/* 전화 버튼 */}
              <a
                href="tel:+821012345678"
                className="btn btn-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0"
              >
                <i className="fa fa-mobile-alt me-2"></i> 010-1234-5678
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

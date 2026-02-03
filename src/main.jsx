// main.jsx
import { StrictMode, lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Spinner from "./components/Spinner.jsx";
import Topbar from "./components/Topbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Copyright from "./components/Copyright.jsx";
import Login from "./pages/Login.jsx";
import Shop from "./pages/Shop.jsx";
import Single from "./pages/Single.jsx";
import Live from "./pages/Live.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

// 코드 스플리팅(지연 로딩)
const Home = lazy(() => import("./pages/Home.jsx"));
/*
const CoursesCourses = lazy(() => import("./pages/courses/Courses.jsx"));
*/

function RootLayout(){
  const [loading, setLoading] = useState(true);

  useEffect( ()=>{
    const t = setTimeout(()=> setLoading(false), 300);
    return ()=>clearTimeout(t)
  }, []);

  return(
    <>
      {loading && <Spinner />}
      <Topbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={
            <Suspense fallback={<div className="p-4">Loading...</div>}>
              <Home />
            </Suspense>
          }/>
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/single" element={<Single />} />
          <Route path="/live" element={<Live />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <RootLayout />        
    </StrictMode>
  </BrowserRouter>
);

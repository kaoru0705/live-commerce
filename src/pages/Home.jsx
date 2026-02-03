//  pages/Home.jsx
import Carousel from "./home/Carousel.jsx";
import Service from "./home/Service.jsx";
import ProductsOffer from "./home/ProductsOffer.jsx";
import OurProducts from "./home/OurProducts.jsx";
import ProductBanner from "./home/ProductBanner.jsx";
import Bestseller from "./home/Bestseller.jsx";

export default function Home(){

    return (
        <>
            <Carousel/>
            <Service/>
            <ProductsOffer/>
            <OurProducts/>
            <ProductBanner/>
            <Bestseller/>
        </>
    )
}
import ProductBanner from "./shop/ProductBanner";
import ProductsOffer from "./shop/ProductsOffer";
import Searvices from "./shop/Searvices";
import ShopPage from "./shop/ShopPage";
import SinglePageHeader from "./shop/SinglePageHeader";

export default function Shop(){
    return(
        <>
            <SinglePageHeader />
            <Searvices />
            <ProductsOffer />
            <ShopPage />
            <ProductBanner />
        </>
    );
}
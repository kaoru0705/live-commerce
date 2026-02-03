import RelatedProduct from "./live/RelatedProduct";
import LivePageHeader from "./live/LivePageHeader";
import LiveProducts from "./live/LiveProducts";

export default function Live(){
    return(
        <>
            <LivePageHeader />
            <LiveProducts />
            <RelatedProduct />
        </>
    );
}
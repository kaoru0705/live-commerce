import RelatedProduct from "./single/RelatedProduct";
import SinglePageHeader from "./single/SinglePageHeader";
import SingleProducts from "./single/SingleProducts";

export default function SinglePage(){
    return(
        <>
            <SinglePageHeader />
            <SingleProducts />
            <RelatedProduct />
        </>
    );
}
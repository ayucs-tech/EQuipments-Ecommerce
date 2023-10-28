import { useEffect, useState } from "react";

const useProductDetails = (id) => {

    const [product, setProduct] = useState({});
    useEffect(() => {
        getProductDetails();
    }, []);

    async function getProductDetails() {
        const data = await fetch('https://fakestoreapi.com/products/' + id);
        const json = await data.json();
        setProduct(json);
    }
    return product;
}

export default useProductDetails;
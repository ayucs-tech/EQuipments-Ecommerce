import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function Products() {
    let btn=document.getElementById("cartBtn");
    const [cartBtn, setCartBtn]=useState("Add to Cart");

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addItem(product));
    }

    const [allProducts, setAllProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
        setAllProducts(json);
        setFilterProducts(json);
    }

    const Online = useOnline();
    if (!Online) {
        return <h1>OFFLINE, please check your internet connection</h1>
    }

    if (!allProducts) return null;

    // if(filterProducts?.length===0) return <h4 className="text-center">No products match your search</h4>
    // {(filterProducts?.length===0)&& <h4 className="text-center">No products match your search</h4>}


    return (
        <>
            <div className="my-3 w-75 mx-auto">
                <form className="d-flex" role="search">
                    <input className="form-control  me-1" type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value); }} placeholder="Search for products" aria-label="Search" />
                    <button className="btn btn-outline-success" onClick={(e) => {
                        e.preventDefault();
                        const data = filterData(searchText, allProducts);
                        setFilterProducts(data);
                    }} type="submit">Search</button>
                </form>
                <h4 className='text-center text-danger fw-bold m-3'>Our Products</h4>
            </div>

            {allProducts?.length === 0 ? (<Shimmer />) : (
                <div>
                    <div className="d-flex flex-wrap justify-content-around">
                        {
                            filterProducts.map(i =>
                                        <div className="col-md-3 col-sm-4 card my-3 mx-3 mx-sm-1" key={i.id}>
                                    <Link className="mx-auto mt-2" to={"/product/" + i.id} >
                                            <img src={i.image} className="card-img-top" style={{ width: "12rem", height: "15rem" }} alt="..." />
                                    </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{i.title}</h5>
                                                <p className="card-text">$ {i.price}</p>
                                        </div>
                                                <button className="btn btn-sm btn-dark align-content-end mx-3 my-3" onClick={() => addProduct(i)}>{cartBtn}</button>
                                </div>
                            )
                        }
                    </div>
                </div>)}

        </>
    );
}
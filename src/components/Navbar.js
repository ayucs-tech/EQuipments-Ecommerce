import { useState } from "react";
import {Link} from "react-router-dom";
import { PD } from "./config";
import Products from "./Products";
import { useSelector } from "react-redux";

function filterData(searchText, products){
    console.log(products);
    console.log(products[0].name);
    console.log(searchText);
    const filterData= products.filter((p)=>p.name.includes(searchText));
    console.log(filterData);
    return filterData;
}

export default function Navbar() {
    const [searchText, setSearchText]= useState("");
    const [products, setProducts]=useState(PD);
const cartItems= useSelector(store=>store.cart.items); 
    return (
        <>
            <nav className="navbar navbar-expand-md sticky-top border-bottom shadow-sm" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><span className="text-warning fw-bold">E-Q</span>uipments</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                        {/* <div className="mt-3 me-4 mt-lg-0 mt-md-0 ">
                        <form className="d-flex"  role="search">
                            <input className="form-control  me-1" type="text" value={searchText} onChange={(e)=>
                                {setSearchText(e.target.value);}} placeholder="Search for products" aria-label="Search" />
                            <button className="btn btn-outline-success" onClick={(e)=>{
                               e.preventDefault();
                                const data= filterData(searchText, products);
                                setProducts(data);
                            }} type="submit">Search</button>
                        </form>  
                        </div> */}
                        
                    
                        <ul className="navbar-nav mb-2 mb-lg-0 mb-md-0 ">

                            <li className="nav-item me-3">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu"style={{ backgroundColor: "#e3f2fd" }}>
                                    <li><Link className="dropdown-item " to="/login">Login</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/cart">Cart <span className="badge bg-primary rounded-pill">{cartItems.length}</span></Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}


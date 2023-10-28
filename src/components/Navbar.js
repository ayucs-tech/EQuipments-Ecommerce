import {Link} from "react-router-dom";
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
const cartItems= useSelector(store=>store.cart.items); 
    return (
        <>
            <nav className="navbar navbar-expand sticky-top border-bottom shadow-sm" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><span className="text-warning fw-bold">E-Q</span>uipments</Link>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                        
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu"style={{ backgroundColor: "#e3f2fd" }}>
                                    <li><Link className="dropdown-item " to="/login">Login</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>

                                </ul>
                            </li> */}
                            <li className="nav-item ">
                                <Link className="nav-link" to="/cart">Cart <span className="badge bg-primary rounded-pill">{cartItems.length}</span></Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}


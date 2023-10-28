import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

export default function Cart() {
    const cartItems = useSelector(store => store.cart.items);

    const dispatch= useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return (
        <>
            <h4>Cart Items- {cartItems.length}</h4>
            <button className="btn btn-secondary" onClick={handleClearCart}>Clear Cart</button>

            <div className="d-flex flex-wrap justify-content-around">
                {
                    cartItems.map(i =>
                        <div key={i.id}>
                            <div className="card m-4" style={{ width: "14rem", height: "29rem" }}>
                                <img src={i.image} className="card-img-top" style={{ width: "12rem", height: "15rem" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{i.title}</h5>
                                    <p className="card-text">{i.price}</p>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </>
    );
}
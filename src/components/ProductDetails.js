import { useParams } from "react-router-dom";
import { oneShimmer } from "./Shimmer";
import useProductDetails from "../utils/useProductDetails";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const dispatch = useDispatch();
const addProduct=(product)=>{
dispatch(addItem(product));
}

  const { id } = useParams();

  const product = useProductDetails(id);

  return !product.title ? <div className="d-flex justify-content-center">{oneShimmer()}</div> : (
    <>
      <div className="d-flex justify-content-center m-4">
        <div>
          <h1 className="card-title mb-2">{product.title}</h1>
          <p>{product.description}</p>
          <p><b>Price: </b>{product.price} $</p>
          <p>Product id: {id}</p>
          <button className="btn btn-primary" onClick={()=> addProduct(product)}>Add to Cart</button>
        </div>
        <img src={product.image} className="m-3 card-img-top" style={{ width: "12rem", height: "15rem" }} alt="..." />
      </div>
    </>
  );
}
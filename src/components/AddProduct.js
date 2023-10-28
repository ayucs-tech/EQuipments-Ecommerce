import { useState } from "react";

export default function AddProduct({addAproduct}) {
    const [product, setProduct]= useState({});
    
    function handleAdd(e){
       e.preventDefault();
        addAproduct(product);
    }
    
    function handleChange(e){
        setProduct({...product, [e.target.name]:e.target.value});
    }
    
    return (
        <>
            <div className="w-75 m-auto my-4 d-flex justify-content-center shadow" style={{ backgroundColor: "#e3f2fd" }}>
                <form className="row g-3 mx-5 my-5">
                    <div className="col-12">
                        <label htmlFor="id" className="form-label">Product ID</label>
                        <input type="number" onChange={handleChange} name="id" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="imgUrl" className="form-label">Product Image Url</label>
                        <input type="text" onChange={handleChange} name="imgUrl" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input type="text" onChange={handleChange} name="name" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="price" className="form-label">Product Price</label>
                        <input type="number" onChange={handleChange} name="price" className="form-control" />
                    </div>
                    <div className="d-flex">
                        <button onClick={handleAdd} type="submit" className="btn btn-primary w-50 m-auto mt-3">Add Product</button>
                    </div>
                </form>
            </div>
        </>
    );
}
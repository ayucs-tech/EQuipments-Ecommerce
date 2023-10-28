export default function Login() {
    return (
        <>
            <div className="w-75 m-auto my-4 d-flex justify-content-center shadow" style={{ backgroundColor: "#e3f2fd" }}>
                <form className="row g-3 mx-5 my-5">
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="d-flex">
                    <button type="submit" className="btn btn-primary w-50 m-auto mt-3">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}
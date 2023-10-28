export default function Signup() {
    return (
        <>
            <div className="w-75 m-auto my-4 d-flex align-items-center shadow" style={{ backgroundColor: "#e3f2fd" }}>
                <form className="row g-3 mx-5 my-5">
                    <div className="col-md-6">
                    <label htmlFor="first" className="form-label">First Name</label>
                    <input type="text" id="first" className="form-control" placeholder="" aria-label="First name"/>
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="second" className="form-label">Second Name</label>
                    <input type="text" id="second" className="form-control" placeholder="" aria-label="Last name"/>
                    </div>
                    <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary w-25 mt-3">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    );
}
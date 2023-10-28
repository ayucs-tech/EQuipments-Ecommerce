import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="bottom-0 w-100 mt-auto"  >
                <div className="text-white bg-dark p-2 text-center">
                    <div className="">
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-square-instagram mx-3"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className="my-1">&copy;E-Quipments Estore Pvt. Ltd</div>
                    <div className="">
                        <Link className="text-decoration-none" to="/contact">About Us</Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
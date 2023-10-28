export default function Shimmer() {
    return (
        <>
            <div className="d-flex flex-wrap justify-content-around">
                {Array(10).fill("").map((e, idx) => (
                    <div key={idx}>
                        <div className="card m-4" style={{ width: "14rem", height: "19rem" }} aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export const oneShimmer=()=>{
    return(
        <>
        <div className="card m-4" style={{ width: "14rem", height: "19rem" }} aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                            </div>
                        </div>
        </>
    )
}
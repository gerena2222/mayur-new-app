const CardLong = (props) => {
    return (
        <div>
            <div className="container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={props.egambar}
                                alt="..."
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.etitle}</h5>
                                <p className="card-text">
                                    {props.eteks}</p>
                                <a href="#" className="card-link">ReadMore<span className="sr"></span><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardLong;
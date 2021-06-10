const CardProduct =(props)=>{
    return(
        <div>
            <div className="rootCard justify-content-center">
                <div className="row">
                    <div className="one card" >
                            <img src={props.prodgambar} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.prodtitle}</h5>
                                <p>{props.prodteks}</p>
                                <hr />
                                <a href="#" className="btn btn-primary ">View Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default CardProduct;
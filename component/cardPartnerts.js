const CardPartner = (props) => {
  return (
    <div>
      <div className="container py-4">
        <div className="partners justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <div className="part card justify-content-center">
                <img src={props.pgambar} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{props.ptitle}</h5>
                  <p className="card-text">{props.pteks}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#view_detail"
                  >
                    <i className="fa fa-search"></i> Quick View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardPartner;

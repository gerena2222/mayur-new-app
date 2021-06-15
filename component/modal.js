const Modal = (props) => {
  return (
    <div>
      <div className="modal fade product_view" id="view_detail">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <a href="#" data-dismiss="modal" className="class pull-right">
                <span className="glyphicon glyphicon-remove"></span>
              </a>
              <h3 className="modal-title">Detail View</h3>
            </div>
            <div className="modal-body ">
              <div className="row ">
                <div className="col-md-6 product_img ">
                  <img src={props.mgambar} className="img-responsive" />
                </div>
                <div className="col-md-6 product_content">
                  <h4>{props.mtitle}</h4>
                  <p align="justify">{props.mteks}</p>
                  <div className="space-ten"></div>
                  <div className="btn-ground">
                    <a className="btn btn-primary">Join Sekarang</a>
                    <span className="space"></span>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;

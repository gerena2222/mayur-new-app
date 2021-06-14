const JumbotronSlider = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4 className="mb-3">{props.stitle}</h4>
          </div>
          <div className="col-6 text-right">
            <a
              className="btn btn-primary mb-3 mr-1"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left"></i>
            </a>
            <a
              className="btn btn-primary mb-3 "
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6  ">
                        <img src={props.sgambar} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-6 ">
                        <h2>{props.snama}</h2>
                        <hr></hr>
                        <h5>{props.steks}</h5>
                        <p align="justify">{props.sdeks}</p>
                      </div>
                    </div>
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
export default JumbotronSlider;

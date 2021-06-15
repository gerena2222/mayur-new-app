import Layout from "../component/mainLayout";
import Jumbotron from "../component/jumbotron";
const Partners = () => {
  return (
    <div>
      <Layout title="Partners">
        <Jumbotron
          class="tq"
          jtitle="Selamat Datang"
          jteks="Halaman Partners"
        />
        <div className="container py-4 ">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
                    <img
                      src="https://via.placeholder.com/350"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-6 product_content">
                    <h4>Title</h4>
                    <p align="justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry.
                    </p>
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
      </Layout>
    </div>
  );
};
export default Partners;

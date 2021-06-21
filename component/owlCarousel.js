const OwlCarousel = () => {
  return (
    <div>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container-fluid">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card ">
                <div className="card-body">
                  <h4 className="card-title text-center">Produk Kami</h4>
                  <p className="lead-5 text-center">lorem ipsum akshdkhksdahkhdkas</p>
                  <div className="owl-carousel">
                    <div className="item">
                      <img src="https://via.placeholder.com/300" alt="image" />
                    </div>
                    <div className="item">
                      <img
                        src="https://via.placeholder.com/300"
                        alt="image"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://via.placeholder.com/300"
                        alt="image"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://via.placeholder.com/300"
                        alt="image"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://via.placeholder.com/300"
                        alt="image"
                      />
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
export default OwlCarousel;

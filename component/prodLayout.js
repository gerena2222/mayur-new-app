const ProdLayout = (props) => {
  return (
    <div>
      <div className="one card justify-content-center">
        <img src={props.prodgambar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.prodtitle}</h5>
          <p>{props.prodteks}</p>
          <hr />
          <a href="#" className="btn btn-primary">
            View Detail
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProdLayout;
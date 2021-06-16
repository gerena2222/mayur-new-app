const Card = (props) => {
  return (
    <div>
      <div className="card partners justify-content-center">
        <img src={props.pgambar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.ptitle}</h5>
          <p className="card-text lead">{props.pteks}</p>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target={props.data}
          >
            <i className="fa fa-search"></i> Quick View
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;

const Jumbotron = (props) => {
  return (
    <div>
      <div className={props.class}>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h4 className="display-4">{props.jtitle}</h4>
            <p className="lead">{props.jteks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;

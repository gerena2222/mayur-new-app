const CardPartner = (props) => {
  return (
    <div className="container">
      <div className="partner justify-content-center">
        <div className="row">{props.children}</div>
      </div>
    </div>
  );
};
export default CardPartner;

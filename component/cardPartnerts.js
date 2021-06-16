const CardPartner = (props) => {
  return (
    <div>
      <div className="container py-4">
        <div className="partner justify-content-center">
          <div className="row">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
export default CardPartner;

const CardProduct = (props) => {
  return (
    <div>
      <div className="rootCard justify-content-center">
        <div className="row">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default CardProduct;

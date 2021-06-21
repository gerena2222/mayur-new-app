const CardProduct = (props) => {
  return (
    <div className="rootCard justify-content-center">
      <div className="row">{props.children}</div>
    </div>
  );
};
export default CardProduct;

import Link from "next/link";
const ProdLayout = (props) => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <span className="percent">-50%</span>
          <div className="card-image">
            <img src="https://via.placeholder.com/220" width="250" />
          </div>
          <div className="card-inner">
            <span>
              <img src="/static/logo_title.png" width="25" /> <span></span>
              <strong style={{ fontWeight: "150" }}>Omah Sayur</strong>
            </span>
            <h5 className="mb-0">{props.title}</h5>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <Link href="/product/[id]/[nama]"as="/product/[id]/[nama]">
                <a className="btn btn-success text-uppercase btn-sm details">
                  Details
                </a>
              </Link>
              <div className="d-flex flex-row">
                <span className="wishlist">
                  <i className="fa fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProdLayout;

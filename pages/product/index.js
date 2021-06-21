import CardProduct from "../../component/cardProduct";
import Jumbotron from "../../component/jumbotron";
import Layout from "../../component/mainLayout";
import daftarProduct from "../../datasets/product.json";
import Link from "next/link";

export async function getServerSideProps(ctx) {
  return {
    props: { daftarProduct },
  };
}

const ProdLayout = (props) => {
  return (
    <div>
      <div className="one card justify-content-center" >
        <img src={props.gambar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p>{props.deks}</p>
          <hr />
          <Link
            href="/product/[id]/[nama]"
            as={`product/${props.id}/${props.title
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            <a className="btn btn-primary">View Detail</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
const Product = (props) => {
  return (
    <div>
      <Layout title="Produk">
        <Jumbotron class="tq" jtitle="Selamat Datang" jteks="Halaman Product" />
        <CardProduct>
          {props.daftarProduct.map((product) => (
            <ProdLayout
              id={product.id}
              gambar={product.gambar}
              title={product.title}
              deks={product.deks}
            />
          ))}
        </CardProduct>
      </Layout>
    </div>
  );
};
export default Product;

import CardProduct from "../../component/cardProduct";
import Jumbotron from "../../component/jumbotron";
import Layout from "../../component/mainLayout";
import Link from "next/link";
import prisma from "../../client.ts";

export async function getServerSideProps(ctx) {
  const daftarProduct = await prisma.product.findMany();
  return {
    props: { daftarProduct },
  };
}

const ProdLayout = (props) => {
  return (
    <div>
      <div className="one card justify-content-center" >
        <img src={props.gambarProduct} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.namaProduct}</h5>
          <hr />
          <Link
            href="/product/[id]/[nama]"
            as={`product/${props.id}/${props.namaProduct
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
              gambarProduct={product.gambarProduct}
              namaProduct={product.namaProduct}
            />
          ))}
        </CardProduct>
      </Layout>
    </div>
  );
};
export default Product;

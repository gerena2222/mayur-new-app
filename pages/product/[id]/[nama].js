import Layout from "../../../component/mainLayout";
import daftarProduct from "../../../datasets/product.json";
import Jumbotron from "../../../component/jumbotron";
export async function getServerSideProps(ctx) {
  let id = ctx.params.id;
  let data = daftarProduct.find((product) => product.id == id);
  let { title, gambar, deks} = data;
  return { props: { title, gambar, deks } };
 }
 
const DetailProduk = (props) => {
  return (
    <div>
      <Layout title="Product">
        <Jumbotron/>
        <h4 className="pt-3">Produk</h4>
        <h1 className="display-4">{props.title}</h1>
        <img src={props.gambar}/>
        <p className="lead"></p>
      </Layout>
    </div>
  );
};
export default DetailProduk;

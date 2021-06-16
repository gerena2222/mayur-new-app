import AboutSection from "../component/aboutSection";
import CardProduct from "../component/cardProduct";
import Jumbotron from "../component/jumbotron";
import Layout from "../component/mainLayout";
import ProdLayout from "../component/prodLayout";
import Slider from "../component/slider";

const Home = () => {
  return (
    <div>
      <Layout title="Beranda">
        <Slider />
        <Jumbotron
          jtitle="Selamat Datang"
          jteks="kami melayani anda dengan actual"
        />
        <CardProduct>
          <ProdLayout
            as="/product/1/produk-1"
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 1"
            prodteks="ini sebuah contoh"
          />
          <ProdLayout
            as="/product/2/produk-2"
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 2"
            prodteks="ini sebuah contoh"
          />
          <ProdLayout
            as="/product/3/produk-3"
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 3"
            prodteks="ini sebuah contoh"
          />
          <ProdLayout
            as="/product/4/produk-4"
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 4"
            prodteks="ini sebuah contoh"
          />
          <ProdLayout
            as="/product/5/produk-5"
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 5"
            prodteks="ini sebuah contoh"
          />
        </CardProduct>
        <AboutSection/>
      </Layout>
    </div>
  );
};
export default Home;

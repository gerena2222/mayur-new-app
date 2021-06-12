import AboutSection from "../component/aboutSection";
import CardProduct from "../component/cardProduct";
import Jumbotron from "../component/jumbotron";
import Layout from "../component/mainLayout";
import ProdLayout from "../component/prodLayout";
import Slider from "../component/slider";

const Home = () => {
  return (
    <div>
      <Layout>
        <Slider />
        <Jumbotron
          jtitle="Selamat Datang"
          jteks="kami melayani anda dengan actual"
        />
        <CardProduct>
          <ProdLayout
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 1"
            prodteks="ini sebuah contoh"
          />
          <ProdLayout
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 1"
            prodteks="ini sebuah contoh"
          />
          <ProdLayout
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 1"
            prodteks="ini sebuah contoh"
          />
          <ProdLayout
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 1"
            prodteks="ini sebuah contoh"
          />
          <ProdLayout
            prodgambar="https://via.placeholder.com/200"
            prodtitle="Test 1"
            prodteks="ini sebuah contoh"
          />
        </CardProduct>
        <AboutSection/>
      </Layout>
    </div>
  );
};
export default Home;

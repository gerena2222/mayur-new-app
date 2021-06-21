import AboutSection from "../component/aboutSection";
import Jumbotron from "../component/jumbotron";
import Layout from "../component/mainLayout";
import Slider from "../component/slider";
import OwlCarousel from "../component/owlCarousel";

const Home = () => {
  return (
    <div>
      <Layout title="Beranda">
        <Slider />
        <Jumbotron
          jtitle="Selamat Datang"
          jteks="kami melayani anda dengan actual"
        />
        <OwlCarousel/>
        <AboutSection />
      </Layout>
    </div>
  );
};
export default Home;

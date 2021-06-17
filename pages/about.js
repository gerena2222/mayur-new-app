import Layout from "../component/mainLayout";
import Jumbotron from "../component/jumbotron";
import AboutSection from "../component/aboutSection";
const About = () => {
  return (
    <div>
      <Layout title="Tentang">
        <Jumbotron
          class="tq"
          jtitle="Selamat Datang"
          jteks="kami melayani About"
        />
        <AboutSection/>
      </Layout>
    </div>
  );
};
export default About;

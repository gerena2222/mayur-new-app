import Layout from "../component/mainLayout";
import Jumbotron from "../component/jumbotron";
const About = () => {
  return (
    <div>
      <Layout title="About">
        <Jumbotron
          class="tq"
          jtitle="Selamat Datang"
          jteks="kami melayani About"
        />
      </Layout>
    </div>
  );
};
export default About;

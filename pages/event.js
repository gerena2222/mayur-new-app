import Layout from "../component/mainLayout";
import Jumbotron from "../component/jumbotron";
const Event = () => {
  return (
    <div>
      <Layout title="Event">
        <Jumbotron
          class="tq"
          jtitle="Selamat Datang"
          jteks="Halaman Event"
        />
      </Layout>
    </div>
  );
};
export default Event;

import Layout from "../component/mainLayout";
import Jumbotron from "../component/jumbotron";
import CardPartner from "../component/cardPartnerts";
import Card from "../component/card";
import Modal from "../component/modal";
const Partners = () => {
  return (
    <div>
      <Layout title="Mitra">
        <Jumbotron
          class="tq"
          jtitle="Selamat Datang"
          jteks="Halaman Partners"
        />
        <CardPartner>
          <Card
            pgambar="https://via.placeholder.com/300"
            ptitle="Mitra Kecil"
            pteks="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            data="#view1"
          />
          <Card
            pgambar="https://via.placeholder.com/300"
            ptitle="Mitra Menengah"
            pteks="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            data="#view2"
          />
          <Card
            pgambar="https://via.placeholder.com/300"
            ptitle="Mitra Atas"
            pteks="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            data="#view3"
          />
          <Modal
            id="view1"
            mtitle="Mitra Kecil"
            mgambar="https://via.placeholder.com/350"
            mteks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
           <Modal
            id="view2"
            mtitle="Mitra Menengah"
            mgambar="https://via.placeholder.com/350"
            mteks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
           <Modal
            id="view3"
            mtitle="Mitra Atas"
            mgambar="https://via.placeholder.com/350"
            mteks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </CardPartner>
      </Layout>
    </div>
  );
};
export default Partners;

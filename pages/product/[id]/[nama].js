import { useRouter } from "next/router";
import Layout from "../../../component/mainLayout";

const DetailProduk = () => {
  const router = useRouter();
  const { id, nama } = router.query;
  return (
    <div>
      <Layout title="Product">
        <h4 className="pt-3">PENELITIAN</h4>
        <h1 className="display-4">{nama}</h1>
        <p className="lead">Kode penelitian : {id}</p>
      </Layout>
    </div>
  );
};
export default DetailProduk;

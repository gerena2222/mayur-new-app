import Layout from "../../../component/mainLayout";
import prisma from "../../../client.ts";
import Jumbotron from "../../../component/jumbotron";
export async function getServerSideProps(ctx) {
  let id = ctx.params.id;
  let data = await prisma.product.findUnique({
    where:{id:Number(id)}
  });
  let { namaProduct, gambarProduct, deskripsi } = data;
  return { props: { namaProduct, gambarProduct, deskripsi } };
}

const DetailProduk = (props) => {
  return (
    <div>
      <Layout title="Product">
        <Jumbotron />

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              <article>
                <header className="mb-4">
                  <h1 className="fw-bolder mb-1">Viber Drink {props.namaProduct}</h1>
                </header>
                <figure className="mb-4">
                  <img
                    className="img-fluid rounded"
                    src={props.gambarProduct} width="900" height="600"
                    alt="..."
                  />
                </figure>

                <section className="mb-5">
                  <h2 className="fw-bolder mb-4 mt-5">
                    Manfaat Dari {props.namaProduct}
                  </h2>
                  <p className="fs-5 mb-4">
                    {props.deskripsi}
                  </p>
                  <p className="fs-5 mb-4">
                   {props.deskripsi}
                  </p>
                  <h2 className="fw-bolder mb-4 mt-5">
                    Efek Samping Dari {props.namaProduct}
                  </h2>
                  <p className="fs-5 mb-4">
                   {props.deskripsi}
                  </p>
                  <p className="fs-5 mb-4">
                  {props.deskripsi}
                  </p>
                </section>
              </article>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default DetailProduk;

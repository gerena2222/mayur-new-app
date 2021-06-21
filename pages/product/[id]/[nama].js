import Layout from "../../../component/mainLayout";
import daftarProduct from "../../../datasets/product.json";
import Jumbotron from "../../../component/jumbotron";
export async function getServerSideProps(ctx) {
  let id = ctx.params.id;
  let data = daftarProduct.find((product) => product.id == id);
  let { title, gambar, deks } = data;
  return { props: { title, gambar, deks } };
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
                  <h1 className="fw-bolder mb-1">Viber Drink {props.title}</h1>
                </header>
                <figure className="mb-4">
                  <img
                    className="img-fluid rounded"
                    src={props.gambar} width="900" height="600"
                    alt="..."
                  />
                </figure>

                <section className="mb-5">
                  <h2 className="fw-bolder mb-4 mt-5">
                    Manfaat Dari {props.title}
                  </h2>
                  <p className="fs-5 mb-4">
                    For me, the most fascinating interface is Twitter. I have
                    odd cosmic thoughts every day and I realized I could hold
                    them to myself or share them with people who might be
                    interested.
                  </p>
                  <p className="fs-5 mb-4">
                    Venus has a runaway greenhouse effect. I kind of want to
                    know what happened there because we're twirling knobs here
                    on Earth without knowing the consequences of it. Mars once
                    had running water. It's bone dry today. Something bad
                    happened there as well.
                  </p>
                  <h2 className="fw-bolder mb-4 mt-5">
                    Efek Samping Dari {props.title}
                  </h2>
                  <p className="fs-5 mb-4">
                    For me, the most fascinating interface is Twitter. I have
                    odd cosmic thoughts every day and I realized I could hold
                    them to myself or share them with people who might be
                    interested.
                  </p>
                  <p className="fs-5 mb-4">
                    Venus has a runaway greenhouse effect. I kind of want to
                    know what happened there because we're twirling knobs here
                    on Earth without knowing the consequences of it. Mars once
                    had running water. It's bone dry today. Something bad
                    happened there as well.
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

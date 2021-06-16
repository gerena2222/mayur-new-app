import Layout from "../component/mainLayout";
import Jumbotron from "../component/jumbotron";
import CardLong from "../component/cardLong";
const Education = () => {
  return (
    <div>
      <Layout title="Edukasi">
        <Jumbotron
          class="tq"
          jtitle="Selamat Datang"
          jteks="kami melayani Education"
        />
        <CardLong
          egambar="https://via.placeholder.com/400x300"
          etitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          eteks="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam, vel omnis maxime beatae minima molestias, eaque cum numquam nemo debitis architecto, perferendis asperiores doloribus earum aut laudantium voluptate temporibus."
        />
        <CardLong
          egambar="https://via.placeholder.com/400x300"
          etitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          eteks="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam, vel omnis maxime beatae minima molestias, eaque cum numquam nemo debitis architecto, perferendis asperiores doloribus earum aut laudantium voluptate temporibus."
        />
        <CardLong
          egambar="https://via.placeholder.com/400x300"
          etitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          eteks="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam, vel omnis maxime beatae minima molestias, eaque cum numquam nemo debitis architecto, perferendis asperiores doloribus earum aut laudantium voluptate temporibus."
        />
      </Layout>
    </div>
  );
};
export default Education;

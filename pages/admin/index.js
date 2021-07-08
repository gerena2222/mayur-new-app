import prisma from "../../client.ts";
import AdminLayout from "../../component/adminLayout";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

export async function getServerSideProps(ctx) {
  const daftarProduk = await prisma.product.findMany();

  return { props: { daftarProduk } };
}

const FormTambah = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputdesk" className="form-label">
          Nama Produk
        </label>
        <input
          {...register("namaProduct", { required: true })}
          type="text"
          className="form-control"
          id="inputdesk"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputdesk" className="form-label">
          Gambar Produk
        </label>
        <input
          {...register("gambarProduct", { required: true })}
          type="text"
          className="form-control"
          id="inputdesk"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputdesk" className="form-label">
          Kategori
        </label>
        <input
          {...register("kategori", { required: true })}
          type="text"
          className="form-control"
          id="inputdesk"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputdesk" className="form-label">
          Deskripsi
        </label>
        <input
          {...register("deskripsi", { required: true })}
          type="text"
          className="form-control"
          id="inputdesk"
        />
      </div>
      <div className="col-12">
        <br />
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </div>
    </form>
  );
};
let id = 1;
const Admin = (props) => {
  const [daftarProduk, setDaftarProduct] = useState(props.daftarProduk);
  return (
    <AdminLayout>
      <h1>Daftar Produk</h1>
      <FormTambah
        onSubmit={async (data, event) => {
          const product = {
            namaProduct: data.namaProduct,
            gambarProduct: data.gambarProduct,
            kategori: data.kategori,
            deskripsi: data.deskripsi,
          };
          try {
            const respon = await fetch("/api/product/tambah", {
              method: "POST",
              body: JSON.stringify(product),
            });
            if (!respon.ok) throw new Error(respon.statusText);
            let status = await respon.json();
            if (status !== null) {
              event.target.reset(); // mereset isi form
              setDaftarProduct([...daftarProduk, product]); // atur nilai state
            }
            alert("Data Berhasil Masuk");
          } catch (error) {
            console.log(error);
          }
        }}
      />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No. </th>
              <th scope="col">Nama Produk </th>
              {/* <th scope="col">Gambar Produk</th> */}
              <th scope="col">Kategori</th>
              {/* <th scope="col">Deskripsi</th> */}
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {daftarProduk.map((product) => (
              <tr key={product.id}>
                <td>{id++}</td>
                <td>{product.namaProduct}</td>
                {/* <td>{product.gambarProduct}</td> */}
                <td>{product.kategori}</td>
                {/* <td>{product.deskripsi}</td> */}
                <td>
                  <a className="btn btn-sm btn-success">Ubah</a>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={async (event) => {
                      try {
                        const hapus = await fetch("/api/product/hapus", {
                          method: "POST",
                          body: JSON.stringify(product),
                        });
                        location.reload();
                        alert("Data Berhasil dihapus");
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};
export default Admin;

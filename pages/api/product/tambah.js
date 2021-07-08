import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method Tidak Diijinkan" });
  const product = JSON.parse(req.body);

  const tambah = await prisma.product.create({
    data: {
      namaProduct: product.namaProduct,
      gambarProduct:product.gambarProduct,
      kategori: product.kategori,
      deskripsi: product.deskripsi,
    },
  });
  res.json(tambah);
};

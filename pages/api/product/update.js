import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method Tidak Diijinkan" });
  const product = JSON.parse(req.body);
  const perbarui = await prisma.product.update({
    where: {
      id:product.id,
    },
    data: {
      namaProduct:product.namaProduct,
      gambarProduct:product.gambarProduct,
    },
  });
  res.json(update);
};

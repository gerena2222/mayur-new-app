import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method Tidak Diijinkan" });
  const product = JSON.parse(req.body);

  const hapus = await prisma.product.delete({
    where: {
      id:product.id,
    },
  })
  res.json(hapus);
};
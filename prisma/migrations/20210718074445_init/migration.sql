-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "namaProduct" TEXT NOT NULL,
    "gambarProduct" TEXT NOT NULL,
    "kategori" TEXT,
    "deskripsi" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "userAdmin" TEXT NOT NULL,
    "passAdmin" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin.userAdmin_unique" ON "Admin"("userAdmin");

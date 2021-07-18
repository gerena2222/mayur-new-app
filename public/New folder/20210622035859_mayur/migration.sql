-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namaProduct" TEXT NOT NULL,
    "gambarProduct" TEXT NOT NULL,
    "kategori" TEXT,
    "deskripsi" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userAdmin" TEXT NOT NULL,
    "passAdmin" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin.userAdmin_unique" ON "Admin"("userAdmin");

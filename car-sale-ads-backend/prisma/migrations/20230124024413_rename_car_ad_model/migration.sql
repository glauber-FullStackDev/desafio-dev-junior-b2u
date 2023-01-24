/*
  Warnings:

  - You are about to drop the `CarrAdd` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CarrAdd" DROP CONSTRAINT "CarrAdd_ownerId_fkey";

-- DropTable
DROP TABLE "CarrAdd";

-- CreateTable
CREATE TABLE "CarAd" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "manufactureYear" INTEGER NOT NULL,
    "modelYear" INTEGER NOT NULL,
    "fuel" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "eletricWindow" BOOLEAN NOT NULL,
    "hidraulicSteenring" BOOLEAN NOT NULL,
    "eletricicSteenring" BOOLEAN NOT NULL,
    "automaticGearBox" BOOLEAN NOT NULL,
    "airConditioning" BOOLEAN NOT NULL,
    "airbag" BOOLEAN NOT NULL,
    "alarm" BOOLEAN NOT NULL,
    "eletricLock" BOOLEAN NOT NULL,

    CONSTRAINT "CarAd_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarAd" ADD CONSTRAINT "CarAd_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "CarrAdd" (
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

    CONSTRAINT "CarrAdd_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarrAdd" ADD CONSTRAINT "CarrAdd_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

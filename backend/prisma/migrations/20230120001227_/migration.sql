-- CreateTable
CREATE TABLE "registration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "car" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "manufacture" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "registration_email_key" ON "registration"("email");

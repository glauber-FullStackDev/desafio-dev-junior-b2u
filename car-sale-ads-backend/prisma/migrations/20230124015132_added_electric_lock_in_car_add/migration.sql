/*
  Warnings:

  - Added the required column `eletricLock` to the `CarrAdd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarrAdd" ADD COLUMN     "eletricLock" BOOLEAN NOT NULL;

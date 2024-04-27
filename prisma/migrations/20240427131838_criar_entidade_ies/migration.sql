/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `Ies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpj` to the `Ies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ies" ADD COLUMN     "cnpj" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ies_cnpj_key" ON "Ies"("cnpj");

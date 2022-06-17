/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Professional` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Professional" DROP CONSTRAINT "Professional_institution_id_fkey";

-- AlterTable
ALTER TABLE "Professional" ALTER COLUMN "position" DROP NOT NULL,
ALTER COLUMN "institution_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Professional_email_key" ON "Professional"("email");

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

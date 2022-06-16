/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Institution` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Institution` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `institutionId` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Professional` table. All the data in the column will be lost.
  - Added the required column `institution_id` to the `Professional` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Professional" DROP CONSTRAINT "Professional_institutionId_fkey";

-- AlterTable
ALTER TABLE "Institution" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Professional" DROP COLUMN "createdAt",
DROP COLUMN "institutionId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "institution_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

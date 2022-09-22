/*
  Warnings:

  - You are about to drop the column `institution_id` on the `professionals` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "KindOfHandicap" AS ENUM ('PHYSICAL', 'MENTAL', 'VISUAL', 'HEARING', 'SPEECH', 'MULTIPLE', 'OTHER');

-- DropForeignKey
ALTER TABLE "professionals" DROP CONSTRAINT "professionals_institution_id_fkey";

-- AlterTable
ALTER TABLE "professionals" DROP COLUMN "institution_id",
ADD COLUMN     "fk_institution_id" TEXT;

-- CreateTable
CREATE TABLE "childrens" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "identification" TEXT,
    "diagnosis" TEXT,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "kind_of_handicap" "KindOfHandicap" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "childrens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "children_professionals" (
    "fk_child_id" TEXT NOT NULL,
    "fk_professional_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "children_professionals_pkey" PRIMARY KEY ("fk_child_id","fk_professional_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "childrens_identification_key" ON "childrens"("identification");

-- AddForeignKey
ALTER TABLE "professionals" ADD CONSTRAINT "professionals_fk_institution_id_fkey" FOREIGN KEY ("fk_institution_id") REFERENCES "institutions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "children_professionals" ADD CONSTRAINT "children_professionals_fk_professional_id_fkey" FOREIGN KEY ("fk_professional_id") REFERENCES "professionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "children_professionals" ADD CONSTRAINT "children_professionals_fk_child_id_fkey" FOREIGN KEY ("fk_child_id") REFERENCES "childrens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

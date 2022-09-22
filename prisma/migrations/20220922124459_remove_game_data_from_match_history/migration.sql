/*
  Warnings:

  - You are about to drop the column `fk_game_data_id` on the `match_history` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "match_history" DROP CONSTRAINT "match_history_fk_game_data_id_fkey";

-- AlterTable
ALTER TABLE "match_history" DROP COLUMN "fk_game_data_id";

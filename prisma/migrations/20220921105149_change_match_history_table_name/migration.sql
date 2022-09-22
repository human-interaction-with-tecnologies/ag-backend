/*
  Warnings:

  - You are about to drop the `MatchHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MatchHistory" DROP CONSTRAINT "MatchHistory_fk_child_id_fkey";

-- DropForeignKey
ALTER TABLE "MatchHistory" DROP CONSTRAINT "MatchHistory_fk_game_data_id_fkey";

-- DropForeignKey
ALTER TABLE "MatchHistory" DROP CONSTRAINT "MatchHistory_fk_game_id_fkey";

-- DropForeignKey
ALTER TABLE "MatchHistory" DROP CONSTRAINT "MatchHistory_fk_professional_id_fkey";

-- DropTable
DROP TABLE "MatchHistory";

-- CreateTable
CREATE TABLE "match_history" (
    "id" TEXT NOT NULL,
    "game_settings" TEXT NOT NULL DEFAULT E'{}',
    "fk_child_id" TEXT NOT NULL,
    "fk_professional_id" TEXT NOT NULL,
    "fk_game_id" TEXT NOT NULL,
    "fk_game_data_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_fk_professional_id_fkey" FOREIGN KEY ("fk_professional_id") REFERENCES "professionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_fk_child_id_fkey" FOREIGN KEY ("fk_child_id") REFERENCES "childrens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_fk_game_id_fkey" FOREIGN KEY ("fk_game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_fk_game_data_id_fkey" FOREIGN KEY ("fk_game_data_id") REFERENCES "game_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

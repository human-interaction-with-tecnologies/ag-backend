/*
  Warnings:

  - You are about to drop the `game_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "games" DROP CONSTRAINT "games_fk_game_category_id_fkey";

-- AlterTable
ALTER TABLE "game_data" ADD COLUMN     "fk_theme_id" TEXT;

-- AlterTable
ALTER TABLE "games" ADD COLUMN     "fk_theme_id" TEXT;

-- DropTable
DROP TABLE "game_categories";

-- CreateTable
CREATE TABLE "games_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "games_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchHistory" (
    "id" TEXT NOT NULL,
    "game_settings" TEXT NOT NULL DEFAULT E'{}',
    "fk_child_id" TEXT NOT NULL,
    "fk_professional_id" TEXT NOT NULL,
    "fk_game_id" TEXT NOT NULL,
    "fk_game_data_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MatchHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "themes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "themes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_fk_game_category_id_fkey" FOREIGN KEY ("fk_game_category_id") REFERENCES "games_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_fk_theme_id_fkey" FOREIGN KEY ("fk_theme_id") REFERENCES "themes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_data" ADD CONSTRAINT "game_data_fk_theme_id_fkey" FOREIGN KEY ("fk_theme_id") REFERENCES "themes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchHistory" ADD CONSTRAINT "MatchHistory_fk_professional_id_fkey" FOREIGN KEY ("fk_professional_id") REFERENCES "professionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchHistory" ADD CONSTRAINT "MatchHistory_fk_child_id_fkey" FOREIGN KEY ("fk_child_id") REFERENCES "childrens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchHistory" ADD CONSTRAINT "MatchHistory_fk_game_id_fkey" FOREIGN KEY ("fk_game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchHistory" ADD CONSTRAINT "MatchHistory_fk_game_data_id_fkey" FOREIGN KEY ("fk_game_data_id") REFERENCES "game_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

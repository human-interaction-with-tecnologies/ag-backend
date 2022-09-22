-- CreateEnum
CREATE TYPE "GroupType" AS ENUM ('PROFESSIONAL', 'CHILD');

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fk_professional_id" TEXT NOT NULL,
    "group_type" "GroupType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups_themes" (
    "fk_group_id" TEXT NOT NULL,
    "fk_theme_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "groups_themes_pkey" PRIMARY KEY ("fk_group_id","fk_theme_id")
);

-- CreateTable
CREATE TABLE "groups_children" (
    "fk_group_id" TEXT NOT NULL,
    "fk_child_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "groups_children_pkey" PRIMARY KEY ("fk_group_id","fk_child_id")
);

-- CreateTable
CREATE TABLE "groups_professionals" (
    "fk_group_id" TEXT NOT NULL,
    "fk_professional_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "groups_professionals_pkey" PRIMARY KEY ("fk_group_id","fk_professional_id")
);

-- AddForeignKey
ALTER TABLE "groups_themes" ADD CONSTRAINT "groups_themes_fk_theme_id_fkey" FOREIGN KEY ("fk_theme_id") REFERENCES "themes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups_themes" ADD CONSTRAINT "groups_themes_fk_group_id_fkey" FOREIGN KEY ("fk_group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups_children" ADD CONSTRAINT "groups_children_fk_child_id_fkey" FOREIGN KEY ("fk_child_id") REFERENCES "childrens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups_children" ADD CONSTRAINT "groups_children_fk_group_id_fkey" FOREIGN KEY ("fk_group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups_professionals" ADD CONSTRAINT "groups_professionals_fk_professional_id_fkey" FOREIGN KEY ("fk_professional_id") REFERENCES "professionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups_professionals" ADD CONSTRAINT "groups_professionals_fk_group_id_fkey" FOREIGN KEY ("fk_group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `private` to the `Repo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Repo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Repo" ADD COLUMN     "private" BOOLEAN NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

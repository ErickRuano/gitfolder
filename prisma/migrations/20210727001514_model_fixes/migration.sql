/*
  Warnings:

  - You are about to drop the column `clerkhData` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Folder" ALTER COLUMN "ownerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "clerkhData",
ADD COLUMN     "clerkData" JSONB;

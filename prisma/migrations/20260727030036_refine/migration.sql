/*
  Warnings:

  - Added the required column `role` to the `message` table without a default value. This is not possible if the table is not empty.
  - Made the column `attachments` on table `message` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "message" ADD COLUMN     "role" TEXT NOT NULL,
ALTER COLUMN "attachments" SET NOT NULL;

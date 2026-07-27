/*
  Warnings:

  - A unique constraint covering the columns `[externalId]` on the table `message` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "message" ADD COLUMN     "externalId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "message_externalId_key" ON "message"("externalId");

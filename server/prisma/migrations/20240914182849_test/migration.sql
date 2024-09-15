/*
  Warnings:

  - A unique constraint covering the columns `[accountId]` on the table `buyers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "buyers_accountId_key" ON "buyers"("accountId");

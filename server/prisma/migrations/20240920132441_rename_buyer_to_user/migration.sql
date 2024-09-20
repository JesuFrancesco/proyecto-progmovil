/*
  Warnings:

  - You are about to drop the `buyers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "buyers_accountId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "buyers";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "referenceAddress" TEXT,
    "distritoId" INTEGER,
    "provinciaId" INTEGER,
    "departamentoId" INTEGER,
    "accountId" INTEGER NOT NULL,
    CONSTRAINT "users_distritoId_fkey" FOREIGN KEY ("distritoId") REFERENCES "distritos" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "users_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "provincias" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "users_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "departamentos" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "users_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_chat_participants" (
    "chatId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("chatId", "userId"),
    CONSTRAINT "chat_participants_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chats" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "chat_participants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_chat_participants" ("chatId", "userId") SELECT "chatId", "userId" FROM "chat_participants";
DROP TABLE "chat_participants";
ALTER TABLE "new_chat_participants" RENAME TO "chat_participants";
CREATE TABLE "new_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "totalPrice" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("id", "status", "totalPrice", "userId") SELECT "id", "status", "totalPrice", "userId" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
CREATE TABLE "new_product_questions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "productId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "product_questions_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_questions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_product_questions" ("createdAt", "id", "productId", "text", "userId") SELECT "createdAt", "id", "productId", "text", "userId" FROM "product_questions";
DROP TABLE "product_questions";
ALTER TABLE "new_product_questions" RENAME TO "product_questions";
CREATE TABLE "new_product_ratings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "score" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "product_ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_ratings_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_product_ratings" ("createdAt", "id", "productId", "score", "text", "userId") SELECT "createdAt", "id", "productId", "score", "text", "userId" FROM "product_ratings";
DROP TABLE "product_ratings";
ALTER TABLE "new_product_ratings" RENAME TO "product_ratings";
CREATE TABLE "new_shopping_carts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "shopping_carts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_shopping_carts" ("id", "userId") SELECT "id", "userId" FROM "shopping_carts";
DROP TABLE "shopping_carts";
ALTER TABLE "new_shopping_carts" RENAME TO "shopping_carts";
CREATE TABLE "new_user_notifications" (
    "userId" INTEGER NOT NULL,
    "notificationId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "notificationId"),
    CONSTRAINT "user_notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_notifications_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "notificactions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_user_notifications" ("notificationId", "userId") SELECT "notificationId", "userId" FROM "user_notifications";
DROP TABLE "user_notifications";
ALTER TABLE "new_user_notifications" RENAME TO "user_notifications";
CREATE TABLE "new_wishlists" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "wishlists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_wishlists" ("id", "userId") SELECT "id", "userId" FROM "wishlists";
DROP TABLE "wishlists";
ALTER TABLE "new_wishlists" RENAME TO "wishlists";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "users_accountId_key" ON "users"("accountId");

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_chats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_chats" ("created_at", "id") SELECT "created_at", "id" FROM "chats";
DROP TABLE "chats";
ALTER TABLE "new_chats" RENAME TO "chats";
CREATE TABLE "new_messages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" INTEGER NOT NULL,
    "account_id" INTEGER NOT NULL,
    CONSTRAINT "messages_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_messages" ("account_id", "created_at", "id", "status", "text", "updated_at") SELECT "account_id", "created_at", "id", "status", "text", "updated_at" FROM "messages";
DROP TABLE "messages";
ALTER TABLE "new_messages" RENAME TO "messages";
CREATE TABLE "new_notificactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_notificactions" ("created_at", "description", "id", "imageUrl", "title", "updated_at") SELECT "created_at", "description", "id", "imageUrl", "title", "updated_at" FROM "notificactions";
DROP TABLE "notificactions";
ALTER TABLE "new_notificactions" RENAME TO "notificactions";
CREATE TABLE "new_product_questions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "product_ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_ratings_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_product_ratings" ("createdAt", "id", "productId", "score", "text", "userId") SELECT "createdAt", "id", "productId", "score", "text", "userId" FROM "product_ratings";
DROP TABLE "product_ratings";
ALTER TABLE "new_product_ratings" RENAME TO "product_ratings";
CREATE TABLE "new_question_replies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "questionId" INTEGER NOT NULL,
    CONSTRAINT "question_replies_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "product_questions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_question_replies" ("createdAt", "id", "questionId", "text") SELECT "createdAt", "id", "questionId", "text" FROM "question_replies";
DROP TABLE "question_replies";
ALTER TABLE "new_question_replies" RENAME TO "question_replies";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_accounts" ("email", "id", "name", "password", "phone", "role") SELECT "email", "id", "name", "password", "phone", "role" FROM "accounts";
DROP TABLE "accounts";
ALTER TABLE "new_accounts" RENAME TO "accounts";
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

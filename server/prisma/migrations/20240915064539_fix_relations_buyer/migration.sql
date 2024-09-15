-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_buyers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "referenceAddress" TEXT,
    "distritoId" INTEGER,
    "provinciaId" INTEGER,
    "departamentoId" INTEGER,
    "accountId" INTEGER NOT NULL,
    CONSTRAINT "buyers_distritoId_fkey" FOREIGN KEY ("distritoId") REFERENCES "distritos" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "buyers_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "provincias" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "buyers_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "departamentos" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "buyers_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_buyers" ("accountId", "departamentoId", "distritoId", "id", "provinciaId", "referenceAddress") SELECT "accountId", "departamentoId", "distritoId", "id", "provinciaId", "referenceAddress" FROM "buyers";
DROP TABLE "buyers";
ALTER TABLE "new_buyers" RENAME TO "buyers";
CREATE UNIQUE INDEX "buyers_accountId_key" ON "buyers"("accountId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

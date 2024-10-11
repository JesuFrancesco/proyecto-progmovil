/*
  Warnings:

  - You are about to alter the column `total_price` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN "cubierta" TEXT;
ALTER TABLE "products" ADD COLUMN "descripcion" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_price" DECIMAL NOT NULL,
    "status" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("id", "status", "total_price", "user_id") SELECT "id", "status", "total_price", "user_id" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

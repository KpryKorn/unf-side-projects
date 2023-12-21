/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "bio" TEXT,
    "age" INTEGER,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT
);
INSERT INTO "new_User" ("age", "bio", "email", "emailVerified", "id", "image") SELECT "age", "bio", "email", "emailVerified", "id", "image" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

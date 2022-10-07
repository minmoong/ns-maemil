-- CreateTable
CREATE TABLE "Todos" (
    "classId" TEXT NOT NULL,
    "grd" INTEGER NOT NULL,
    "grp" INTEGER NOT NULL,
    "todos" TEXT NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("classId")
);

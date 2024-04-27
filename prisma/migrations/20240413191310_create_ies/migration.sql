-- CreateTable
CREATE TABLE "Ies" (
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ies_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "survey" (
    "id" SERIAL NOT NULL,
    "q1" TEXT,
    "q2" TEXT,
    "q3" TEXT,
    "q4" TEXT,
    "q5" TEXT,
    "q6" TEXT,
    "q7" TEXT,
    "q8" TEXT,

    CONSTRAINT "survey_pkey" PRIMARY KEY ("id")
);

import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Inter } from "next/font/google";
import { Intro, Survey } from "./components/Forms";
import prisma from "@/prisma/client";
import { survey } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <main className="flex flex-col gap-4 h-max">
        <div>
          <Intro data={dict.survey.surveyHead} />
          {/* @ts-ignore */}
          <Survey dictionary={dict.survey} />
        </div>
      </main>
    </>
  );
}

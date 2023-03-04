import "../globals.css";
import { getDictionary } from "@/get-dictionary";
import { i18n } from "@/i18n-config";

export const metadata = {
  title: "East Gate Survey",
  description: "Survey from East Gate Center",
};

import { Header, Container, Footer } from "./components/UI";
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: any };
}) {
  const data = await getDictionary(params.lang);
  const dirtection = () => {
    if (params.lang === "en") {
      return "ltr";
    } else if (params.lang === "ar") {
      return "rtl";
    } else if (params.lang === "ku") {
      return "rtl";
    }
  };
  return (
    <html lang={params.lang} dir={dirtection()}>
      <body className="bg-light-60 dark:bg-dark-60 text-light-60 dark:text-dark-60 transition-all duration-200">
        <Header data={data.survey} />
        <Container>{children}</Container>
        {/* @ts-ignore */}
        <Footer data={data.survey.web.footer} />
      </body>
    </html>
  );
}

import "../../Assets/Styles/normalize.css";
import "../globals.css";
import "../../Assets/Styles/main.css";
import type { Metadata } from "next";
import { notFound } from "next/dist/client/components/not-found";

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const locales = ["en", "ru", "uz"];

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body className="">{children}</body>
    </html>
  );
}

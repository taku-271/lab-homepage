import { UIProvider } from "@yamada-ui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Takumi Yamashita | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" style={{ height: "100%", scrollBehavior: "smooth" }}>
      <body style={{ height: "100%", margin: 0 }}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}

import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Layout from '../components/Layout';

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata = {
  title: "速読ゴリラ | Speed Reading Gorilla",
  description: "日本語学習者のための速読ウェブサイト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

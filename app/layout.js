import { Inter } from "next/font/google";
import "./globals.css";
import ApolloClientProvider from "@/ApolloClientProvider/ApolloClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD app",
  description: "This is crud application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </body>
    </html>
  );
}

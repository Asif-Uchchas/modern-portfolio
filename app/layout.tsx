import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Provider";
import { TunnelToolbar } from "@tunnel/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asif's Portfolio",
  description: "Asif's Modern and Reactive Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
      </ThemeProvider>
      {process.env.APP_ENV === "staging" && (
          <TunnelToolbar
            projectId="PROJECT_ID"
            branch="BRANCH_NAME"
          />
        )}
      </body>
    </html>
  );
}

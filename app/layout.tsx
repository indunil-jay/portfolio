import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToolBarContent } from "@/components/custom/tool-bar-content";
import { ThemeProvider } from "@/components/custom/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Indunil Jay",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} relative antialiased max-w-screen-lg 2xl:max-w-screen-2xl mx-auto min-h-svh p-4 `}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <div className="fixed !z-[9999] -translate-x-1/2 left-1/2 bottom-4">
                        {/* <ToolBarContent /> */}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

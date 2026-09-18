import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin" ]});

export const metadata: Metadata = {
    title: "UNSW MathSoc | Advancing Mathematics and Careers",
    description: "The UNSW Mathematics Society",
    icons: {
        icon: [
            { url: "/icon-light.png", type: "image/png", sizes: "256x256", media: "(prefers-color-scheme: light)" },
            { url: "/icon-dark.png", type: "image/png", sizes: "256x256", media: "(prefers-color-scheme: dark)" },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
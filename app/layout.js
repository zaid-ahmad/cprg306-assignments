import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Shopping List",
    description: "By Zaid Ahmad",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-zinc-50`}
            >
                {children}
            </body>
        </html>
    );
}

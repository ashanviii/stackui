import Footer from "@/components/layout/Footer";
import Header from "@/components/landing/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "StackUI",
        default: "Home"
    }
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <Header />
        <main className="container mx-auto">
            {children}
        </main>
        <Footer />
        </>
    )
}
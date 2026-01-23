import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <Contact />
            </main>
            <Footer />
        </>
    );
}

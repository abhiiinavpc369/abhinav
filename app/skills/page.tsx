import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Skills from "@/components/sections/Skills";

export default function SkillsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <Skills />
            </main>
            <Footer />
        </>
    );
}

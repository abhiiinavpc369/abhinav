import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <Projects />
            </main>
            <Footer />
        </>
    );
}

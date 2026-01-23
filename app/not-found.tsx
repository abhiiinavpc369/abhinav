import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center justify-center min-vh-100 py-20">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-gray-400 mb-8">Oops! The page you are looking for doesn't exist.</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
                >
                    Go Back Home
                </Link>
            </main>
            <Footer />
        </>
    );
}

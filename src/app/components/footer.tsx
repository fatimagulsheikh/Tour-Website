import Link from "next/link";
import { Container } from "./container";

export function Footer() {
    return <footer className="pt-20 mt-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <Container className="flex flex-col md:flex-row gap-10 justify-between">
            <div>
            <div className="text-lg text-slate-600">Next-Tour 🌍</div>
            <p className="text-slate-400 max-w-sm">
                Discover amazing places at exclusive deals. Eat, Shop, and visit interesting places around the world.
                </p>
            </div>
            <div>
                <div className="text-lg text-slate-600">Contact</div>
                <p className="text-slate-400">Mobile No. 12345345694</p>
                <Link className="text-slate-400 underline" href="email: next-tour@gmail.com">
                Email: next-tour@gmail.com
                </Link>
            </div>
            <p className="text-center text-sm text-slate-400 pt-20 pb-4">
                Copyright @ 2024 Fatima Coders. All Rights Reserved.
                </p>
        </Container>
    </footer>
}
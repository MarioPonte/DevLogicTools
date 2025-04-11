"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-10">
            <div className="text-center text-xs">
                <Link href="https://marioponte.vercel.app/" target="_blank">
                    <span>&copy; Todos os direitos reservados a Mário Ponte - 2025</span>
                </Link>
            </div>
        </footer>
    );
}
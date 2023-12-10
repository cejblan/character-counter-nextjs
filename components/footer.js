import Link from "next/link"

export default function footer() {
    return (
        <footer className="bg-blue-600 text-center text-lg w-full text-white p-2">
            <p>Contador de Caracteres con Next.js, React y TailwindCSS - © Copyright 2024 - Diseño Cejblan</p>
            <Link className="font-extrabold" href="/privacy">Politicas de privacidad</Link>
        </footer>
    )
}
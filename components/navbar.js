import Image from "next/image"
import Link from "next/link"
import Logo from "public/logo_cejblan.png"

export default function navbar() {
    return (
        <nav className="grid grid-cols-7 gap-2 bg-blue-600 text-white text-xl font-semibold max-h-6 mb-4">
            <Link className="col-start-2 col-end-2 bg-orange-500 rounded-b-2xl h-4 a" href="https://www.instagram.com/cejblan/" target="_blank">
                <p>Instagram</p>
            </Link>
            <Link className="col-start-3 col-end-3 bg-orange-500 rounded-b-2xl h-4 a" href="https://www.linkedin.com/in/francisco-gonzalez-449a98154/" target="_blank">
                <p>Linkedin</p>
            </Link>
            <div className="block m-auto pt-1">
                <Link className="col-start-4 col-end-4" href="/">
                    <Image className="m-auto" src={Logo} alt="Logo Cejblan" width="81" height="81" />
                </Link>
            </div>
            <Link className="col-start-5 col-end-5 bg-orange-500 rounded-b-2xl h-4 a" href="https://github.com/cejblan" target="_blank">
                <p>GitHub</p>
            </Link>
            <Link className="col-start-6 col-end-6 bg-orange-500 rounded-b-2xl h-4 a" href="https://codepen.io/Francisco-Gonzalez-cejblan" target="_blank">
                <p>Codepen</p>
            </Link>
        </nav>
    )
}
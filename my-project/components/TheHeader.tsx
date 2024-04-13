import Link from "next/link";
import "./TheHeader.css";

const TheHeader = () => {
    return ( 
        <header className="header">
        <Link href="/">NextJS</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        </header>
    )
}

export default TheHeader;
    
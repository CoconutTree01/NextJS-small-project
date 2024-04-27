'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
    label: string;
    href: string
};

type Props = {
    navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname();
    const session = useSession();
    console.log(session);

    return (<>
        {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
            >
                {link.label}
            </Link>
        ))}
        {session?.data && <Link href="/profile">Profile</Link>}
        {session?.data ? (<Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Link>) : <Link href="/profile">Sign In</Link>}
    </>)
}

export { Navigation }
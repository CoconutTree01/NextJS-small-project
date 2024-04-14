import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About | Next App",
}

export default function About() {
    return <h1 className="text-3xl font-bold underline">Select subitem</h1>
}
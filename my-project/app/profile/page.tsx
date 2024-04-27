import { authConfig } from "@/config/auth";
import { getServerSession } from "next-auth";

export default async function Profile() {
    const session = await getServerSession(authConfig);

    return <div className="text-3xl font-bold underline">
        <h1>Profile of {session?.user?.name}</h1>
        <p>{session?.user?.image && <img src={session?.user.image} alt=""/>}</p>
    </div>;
}
import Link from "next/link"
import { Metadata } from "next"

type Props = {
    posts: any[]
}
export const metadata: Metadata = {
    title: "Blog | Next App",
}

const Posts = ({ posts }: Props) => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export { Posts }
'use client';

import { getPostsBySearch } from "@/app/services/getPosts";
import { useState } from "react";
import { FormEventHandler } from "react";
import {usePosts} from "@/app/store";

type Props = {
    onSearch: (value: any[]) => void
}
const PostSearch = () => {
    const [search, setSearch] = useState('');
    const getPostsBySearch = usePosts((state) => state.getPostsBySearch);
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const posts = await getPostsBySearch(search);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type ="search" value={search} onChange={(event) => setSearch(event.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
}
export {PostSearch};
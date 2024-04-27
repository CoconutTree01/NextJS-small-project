'use client';

import { useState, useEffect } from "react";
import { getAllPosts } from "../services/getPosts";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";
import { usePosts }from "../store";
import { shallow } from "zustand/shallow";


export default function Blog() {
    const [posts, loading, getAllPosts] = usePosts((state) => [state.posts, state.loading, state.getAllPosts], shallow);


    useEffect (() => {
        getAllPosts()
    }, [getAllPosts])

    return (
        <>
            <h1 className="text-3xl font-bold underline">Blog Page</h1>
            <PostSearch />
            {loading ? <h3>Loading...</h3> : (
                <Posts posts={posts} />
            )}
        </>
    )
}
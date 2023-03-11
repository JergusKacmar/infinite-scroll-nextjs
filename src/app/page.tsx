"use client";

import LoadingComponent from "./(components)/loading.component";
import PostComponent from "./(components)/post.component";
import React, { useState } from "react";
import PocketBase from "pocketbase";

export default function Home() {
  const [posts, setPosts] = useState<
    { author: string; date: string; text: string }[]
  >([]);
  const [nextPage, setNextPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);
  const LIMIT = 8;

  const pb = new PocketBase("http://127.0.0.1:8090");

  async function loadMorePosts() {
    const { items, totalPages, page } = await pb
      .collection("posts")
      .getList(nextPage, LIMIT);

    if (page === totalPages) {
      setReachedEnd(true);
    } else {
      setNextPage(page + 1);
    }

    setPosts([...posts, ...(items as any)]);
  }

  return (
    <main>
      {posts.map((post, index) => (
        <PostComponent
          key={index}
          author={post.author}
          date={post.date}
          text={post.text}
        ></PostComponent>
      ))}
      {!reachedEnd ? (
        <LoadingComponent
          onInView={() => {
            loadMorePosts();
          }}
        />
      ) : null}
    </main>
  );
}

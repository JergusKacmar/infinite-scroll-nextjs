"use client";

import LoadingComponent from "./(components)/loading.component";
import PostComponent from "./(components)/post.component";
import React, { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<
    { author: string; date: string; text: string }[]
  >([]);

  const [nextPage, setNextPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);
  const LIMIT = 8;

  async function loadMorePosts() {
    const { items, totalPages, page } = await (
      await fetch(`/api/posts/${nextPage}`)
    ).json();

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

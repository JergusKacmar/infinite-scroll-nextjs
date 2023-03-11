import React from "react";

export default function PostComponent(props: {
  author: string;
  date: string;
  text: string;
}) {
  return (
    <div className="post">
      <div className="author">{props.author}</div>
      <div className="date">{props.date}</div>
      <div className="text">{props.text}</div>
    </div>
  );
}

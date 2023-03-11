"use client";

import React, { useEffect, useRef } from "react";

export default function LoadingComponent(props: { onInView: () => void }) {
  const ref = useRef(null);

  useEffect(() => {
    const componentRef = ref.current;
    if (!componentRef) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          props.onInView();
        }
      },
      { rootMargin: "112px" }
    );

    observer.observe(componentRef);
    return () => {
      observer.unobserve(componentRef);
    };
  });

  return (
    <div ref={ref}>
      <h2>{"Loading..."}</h2>
    </div>
  );
}
